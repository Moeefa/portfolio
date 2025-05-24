"use client";

import {
  AnimatePresence,
  type MotionStyle,
  type SpringOptions,
  motion,
  useSpring,
} from "framer-motion";
import type React from "react";
import { useState } from "react";

export interface MediaItem {
  type: "image" | "video";
  src: string;
  rotate?: number;
  translateX?: string;
  translateY?: string;
  delay?: number;
}

export type TriggerProps = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onMouseMove: (e: React.MouseEvent) => void;
};

export function RevealImages({
  items,
  children,
  offsetX = 10,
  offsetY = 25,
  cursorFollowOptions = {
    stiffness: 300, // Higher stiffness for more immediate following
    damping: 30, // Higher damping to reduce oscillation
    mass: 0.8, // Lower mass for quicker response
    duration: 0.3, // Shorter duration for smoother tracking
  },
  baseDelay = 0.1, // Base delay between each item
}: {
  items: MediaItem[];
  children: (triggerProps: TriggerProps) => React.ReactNode;
  offsetX?: number;
  offsetY?: number;
  cursorFollowOptions?: SpringOptions;
  baseDelay?: number;
}) {
  const x = useSpring(0, cursorFollowOptions);
  const y = useSpring(0, cursorFollowOptions);
  const [isInside, setIsInside] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    x.set(e.clientX + offsetX);
    y.set(e.clientY + offsetY);
  };

  const handleMouseLeave = () => setIsInside(false);
  const handleMouseEnter = () => setIsInside(true);

  const triggerProps: TriggerProps = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseMove: handleMouseMove,
  };

  const baseStyles: MotionStyle = {
    position: "fixed",
    top: y,
    left: x,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    pointerEvents: "none",
  };

  // Bouncy animation only for popup/popout, not for cursor following
  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (delay: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: delay,
        type: "spring",
        stiffness: 280, // Bouncy spring for popup
        damping: 32, // Low damping for more bounce
        mass: 1.2, // Slightly higher mass for more bounce
        velocity: 12, // Initial velocity for pop effect
        opacity: {
          duration: 0.3,
          ease: "easeOut",
        },
      },
    }),
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        opacity: {
          duration: 0.2,
          ease: "easeIn",
        },
      },
    },
  };

  const renderMediaItem = (item: MediaItem, index: number) => {
    const itemStyle = {
      ...baseStyles,
      rotate: item.rotate || 0,
      translateX: item.translateX || "0%",
      translateY: item.translateY || "0%",
    };

    const calculatedDelay =
      item.delay !== undefined ? item.delay : index * baseDelay;

    return (
      <motion.div
        key={item.src}
        style={itemStyle}
        className="rounded-xl absolute z-50 select-none"
        custom={calculatedDelay}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {item.type === "video" ? (
          <motion.video
            src={item.src}
            autoPlay
            muted
            loop
            className="w-64 aspect-video rounded-xl"
          />
        ) : (
          <motion.img src={item.src} className="w-64 aspect-video rounded-xl" />
        )}
      </motion.div>
    );
  };

  return (
    <>
      {children(triggerProps)}
      <AnimatePresence>
        {isInside && items.map((item, index) => renderMediaItem(item, index))}
      </AnimatePresence>
    </>
  );
}
