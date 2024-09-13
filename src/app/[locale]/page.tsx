import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import DotPattern from "@/components/magicui/dot-pattern";
import { HomeIcon } from "@radix-ui/react-icons";
import { Icons } from "@/components/icons";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import Markdown from "react-markdown";
import { NotebookIcon } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { DATA as STATIC_DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const t = useTranslations();

  const DATA = {
    education: [
      {
        school: t("education.computer_technichian.title"),
        href: "https://ifmt.edu.br",
        degree: t("education.computer_technichian.degree"),
        logoUrl: "/ifmt.svg",
        start: "2020",
        end: "2023",
      },
      {
        school: t("education.systems_development_technician.title"),
        href: "https://www.secitec.mt.gov.br/",
        degree: t("education.systems_development_technician.degree"),
        logoUrl: "/secitec.png",
        start: "2024",
        end: t("education.present"),
      },
      {
        school: t("education.computer_engineering.title"),
        href: "https://ifmt.edu.br",
        degree: t("education.computer_engineering.degree"),
        logoUrl: "/ifmt.svg",
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
        video: "ifcalc.mp4",
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
        image: "/rabbit-hole.png",
        video: "",
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
        image: "/simpletb.png",
        video: "",
      },
    ],

    ...STATIC_DATA,
  };

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <DotPattern
            className={cn(
              "top-[-52em] [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl whitespace-pre-line font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`${t("greeting", { name: DATA.name.split(" ")[0] })}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={t("description")}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">{t("sections.about")}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {t("summary")}
          </Markdown>
        </BlurFade>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">{t("sections.education")}</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade key={id} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
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
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">{t("sections.skills")}</h2>
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {t("sections.projects")}
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("projects.summary")}
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {t("sections.social")}
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t.rich("social", {
                  threads: (chunks) => (
                    <Link
                      href={DATA.contact.social.Threads.url}
                      className="text-blue-500 hover:underline inline-flex"
                    >
                      {chunks}
                      <Icons.threads className="size-4 self-center mx-1" />
                    </Link>
                  ),
                  discord: (chunks) => (
                    <Link
                      href={DATA.contact.social.Discord.url}
                      className="text-blue-500 hover:underline inline-flex"
                    >
                      {chunks}
                      <Icons.discord className="size-4 self-center mx-1" />
                    </Link>
                  ),
                })}
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
