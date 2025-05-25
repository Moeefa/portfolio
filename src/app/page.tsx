"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { RevealLink } from "@/components/reveal-link";
import { ExternalLinkIcon } from "lucide-react";
import { useState } from "react";

export default function Home() {
	const [expandedImage, setExpandedImage] = useState<string | null>(null);

	const handleImageClick = (imageSrc: string) => {
		setExpandedImage(imageSrc);
	};

	const closeExpandedImage = () => {
		setExpandedImage(null);
	};

	return (
		<>
			{/* Expanded image overlay - improved for mobile */}
			{expandedImage && (
				<div
					className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-2 sm:p-4 cursor-pointer"
					onClick={closeExpandedImage}
					onKeyDown={(e) => {
						if (e.key === "Escape" || e.key === "Enter") {
							closeExpandedImage();
						}
					}}
				>
					<div className="relative flex items-center justify-center max-w-full max-h-[90vh] w-full h-full animate-scale-in">
						<img
							src={expandedImage}
							alt="Expanded project"
							className="h-full w-full object-contain"
						/>
						<button
							type="button"
							className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
							onClick={(e) => {
								e.stopPropagation();
								closeExpandedImage();
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								aria-hidden="true"
								role="img"
								aria-label="Close image"
							>
								<line x1="18" y1="6" x2="6" y2="18" />
								<line x1="6" y1="6" x2="18" y2="18" />
							</svg>
						</button>
					</div>
				</div>
			)}

			<div className="grid grid-rows-[auto_1fr_auto] justify-center min-h-screen p-4 sm:p-8 pb-16 sm:pb-20 pt-8 sm:pt-12 font-[family-name:var(--font-inter-sans)]">
				<main className="max-w-[50ch] px-4 sm:px-0 flex flex-col gap-6 sm:gap-[32px] items-center sm:items-start w-full">
					<div className="flex flex-row gap-4 items-center w-full z-50">
						<Avatar className="w-[90px] h-[90px] shadow-sm border border-border">
							<AvatarFallback>LH</AvatarFallback>
							<AvatarImage alt="Profile image" src="/avatar.jpg" />
						</Avatar>
						<div className="text-left">
							<h1 className="text-xl font-semibold">Luiz Henrique</h1>
							<p className="text-sm text-muted-foreground text-pretty">
								Computer Engineer Student at IFMT
							</p>
						</div>
					</div>

					<div className="flex flex-col gap-4 w-full">
						<h2 className="text-left text-sm">About</h2>
						<div className="flex flex-col gap-4 w-full px-6 sm:p-0">
							<p className="text-muted-foreground text-sm">
								I am a computer engineer student at IFMT, with a passion for
								technology and software development. I enjoy learning new
								programming languages and frameworks, and I am always looking
								for opportunities to improve my skills.
							</p>
							<p className="text-muted-foreground text-sm">
								In my free time, I enjoy playing video games, ukulele, and
								acoustic guitar. I am also interested in photography and enjoy
								capturing moments from my life and travels.
							</p>
						</div>
					</div>

					<div className="flex flex-col gap-4 w-full">
						<h2 className="text-left text-sm">Contact</h2>
						<div className="w-full px-6 sm:p-0">
							<div className="grid grid-cols-1 gap-4">
								<div className="flex flex-col sm:flex-row sm:items-center">
									<span className="text-muted-foreground/80 w-full sm:w-32 sm:mb-0 text-sm">
										Email
									</span>
									<a
										href="mailto:luizhenrique.xinaider@gmail.com"
										className="hover:underline truncate text-sm"
									>
										luizhenrique.xinaider@gmail.com
										<ExternalLinkIcon className="ml-2 select-none hidden sm:inline size-4" />
									</a>
								</div>
								<div className="flex flex-col sm:flex-row sm:items-center">
									<span className="text-muted-foreground/80 w-full sm:w-32 sm:mb-0 text-sm">
										LinkedIn
									</span>
									<a
										href="https://www.linkedin.com/in/xinaider/"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:underline text-sm flex items-center"
									>
										xinaider
										<ExternalLinkIcon className="ml-2 select-none hidden sm:inline size-4" />
									</a>
								</div>
								<div className="flex flex-col sm:flex-row sm:items-center">
									<span className="text-muted-foreground/80 w-full sm:w-32 sm:mb-0 text-sm">
										Instagram
									</span>
									<RevealLink
										href="https://www.instagram.com/schneider_com_x/"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:underline text-sm flex items-center"
										items={[
											{
												type: "image",
												src: "/instagram-1.jpg",
												rotate: 2,
												translateX: "0%",
												translateY: "0%",
												delay: 0,
											},
											{
												type: "image",
												src: "/instagram-2.jpg",
												rotate: -1,
												translateX: "25%",
												translateY: "10%",
												delay: 0.05,
											},
										]}
									>
										schneider_com_x
										<ExternalLinkIcon className="ml-2 select-none hidden sm:inline size-4" />
									</RevealLink>
								</div>
								<div className="flex flex-col sm:flex-row sm:items-center">
									<span className="text-muted-foreground/80 w-full sm:w-32 sm:mb-0 text-sm">
										GitHub
									</span>
									<a
										href="https://github.com/Moeefa"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:underline text-sm flex items-center"
									>
										Moeefa
										<ExternalLinkIcon className="ml-2 select-none hidden sm:inline size-4" />
									</a>
								</div>
								<div className="flex flex-col sm:flex-row sm:items-center">
									<span className="text-muted-foreground/80 w-full sm:w-32 sm:mb-0 text-sm">
										Twitter/X
									</span>
									<a
										href="https://x.com/ItsMoeefa"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:underline text-sm flex items-center"
									>
										ItsMoeefa
										<ExternalLinkIcon className="ml-2 select-none hidden sm:inline size-4" />
									</a>
								</div>
								<div className="flex flex-col sm:flex-row sm:items-center">
									<span className="text-muted-foreground/80 w-full sm:w-32 sm:mb-0 text-sm">
										Discord
									</span>
									<a
										href="https://discord.com"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:underline text-sm flex items-center"
									>
										Moeefa
										<ExternalLinkIcon className="ml-2 select-none hidden sm:inline size-4" />
									</a>
								</div>
							</div>
							<div className="flex flex-col sm:flex-row gap-4 pb-6 py-4 max-w-full overflow-hidden w-full">
								<a
									href="https://maps.app.goo.gl/cVLuZRhcaYXsqP3q9"
									target="_blank"
									rel="noopener noreferrer"
									className="w-full sm:w-auto"
								>
									<div className="relative rounded-xl overflow-hidden shadow-sm border border-border h-40 sm:h-52 w-full sm:w-80">
										<div className="h-full w-full">
											{/* Cloud 1 - Slower moving */}
											<img
												src="/cloud.png"
												alt="Cloud"
												className="absolute w-64 z-10 -translate-y-24 select-none pointer-events-none animate-cloud-slow"
												style={{
													top: "20%",
													left: "0%",
												}}
											/>
											{/* Cloud 2 - Faster moving */}
											<img
												src="/cloud.png"
												alt="Cloud"
												className="absolute w-56 z-10 select-none pointer-events-none animate-cloud-fast"
												style={{
													top: "30%",
													left: "20%",
												}}
											/>
											<div className="relative w-full h-full">
												<img
													src="/map.png"
													alt="Map showing Cuiabá, MT, Brazil"
													className="w-full h-full object-cover select-none pointer-events-none"
												/>
												<div
													className="absolute w-8 h-8"
													style={{
														left: "76%",
														top: "43%",
														transform: "translate(-50%, -50%)",
														zIndex: 20,
													}}
												>
													<div className="absolute w-8 h-8 bg-blue-500 rounded-full animate-[ping_2s_cubic-bezier(0,_0,_0.2,_1)_infinite]" />
													<div className="w-8 h-8 relative bg-white border-border border-2 rounded-full flex items-center justify-center">
														<div className="w-6 h-6 bg-blue-500 rounded-full" />
													</div>
												</div>
												<div className="absolute left-2 bottom-2 z-40">
													<div className="bg-white bg-opacity-80 border border-[oklch(0.922_0_0)] p-2 rounded-lg">
														<p className="text-xs text-muted-foreground">
															Cuiabá, MT
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</a>
								<div className="rounded-xl overflow-hidden shadow-sm border border-border h-40 sm:h-52 w-full sm:w-48">
									<div className="relative h-full w-full">
										<img
											src="/widget.jpg"
											alt="Widget"
											className="w-full h-full object-cover object-center select-none pointer-events-none"
											style={{ objectPosition: "0% 100%" }}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-4 w-full pb-6">
						<h2 className="text-left text-sm">Projects</h2>
						<div className="w-full px-6 sm:p-0">
							<div className="grid grid-cols-1 gap-6">
								<div className="flex flex-col sm:flex-row sm:items-start">
									<span className="text-muted-foreground/80 w-full sm:w-32 sm:mb-0 flex-shrink-0 text-sm">
										Ongoing
									</span>
									<div className="max-w-full sm:max-w-[calc(100%-8rem)]">
										<div>
											<h3 className="text-sm">
												Serenity
												{/* <span className="ml-1 select-none">↗</span> */}
											</h3>
											<p className="text-muted-foreground text-sm">
												Mental health support application with emergency button.
											</p>
											<p className="text-muted-foreground text-sm">
												Provides immediate support for users experiencing
												psychological distress.
											</p>
											<div className="mt-4">
												<p className="text-muted-foreground text-sm">
													Serenity offers a quick emergency system that notifies
													trusted contacts during crisis moments, along with
													educational content about mental health and well-being
													tracking tools.
												</p>
												<p className="text-muted-foreground text-sm mt-2">
													The app creates a safe space for users to monitor
													their emotional health and access support networks,
													with an intuitive interface built with Flutter for
													maximum accessibility.
												</p>
												<p className="text-muted-foreground text-sm mt-2">
													Our goal is to transform how people manage their
													mental health, providing accessible resources to
													promote emotional well-being and prevent crises.
												</p>
												<div className="flex gap-1 mt-4 overflow-x-auto">
													<div
														className="min-w-[120px] h-[250px] bg-muted rounded-xl shadow-sm border border-border cursor-pointer transition-transform"
														onClick={() => handleImageClick("/serenity-1.jpg")}
														onKeyDown={(e) => {
															if (e.key === "Enter" || e.key === "Space") {
																handleImageClick("/serenity-1.jpg");
															}
														}}
														aria-label="View larger image"
													>
														<img
															className="w-full h-full object-cover object-center rounded-xl"
															src="/serenity-1.jpg"
															alt="Serenity 1"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="flex flex-col sm:flex-row sm:items-start">
									<span className="text-muted-foreground/80 w-full sm:w-32 sm:mb-0 flex-shrink-0 text-sm">
										2024
									</span>
									<div className="max-w-full sm:max-w-[calc(100%-8rem)]">
										<div>
											<h3 className="text-sm">
												<a
													href="https://github.com/Moeefa/simpletb"
													target="_blank"
													rel="noopener noreferrer"
													className="hover:underline flex items-center"
												>
													SimpleTB
													<ExternalLinkIcon className="ml-2 select-none hidden sm:inline size-4" />
												</a>
											</h3>
											<p className="text-muted-foreground text-sm">
												Windows taskbar replacement application.
											</p>
											<p className="text-muted-foreground text-sm">
												Built with Tauri and React for a minimal, clean
												interface.
											</p>
											<div className="mt-4">
												<p className="text-muted-foreground text-sm">
													SimpleTB replaces the standard Windows taskbar with a
													lightweight topbar featuring a minimalist design and
													essential functionality.
												</p>
												<p className="text-muted-foreground text-sm mt-2">
													The application leverages Tauri&apos;s native
													performance with React&apos;s flexibility to create an
													unobtrusive interface that integrates with Windows
													while consuming minimal system resources.
												</p>
												<p className="text-muted-foreground text-sm mt-2">
													Currently in active development with some known
													issues. The project is open for community
													contributions through pull requests and issue
													reporting.
												</p>
												<div className="flex gap-1 mt-4 overflow-x-auto">
													<div
														className="min-h-[120px] w-[250px] bg-muted rounded-xl shadow-sm border border-border cursor-pointer transition-transform"
														onClick={() => handleImageClick("/simpletb-1.png")}
														onKeyDown={(e) => {
															if (e.key === "Enter" || e.key === "Space") {
																handleImageClick("/simpletb-1.png");
															}
														}}
														aria-label="View larger image"
													>
														<img
															className="w-full h-full object-cover object-center rounded-xl"
															src="/simpletb-1.png"
															alt="SimpleTB screenshot"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="flex flex-col sm:flex-row sm:items-start">
									<span className="text-muted-foreground/80 w-full sm:w-32 sm:mb-0 flex-shrink-0 text-sm">
										2024
									</span>
									<div className="max-w-full sm:max-w-[calc(100%-8rem)]">
										<div>
											<h3 className="text-sm">
												<a
													href="https://github.com/Moeefa/anime-app"
													target="_blank"
													rel="noopener noreferrer"
													className="hover:underline flex items-center"
												>
													Rabbit Hole
													<ExternalLinkIcon className="ml-2 select-none hidden sm:inline size-4" />
												</a>
											</h3>
											<p className="text-muted-foreground text-sm">
												Ad-free anime streaming application.
											</p>
											<div className="mt-4">
												<p className="text-muted-foreground text-sm">
													Rabbit Hole provides a comfortable, ad-free anime
													watching experience with an intuitive interface for
													searching and streaming favorite anime series.
												</p>
												<p className="text-muted-foreground text-sm mt-2">
													The app crawls popular anime websites to aggregate
													content, creating a unified streaming platform with
													minimal interference and maximum enjoyment.
												</p>
												<p className="text-muted-foreground text-sm mt-2">
													Using Tauri&apos;s efficient native runtime combined
													with React&apos;s component-based architecture, Rabbit
													Hole delivers smooth performance while maintaining a
													small resource footprint.
												</p>
												<div className="flex gap-1 mt-4 overflow-x-auto">
													<div
														className="min-h-[120px] w-[250px] bg-muted rounded-xl shadow-sm border border-border cursor-pointer transition-transform"
														onClick={() =>
															handleImageClick("/rabbithole-1.png")
														}
														onKeyDown={(e) => {
															if (e.key === "Enter" || e.key === "Space") {
																handleImageClick("/rabbithole-1.png");
															}
														}}
														aria-label="View larger image"
													>
														<img
															className="w-full h-full object-cover object-center rounded-xl"
															src="/rabbithole-1.png"
															alt="Rabbit Hole screenshot"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="flex flex-col sm:flex-row sm:items-start">
									<span className="text-muted-foreground/80 w-full sm:w-32 sm:mb-0 flex-shrink-0 text-sm">
										2022
									</span>
									<div className="max-w-full sm:max-w-[calc(100%-8rem)]">
										<div>
											<h3 className="text-sm">
												<a
													href="https://github.com/Moeefa/ifcalc"
													target="_blank"
													rel="noopener noreferrer"
													className="hover:underline flex items-center"
												>
													IFCalc
													<ExternalLinkIcon className="ml-2 select-none hidden sm:inline size-4" />
												</a>
											</h3>
											<p className="text-muted-foreground text-sm">
												Grade calculator for students.
											</p>
											<p className="text-muted-foreground text-sm">
												Provides real-time grade tracking and approval status
												forecasting.
											</p>
											<div className="mt-4">
												<p className="text-muted-foreground text-sm">
													IFCalc connects directly to the IF (Instituto Federal)
													student portal to retrieve current grades and
													attendance records, automatically calculating approval
													status across all courses and subjects.
												</p>
												<p className="text-muted-foreground text-sm mt-2">
													The app features a clean dashboard showing minimum
													required grades, helping students plan their study
													priorities. It also includes grid simulation tools.
												</p>
												<p className="text-muted-foreground text-sm mt-2">
													Designed with student privacy in mind, IFCalc uses
													secure authentication to access academic records while
													providing a lightweight, responsive interface
													accessible on both mobile and desktop devices.
												</p>
												<div className="flex gap-1 mt-4 overflow-x-auto">
													<div
														className="min-h-[120px] w-[250px] bg-muted rounded-xl shadow-sm border border-border cursor-pointer transition-transform"
														onClick={() => handleImageClick("/ifcalc-1.png")}
														onKeyDown={(e) => {
															if (e.key === "Enter" || e.key === "Space") {
																handleImageClick("/ifcalc-1.png");
															}
														}}
														aria-label="View larger image"
													>
														<img
															className="w-full h-full object-cover object-center rounded-xl"
															src="/ifcalc-1.png"
															alt="IFCalc screenshot"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-4 w-full">
						<h2 className="text-left text-sm">Education</h2>
						<div className="w-full px-6 sm:p-0">
							<div className="grid grid-cols-1 gap-6 sm:gap-4">
								<div className="flex flex-col sm:flex-row sm:items-start">
									<span className="text-muted-foreground/80 w-full sm:w-32 sm:mb-0 flex-shrink-0 text-sm">
										2024 — Now
									</span>
									<div className="max-w-full sm:max-w-[calc(100%-8rem)]">
										<div>
											<h3 className="text-sm">Computer Engineer</h3>
											<p className="text-muted-foreground text-sm">
												Instituto Federal de Mato Grosso
											</p>
										</div>
									</div>
								</div>
								<div className="flex flex-col sm:flex-row sm:items-start">
									<span className="text-muted-foreground/80 w-full sm:w-32 sm:mb-0 flex-shrink-0 text-sm">
										2023 — Now
									</span>
									<div className="max-w-full sm:max-w-[calc(100%-8rem)]">
										<div>
											<h3 className="text-sm">
												Systems Development Technician
											</h3>
											<p className="text-muted-foreground text-sm">SECITECI</p>
										</div>
									</div>
								</div>
								<div className="flex flex-col sm:flex-row sm:items-start">
									<span className="text-muted-foreground/80 w-full sm:w-32 sm:mb-0 flex-shrink-0 text-sm">
										2021 — 2023
									</span>
									<div className="max-w-full sm:max-w-[calc(100%-8rem)]">
										<div>
											<h3 className="text-sm">Computer Technician</h3>
											<p className="text-muted-foreground text-sm">
												Instituto Federal de Mato Grosso
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}
