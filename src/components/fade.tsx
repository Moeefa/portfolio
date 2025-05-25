import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const fadeVariants = cva("pointer-events-none fixed z-50", {
	variants: {
		direction: {
			top: "top-0 left-0 w-full bg-gradient-to-b",
			bottom: "bottom-0 left-0 w-full bg-gradient-to-t",
			left: "left-0 top-0 h-full bg-gradient-to-r",
			right: "right-0 top-0 h-full bg-gradient-to-l",
		},
		size: {
			sm: "",
			md: "",
			lg: "",
			xl: "",
			"2xl": "",
		},
	},
	compoundVariants: [
		// Size variants for vertical fades (top/bottom)
		{ direction: ["top", "bottom"], size: "sm", class: "h-16" },
		{ direction: ["top", "bottom"], size: "md", class: "h-24" },
		{ direction: ["top", "bottom"], size: "lg", class: "h-32" },
		{ direction: ["top", "bottom"], size: "xl", class: "h-40" },
		{ direction: ["top", "bottom"], size: "2xl", class: "h-48" },

		// Size variants for horizontal fades (left/right)
		{ direction: ["left", "right"], size: "sm", class: "w-16" },
		{ direction: ["left", "right"], size: "md", class: "w-24" },
		{ direction: ["left", "right"], size: "lg", class: "w-32" },
		{ direction: ["left", "right"], size: "xl", class: "w-40" },
		{ direction: ["left", "right"], size: "2xl", class: "w-48" },
	],
	defaultVariants: {
		direction: "top",
		size: "lg",
	},
});

export interface FadeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof fadeVariants> {}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(
	({ className, direction, size, style, ...props }, ref) => {
		const defaultStyle = {
			...style,
			backgroundImage: `linear-gradient(${
				direction === "top"
					? "to bottom"
					: direction === "bottom"
						? "to top"
						: direction === "left"
							? "to right"
							: "to left"
			}, var(--background), transparent)`,
		};

		return (
			<div
				className={cn(fadeVariants({ direction, size }), className)}
				style={defaultStyle}
				ref={ref}
				{...props}
			/>
		);
	},
);
Fade.displayName = "Fade";

export { Fade, fadeVariants };
