import { cn } from "@/lib/utils";

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
  const values = blurValues.map((value) => value * blurIntensity);

  return (
    <div
      className={cn(
        "flex-0 left-0 pointer-events-none fixed z-[1]",
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
        className
      )}
    >
      <div className="relative w-full h-full">
        {values.map((blur, index) => (
          <div
            key={index}
            className={`absolute inset-0 pointer-events-none`}
            style={{
              zIndex: index + 1,
              backdropFilter: `blur(${blur}px)`,
              maskImage: `linear-gradient(to ${direction}, rgba(0, 0, 0, 0) ${
                index * 12.5
              }%, rgb(0, 0, 0) ${index * 12.5 + 12.5}%, rgb(0, 0, 0) ${
                index * 12.5 + 25
              }%, rgba(0, 0, 0, 0) ${index * 12.5 + 37.5}%)`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
