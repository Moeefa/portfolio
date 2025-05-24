"use client";

import { RevealImages, type MediaItem } from "@/components/reveal";
import type { SpringOptions } from "framer-motion";

export function RevealLink({
	children,
	...props
}: {
	children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
		items: MediaItem[];
		offsetX?: number;
		offsetY?: number;
		cursorFollowOptions?: SpringOptions;
		baseDelay?: number;
	}) {
	return (
		<RevealImages
			items={props.items}
			offsetX={props.offsetX}
			offsetY={props.offsetY}
			cursorFollowOptions={props.cursorFollowOptions}
			baseDelay={props.baseDelay}
		>
			{(triggerProps) => (
				<a {...props} {...triggerProps}>
					{children}
				</a>
			)}
		</RevealImages>
	);
}
