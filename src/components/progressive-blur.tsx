import { cn } from "@/lib/utils";
import { useMemo } from "react";

interface ProgressiveBlurProps {
	blurIntensity?: number;
	blurValues?: number[];
	className?: string;
	direction: "top" | "bottom" | "left" | "right";
}

export const ProgressiveBlur = ({
	blurIntensity = 1.25,
	blurValues = [0.0625, 0.125, 0.25, 0.5, 1, 2, 4, 8],
	className,
	direction,
}: ProgressiveBlurProps) => {
	const values = useMemo(
		() => blurValues.map((value) => value * blurIntensity),
		[blurIntensity, blurValues],
	);

	const baseClassName = useMemo(() => {
		return cn(
			"flex-0 left-0 pointer-events-none fixed z-50",
			direction === "top" || direction === "bottom"
				? "w-full h-32"
				: "h-full w-32",
			direction === "top"
				? "top-0"
				: direction === "bottom"
					? "bottom-0"
					: direction === "left"
						? "left-0"
						: "right-0",
			className,
		);
	}, [direction, className]);

	// Common styles for blur elements
	const commonBlurStyle = useMemo(
		() => ({
			WebkitBackfaceVisibility: "hidden" as const,
			WebkitPerspective: 1000,
			WebkitTransform: "translateZ(0)",
			backfaceVisibility: "hidden" as const,
			perspective: 1000,
			transform: "translateZ(0)",
			willChange: "transform",
		}),
		[],
	);

	return (
		<div className={baseClassName}>
			<div className="relative w-full h-full">
				{values.map((blur, index) => {
					const startPercent = index * 12.5;
					const maskImage = `linear-gradient(to ${direction}, rgba(0, 0, 0, 0) ${
						startPercent
					}%, rgb(0, 0, 0) ${startPercent + 12.5}%, rgb(0, 0, 0) ${
						startPercent + 25
					}%, rgba(0, 0, 0, 0) ${startPercent + 37.5}%)`;

					return (
						<div
							key={`${direction}-blur-${blur}`}
							className="absolute inset-0 pointer-events-none"
							style={{
								...commonBlurStyle,
								zIndex: index + 1,
								backdropFilter: `blur(${blur}px)`,
								maskImage,
							}}
						/>
					);
				})}
			</div>
		</div>
	);
};
