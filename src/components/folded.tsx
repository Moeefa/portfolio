"use client";

import { useState } from "react";

function chunkArray(array: string[], chunkSize: number) {
	const result = [];
	for (let i = 0; i < array.length; i += chunkSize) {
		result.push(array.slice(i, i + chunkSize));
	}
	return result;
}

export const FoldedPaper = ({ items }: { items: string[] }) => {
	const [isHovered, setIsHovered] = useState(true);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const rotationAngle = 30;
	const itemChunks = chunkArray(items, 2);

	return (
		<div className="flex w-full h-full">
			<div
				className="group transition flex"
				id="folded-paper"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{itemChunks.map((chunk, chunkIndex) => {
					let position: "left" | "right" | "center";
					if (itemChunks.length % 2 === 0) {
						position = chunkIndex < itemChunks.length / 2 ? "left" : "right";
					} else {
						if (chunkIndex < Math.floor(itemChunks.length / 2)) {
							position = "left";
						} else if (chunkIndex > Math.floor(itemChunks.length / 2)) {
							position = "right";
						} else {
							position = "center"; // Middle item
						}
					}

					const multiplier = Math.abs(
						Math.floor(itemChunks.length / 2) - chunkIndex,
					);

					const offset =
						((document.getElementById("folded-paper")?.clientWidth || 0) /
							items.length) *
						0.35;

					console.log(offset);

					return (
						<div
							key={`chunk-${chunkIndex}-${chunk.map((item) => item.substring(0, 10)).join("-")}`}
							className="transition flex"
							style={{
								transform: isHovered
									? `translateX(${
											(
												position === "left"
													? 180
													: position === "right"
														? -180
														: 0
											) *
												multiplier -
											offset
										}px)`
									: "",
							}}
						>
							{chunk.map((item, index) => {
								const isEven = index % 2 === 0;

								return (
									<div
										key={`${chunkIndex}-${index}-${item.substring(0, 20)}`}
										className="p-5 bg-card border border-black h-96 w-64 transition-transform"
										style={{
											zIndex: isEven ? index : items.length - index,
											perspective: "800px",
											transformStyle: "preserve-3d",
											transformOrigin: isEven ? "left" : "right",
											transform: isHovered
												? `perspective(800px) rotateY(${
														isEven ? rotationAngle : -rotationAngle
													}deg) translateX(${isEven ? 111 : -111}px)`
												: "",
										}}
									>
										{item}
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};
