import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/magicui/blur-fade";
import { Header } from "@/components/header";
import { IconClipboardCopy } from "@tabler/icons-react";
import { Icons } from "@/components/icons";
import { Link } from "@/i18n/routing";
import Markdown from "react-markdown";
import React from "react";
import { ResumeCard } from "@/components/resume-card";
import { DATA as STATIC_DATA } from "@/data/resume";
import { useTranslations } from "next-intl";

const BLUR_FADE_DELAY = 0.04;

const Skeleton = () => (
	<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black" />
);

export default function Page() {
	const t = useTranslations();

	const DATA = {
		education: [
			{
				school: t("education.computer_technichian.title"),
				href: "https://ifmt.edu.br",
				degree: t("education.computer_technichian.degree"),
				logoUrl: "/logos/ifmt.svg",
				start: "2020",
				end: "2023",
			},
			{
				school: t("education.systems_development_technician.title"),
				href: "https://www.secitec.mt.gov.br/",
				degree: t("education.systems_development_technician.degree"),
				logoUrl: "/logos/secitec.png",
				start: "2024",
				end: t("education.present"),
			},
			{
				school: t("education.computer_engineering.title"),
				href: "https://ifmt.edu.br",
				degree: t("education.computer_engineering.degree"),
				logoUrl: "/logos/ifmt.svg",
				start: "2024",
				end: t("education.present"),
			},
		],

		projects: [
			{
				title: "IFCalc",
				href: "https://ifcalc.vercel.app",
				dates: t("projects.ifcalc.dates"),
				active: true,
				description: t("projects.ifcalc.description"),
				technologies: [
					"Next.js",
					"Typescript",
					"TailwindCSS",
					"Shadcn UI",
					"Auth.js",
				],
				links: [
					{
						type: t("projects.website"),
						href: "https://ifcalc.vercel.app",
						icon: <Icons.globe className="size-3" />,
					},
					{
						type: t("projects.source"),
						href: "https://github.com/Moeefa/IFCalc",
						icon: <Icons.github className="size-3" />,
					},
				],
				image: "",
				video: "/projects/ifcalc.mp4",
				header: <Skeleton />,
				className: "md:col-span-2",
				icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
			},
			{
				title: "SimpleTB",
				href: "https://github.com/Moeefa/simpletb",
				dates: t("projects.simpletb.dates"),
				active: true,
				description: t("projects.simpletb.description"),
				technologies: ["Tauri", "React", "Rust", "Typescript", "TailwindCSS"],
				links: [
					{
						type: t("projects.source"),
						href: "https://github.com/Moeefa/simpletb",
						icon: <Icons.github className="size-3" />,
					},
				],
				image: "/projects/simpletb.png",
				video: "",
				header: <Skeleton />,
				className: "md:col-span-2",
				icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
			},
			{
				title: "Rabbit Hole",
				href: "https://github.com/Moeefa/anime-app",
				dates: t("projects.rabbit_hole.dates"),
				active: true,
				description: t("projects.rabbit_hole.description"),
				technologies: [
					"Tauri",
					"React",
					"Rust",
					"Typescript",
					"TailwindCSS",
					"Shadcn UI",
				],
				links: [
					{
						type: t("projects.source"),
						href: "https://github.com/Moeefa/anime-app",
						icon: <Icons.github className="size-3" />,
					},
				],
				image: "/projects/rabbit-hole.png",
				video: "",
				header: <Skeleton />,
				className: "md:col-span-2",
				icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
			},
		],

		...STATIC_DATA,
	};

	return (
		<>
			<Header />
			<main className="flex flex-col min-h-[100dvh] space-y-10 relative">
				<section id="hero" className="max-w-2xl mx-auto px-6 w-full">
					<div className="flex-col flex flex-1 space-y-1.5">
						<BlurFade
							delay={BLUR_FADE_DELAY}
							className="text-3xl font-serif whitespace-pre-line font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-2"
							yOffset={8}
						>
							{t.rich("greeting", {
								name: DATA.name.split(" ")[0],
								wavy: (chunks) => (
									<span className="underline decoration-[hsl(24_55.56_30)]">
										{chunks}
									</span>
								),
							})}
						</BlurFade>
						<BlurFade delay={BLUR_FADE_DELAY * 4}>
							<Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
								{t("summary")}
							</Markdown>
						</BlurFade>
					</div>
				</section>
				<section id="education" className="max-w-2xl mx-auto px-6">
					<div className="flex min-h-0 flex-col gap-y-3">
						<BlurFade delay={BLUR_FADE_DELAY * 7}>
							<h2 className="text-xl font-serif font-bold">
								{t("sections.education")}
							</h2>
						</BlurFade>
						{DATA.education.map((education) => (
							<BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8}>
								<ResumeCard
									key={education.school}
									href={education.href}
									logoUrl={education.logoUrl}
									altText={education.school}
									title={education.school}
									subtitle={education.degree}
									period={`${education.start} - ${education.end}`}
								/>
							</BlurFade>
						))}
					</div>
				</section>

				<section id="skills" className="max-w-2xl mx-auto px-6">
					<div className="flex min-h-0 flex-col gap-y-3">
						<BlurFade delay={BLUR_FADE_DELAY * 9}>
							<h2 className="text-xl font-serif font-bold">
								{t("sections.skills")}
							</h2>
						</BlurFade>
						<div className="flex flex-wrap gap-1">
							{DATA.skills.map((skill, id) => (
								<BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
									<Badge key={skill}>{skill}</Badge>
								</BlurFade>
							))}
						</div>
					</div>
				</section>
				<section id="projects">
					<div className="space-y-12 w-full py-12">
						<BlurFade delay={BLUR_FADE_DELAY * 11}>
							<div className="max-w-2xl mx-auto px-6 flex flex-col items-center justify-center space-y-4 text-center">
								<div className="space-y-2">
									<h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl">
										{t("sections.projects")}
									</h2>
									<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
										{t("projects.summary")}
									</p>
								</div>
							</div>
						</BlurFade>
						<BlurFade delay={BLUR_FADE_DELAY * 11}>
							<div className="overflow-hidden sm:p-0 p-3">
								<div className="flex gap-2 snap-x snap-mandatory overflow-auto scrollbar-none pl-[calc(50vw-284.44px)] pr-[calc(50vw-284.44px)]">
									{DATA.projects.map((project, id) => (
										<React.Fragment key={project.title}>
											<Link href={project.href}>
												{project.video ? (
													<video
														className="snap-always snap-center sm:h-80 sm:min-w-[568.88px] sm:w-[568.88px] object-cover rounded h-40 w-[284.44px] min-w-[284.44px] aspect-video"
														src={project.video}
														autoPlay
														loop
														muted
													/>
												) : (
													// eslint-disable-next-line @next/next/no-img-element
													<img
														src={project.image}
														alt={project.title}
														className="snap-always snap-center rounded sm:h-80 sm:min-w-[568.88px] sm:w-[568.88px] object-cover h-40 w-[284.44px] min-w-[284.44px] aspect-video"
													/>
												)}
											</Link>
										</React.Fragment>
									))}
								</div>
							</div>
						</BlurFade>
					</div>
				</section>
			</main>
		</>
	);
}
