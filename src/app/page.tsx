import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Icons from "@/components/icons";
import Link from "next/link";
import { projects } from "./data-projects";
import { skills } from "./data-skills";

export default function Home() {
  /* Calculate age */
  const age = Math.floor(
    Math.abs(Date.now() - new Date("2005-10-16").getTime()) /
      (1000 * 3600 * 24) /
      365.25
  );

  return (
    <>
      <div className="transition-opacity duration-1000 ease-in-out">
        <svg
          width="15em"
          height="12em"
          viewBox="150 150 25 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 -z-10 h-52 lg:h-96"
        >
          <path
            d="M209.809 388.429c-11.496-3.934-21.078-9.407-30.255-16.141-16.223-11.904-25.444-27.326-29.048-47.037-1.378-7.54-1.601-14.906-1.476-22.352.191-11.411 3.277-22.245 7.198-32.962 7.432-20.311 19.608-37.908 32.57-54.672 9.344-12.084 20.628-22.956 33.493-31.77 7.928-5.431 15.49-11.424 23.596-16.564 10.627-6.737 21.918-12.067 35.032-11.079 13.832 1.041 25.047 7.143 34.065 17.688 11.443 13.382 16.813 29.957 23.134 45.783 2.869 7.183 8.547 14.361 6.35 23.211 4.148 6.039 2.845 13.231 3.926 19.87 1.2 7.373 2.028 15.026 1.43 22.429-1.495 18.533-5.113 36.337-15.668 52.574-6.351 9.77-13.841 17.634-22.985 24.406-6.186 4.582-13.675 5.892-20.688 7.875-6.756 1.911-14.21 1.194-21.275 2.202-10.364 1.478-19.705-3.06-29.563-4.484-13.373-1.932-26.284-6.316-38.117-12.476-13.057-6.797-27.226-12.938-34.737-27.114-5.459-10.303-5.537-20.899-3.638-32.402 2.914-17.64 10.979-32.563 20.923-46.736 5.191-7.399 9.873-15.305 18.274-20.093 4.585-2.614 8.26-6.819 12.366-10.282 10.749-9.069 22.854-15.311 36.686-18.314 19.326-4.196 40.914-2.68 50.809 16.006 7.76 4.325 10.787 12.458 15.596 19.195 4.278 5.991 5.994 12.863 8.408 19.613 2.637 7.374 4.529 14.768 5.996 22.446 3.406 17.833 1.511 34.131-11.856 47.577-13.261 13.338-29.767 20.331-47.752 25.002-14.786 3.84-29.665 3.562-44.616 3.44-3.439-.028-6.855-1.267-10.313-1.657-.701-.079-1.55 1.156-2.331 1.785.501.601.905 1.589 1.519 1.744 5.303 1.336 11.129 1.569 15.861 3.977 7.008 3.565 14.632 3.154 21.845 5.13 14.587 3.995 29.254 3.305 43.496-2.3 9.318-3.667 16.887-9.005 23.351-17.246 6.927-8.833 13.366-17.572 16.569-28.311 5.03-16.864 8.68-34.26 6.164-51.714-2.4-16.644-6.114-33.254-14-48.563-3.761-7.302-6.032-15.372-9.776-22.686-4.341-8.48-10.155-15.974-18.583-20.991-.747-.445-1.391-1.076-2.162-1.466-22.947-11.62-22.748-8.529-46.804-1.542-5.839 1.696-11.028 6.307-15.983 10.247-13.706 10.899-27.085 22.197-38.963 35.152-13.864 15.12-24.318 32.204-33.006 50.893-5.367 11.545-6.376 23.786-10.401 35.388 4.105 10.34.299 21.587 4.567 32.245 7.239 18.077 19.411 30.719 35.935 40.506 13.166 7.797 26.991 12.237 41.92 14.751 11.458 1.929 22.892 4.398 34.449 3.362 20.851-1.869 41.47-6.438 58.146-19.533 14.946-11.738 27.511-26.41 35.176-44.278 5.866-13.676 10.772-27.609 13.384-42.523 1.867-10.664 1.996-21.24.986-31.551-.699-7.13.828-15.542-5.051-21.744 1.422-7.063-2.604-13.102-3.707-19.691-.188-1.122-.437-2.292-.947-3.292-6.479-12.697-11.931-26.109-19.932-37.768-4.861-7.084-10.255-16.294-21.615-15.827-.714.029-1.655-.691-2.169-1.325-3.603-4.446-8.596-5.394-13.884-6.677-11.553-2.802-21.515-3.368-31.73-.334-20.982 6.233-40.14 15.771-56.523 30.595-4.091 3.702-8.904 6.61-13.429 9.822-.498.353-1.283.299-1.935.434.12-.833-.054-1.926.411-2.452a79.982 79.982 0 0 1 5.827-5.907c15.54-14.281 32.495-26.241 51.659-35.521 14.666-7.101 29.827-8.647 44.982-6.513 8.55 1.204 17.201 6.557 24.291 12.014 8.515 6.553 16.451 14.282 22.205 23.678 1.61 2.629 2.401 5.758 3.588 8.649.539 1.314.778 3.015 1.747 3.849 9.127 7.85 11.105 19.406 14.432 29.847 1.791 5.62 5.305 11.035 4.966 17.364-.329 6.15 4.332 11.741 1.28 18.49-1.185 2.621 1.403 6.73 1.474 10.177.418 20.439-3.997 39.657-11.929 58.692-7.47 17.926-17.691 33.584-31.21 46.913-8.034 7.921-17.646 14.674-27.559 20.105-6.825 3.74-15.44 4.113-23.152 6.344-15.716 4.547-31.493 5.27-47.521 1.852-7.113-1.516-14.378-2.322-21.497-3.815-3.874-.812-7.588-2.386-12.296-3.617Zm92.232-220.602 1.709.135c-.569-.352-1.139-.705-1.709-1.981l-1.71-.135c.57.353 1.14.705 1.71 1.981Zm-13.835 82.149c-2.214-7.644-8.372-12.079-14.903-14.444-6.69-2.422-13.786-5.774-21.392-3.977-12.348 2.918-23.588 8.282-34.33 15.094-12.935 8.202-23.243 19.235-33.424 30.279-5.548 6.019-9.982 13.987-10.931 22.037-2.226 18.894 6.447 33.489 24.909 41.392 9.853 4.218 20.574 6.078 31.05 7.174 15.692 1.641 31.434.136 46.538-5.25 6.428-2.292 12.801-4.765 19.314-6.783 15.437-4.783 25.781-15.102 29.845-30.342 2.135-8.001.648-16.924 1.202-25.404.535-8.181-2.263-15.653-5.301-22.739-4.949-11.547-10.669-22.718-17.834-33.262-8.172-12.025-19.975-16.12-32.938-17.938-18.493-2.593-34.395 5.507-48.745 15.528-19.266 13.453-33.698 31.806-46.263 51.56-.35.55.13 1.629.223 2.462.652-.347 1.336-.645 1.948-1.053 1.064-.708 2.301-1.304 3.083-2.261 3.359-4.107 6.272-8.62 9.91-12.45 8.778-9.243 18.834-16.708 30.005-23.108 12.897-7.389 26.02-12.986 41.007-12.264 14.149.681 25.111 7.465 32.113 19.847 7.864 13.908 7.515 18.069 7.071 33.431-.287 9.929-2.601 18.808-7.465 27.426-10.279 18.211-25.802 27.121-46.444 28.206-8.534.448-15.745-3.536-23.586-5.366-9.225-2.152-16.052-7.154-21.921-13.869-5.101-5.836-10.204-12.588-7.495-20.666 2.871-8.565 6.517-17.355 11.894-24.482 8.44-11.186 19.471-19.511 34.141-21.808 9.806-1.535 18.721-.693 26.276 6.412 6.094 5.73 10.311 12.286 12.487 20.686 3.66 14.124-.775 25.219-13.924 31.318-2.58 1.196-5.07 2.605-7.704 3.66-8.39 3.358-17.176 4.487-26.11 3.646-6.111-.575-13.099-5.809-13.228-9.92-.22-7.057-.386-13.957 3.418-20.708 5.064-8.988 11.448-12.908 20.615-9.702 2.227.779 3.542 4.17 5.277 6.36-2.091.887-4.37 2.822-6.243 2.487-10.463-1.874-10.45-2.071-14.574 7.303-.57 1.297-.883 2.722-1.194 4.114-.393 1.761-1.439 3.944-.789 5.228.836 1.651 2.896 3.084 4.74 3.756 12.78 4.654 29.67 1.554 39.058-8.758 3.117-3.423 4.866-6.99 5.057-11.806.393-9.933-5.058-16.968-11.649-22.753-3.841-3.372-9.937-6.411-14.696-5.986-7.753.693-15.924 3.585-22.021 8.566-6.932 5.664-12.751 12.862-18.343 19.954-6.037 7.657-4.778 20.684 2.237 27.471 14.038 13.581 30.635 20.087 50.051 15.349 9.293-2.268 18.302-6.548 24.263-14.6 3.89-5.254 7.123-11.145 9.72-17.154 1.685-3.897 1.81-8.504 2.427-12.823 1.431-10.003-2.123-19.067-6.432-29.07Zm41.504-98.763c-.676-.923-1.308-1.886-2.078-2.723-.104-.113-.896.408-1.369.635.841 1.004 1.683 2.007 3.447 2.088Zm-12.912-5.538c.977.253 1.951.517 2.939.709.031.006.207-.746.315-1.144-.777-.163-1.554-.326-3.254.435Zm-3.689-1.846 1.106.738c-.061-.554-.122-1.108-1.106-.738Z"
            fill="currentColor"
          />
        </svg>

        <main className="flex min-h-screen flex-col py-6 lg:py-16 lg:px-52 container space-y-5">
          <section className="flex items-center space-x-4 justify-start">
            <Avatar>
              <AvatarImage src="/avatar.jpeg" alt="avatar" />
              <AvatarFallback>LH</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">
                Luiz Henrique
              </h1>
              <div className="flex items-center gap-2">
                <Badge className="shadow-box border-none">
                  Front-end Developer
                </Badge>
              </div>
            </div>
          </section>

          <section className="relative text-pretty leading-7 text-sm [&:not(:first-child)]:mt-4 [&_div]:gap-1 [&_div]:h-[1.4rem] [&_div]:align-middle [&_div]:items-center [&_div]:leading-none [&_div]:bg-secondary/75">
            Hello there! 👋
            <br />
            I’m a {age} years old front-end developer, with experience in{" "}
            <Badge variant="secondary" className="shadow-box border-none">
              <Icons.React size="1.05em" /> React
            </Badge>
            ,{" "}
            <Badge variant="secondary" className="shadow-box border-none">
              <Icons.NextJS size="1.15em" /> Next.js
            </Badge>
            ,{" "}
            <Badge variant="secondary" className="shadow-box border-none">
              <Icons.Typescript size="1.10em" /> Typescript
            </Badge>{" "}
            and a few other technologies. I’m currently graduated as Computer
            Technician and studying Computer Engineering at the{" "}
            <Link href="https://ifmt.edu.br/" target="_blank">
              <Badge variant="secondary" className="shadow-box border-none">
                <Icons.IFMT /> Federal Institute of Mato Grosso
              </Badge>
            </Link>
            , and I’m always looking for new opportunities to learn and grow as
            a developer.
            <br />
            You can find me on:{" "}
            <Link
              href="https://www.linkedin.com/in/xinaider"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Badge variant="secondary" className="shadow-box border-none">
                <Icons.LinkedIn size="1.25em" /> LinkedIn
              </Badge>
            </Link>
            ,{" "}
            <Link
              href="https://github.com/Moeefa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Badge variant="secondary" className="shadow-box border-none">
                <Icons.Github /> GitHub
              </Badge>
            </Link>
            ,{" "}
            <Badge
              variant="secondary"
              className="after:content-['Discord'] hover:after:animate-[change_0.25s_ease-in-out_forwards] shadow-box border-none"
            >
              <Icons.Discord />
            </Badge>{" "}
            and{" "}
            <Link
              href="mailto:luizhenrique.xinaider@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Badge variant="secondary" className="shadow-box border-none">
                <Icons.Gmail /> Gmail
              </Badge>
            </Link>
            . Feel free to reach out to me!
            <br />
            It’s always a pleasure to meet new people.
          </section>

          <Tabs defaultValue="projects">
            <TabsList className="grid h-full sm:w-[400px] w-full grid-cols-2 shadow-box">
              <TabsTrigger value="projects">📚 Projects</TabsTrigger>
              <TabsTrigger value="skills">🏹 Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="projects">
              <section className="space-y-3 relative">
                <svg
                  viewBox="0 0 602 602"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -top-16 -left-32 -z-10 h-32 -scale-x-100 -rotate-[55deg] hidden lg:block"
                >
                  <path
                    d="M351.246 440.388C347.365 444.999 344.205 449.234 340.576 453.018C339.59 454.045 337.187 453.71 335.434 454C335.439 452.42 335.1 450.747 335.502 449.276C340.128 432.316 345.369 415.507 349.42 398.413C352.742 384.398 353.463 369.689 357.574 355.958C361.883 341.57 368.546 327.838 374.874 314.139C376.608 310.387 380.831 307.785 383.911 304.656C385.915 308.074 387.6 311.734 389.979 314.868C398.96 326.701 396.113 340.393 396.525 353.61C396.583 355.476 397.539 357.315 398.08 359.167C399.736 358.058 401.282 356.691 403.083 355.918C404.725 355.212 406.787 354.527 408.416 354.905C418.115 357.155 424.202 352.026 429.096 344.868C436.229 334.433 441.692 322.479 450.306 313.522C463.969 299.314 464.265 281.141 468.01 264.092C470.099 254.586 463.618 247.962 456.511 240.69C437.951 221.698 413.779 211.367 392.967 195.999C384.297 189.596 372.773 187.146 362.721 182.52C342.979 173.434 321.611 172.143 300.575 169.732C292.713 168.832 284.516 171.014 276.46 171.631C256.738 173.14 237.03 175.065 217.278 175.875C195.05 176.787 182.94 191.19 172.056 207.734C171.33 208.839 171.312 210.664 170.377 211.341C146.428 228.666 146.135 257.175 137.221 281.555C127.299 308.692 117.826 335.994 108.036 363.18C106.448 367.589 104.742 372.124 102.118 375.929C100.504 378.269 96.7476 380.927 94.4959 380.51C92.3721 380.116 89.9611 376.087 89.3937 373.306C85.4979 354.214 90.5359 336.419 95.1033 317.756C103.356 284.033 117.311 252.718 131.13 221.436C140.775 199.603 157.122 181.223 177.364 168.047C186.66 161.997 198.693 160.169 209.464 156.368C212.308 155.365 215.531 154.718 217.796 152.919C225.088 147.125 232.298 146.214 240.253 151.45C241.547 152.302 243.874 152.437 245.407 151.935C257.922 147.837 269.756 151.226 281.984 153.975C296.104 157.148 310.761 161.037 324.93 160.214C351.51 158.671 373.361 170.172 394.08 182.976C424.088 201.519 456.461 216.898 481.636 242.669C493.528 254.843 495.502 274.053 487.616 289C482.958 297.828 480.414 307.792 477.198 317.34C476.758 318.647 477.936 320.499 478.365 322.099C479.389 321.095 480.899 320.272 481.354 319.055C483.709 312.759 485.43 306.202 488.123 300.066C489.52 296.882 492.472 294.382 494.721 291.573C496.103 294.825 499.379 298.73 498.524 301.209C495.583 309.735 491.56 317.959 487.267 325.93C482.286 335.177 476.432 343.951 471.359 353.152C470.595 354.538 471.418 358.458 472.525 358.96C482.904 363.669 493.616 367.644 503.982 372.38C507.674 374.067 510.68 377.257 514 379.761C511.219 381.618 508.569 384.81 505.633 385.101C492.99 386.353 484.465 395.665 473.729 400.293C452.798 409.317 431.398 417.507 409.643 424.279C393.106 429.428 375.694 431.736 358.739 435.604C356.232 436.177 354.098 438.389 351.246 440.388ZM455.289 338.453C456.677 336.207 458.064 333.961 459.451 331.715C456.953 332.892 453.749 333.452 452.085 335.358C446.428 341.843 441.203 348.721 436.11 355.666C435.313 356.753 436.059 358.974 436.092 360.67C437.493 360.169 439.458 360.092 440.204 359.098C445.018 352.691 449.565 346.084 455.289 338.453ZM116.469 291.573C117.377 288.848 118.285 286.122 119.193 283.397C117.922 285.759 116.651 288.121 116.469 291.573Z"
                    fill="currentColor"
                  />
                </svg>

                <div className="flex flex-wrap gap-4 p-1">
                  {projects.map((project) => (
                    <Card
                      key={project.title}
                      className="shadow-box border-none sm:w-48 w-full hover:scale-105 transition-all flex flex-col bg-secondary/90 rounded-2xl border border-black/10 dark:border-white/5"
                    >
                      <CardHeader>
                        {project.icon && project.icon({ size: "2em" })}
                        <h4 className="text-md font-semibold bg-gradient-to-b from-foreground to-secondary-foreground/70 inline-block text-transparent bg-clip-text">
                          {project.title}
                        </h4>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs">{project.description}</p>
                      </CardContent>
                      <CardFooter className="space-x-1 mt-auto">
                        <a
                          href={project.url}
                          className="text-xs text-muted-foreground w-full"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="h-7 shadow-box-foreground w-full gap-0.5 items-center">
                            Visit{" "}
                            <ExternalLink className="size-2.5 self-start" />
                          </Button>
                        </a>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </section>
            </TabsContent>
            <TabsContent value="skills">
              <section className="space-y-3">
                <div className="flex flex-wrap gap-4 items-stretch relative">
                  <h2 className="hidden lg:block scroll-m-20 w-52 text-4xl font-semibold tracking-tight absolute -z-10 top-0 -right-44 rotate-90">
                    Skills Habilidades Fähigkeiten
                  </h2>
                  <div className="w-full flex gap-2 overflow-y-hidden overflow-x-visible pb-[20px] p-1">
                    {skills.map((skill) => (
                      <Card
                        key={skill.title}
                        className="shadow-box border-none rounded-2xl p-4 cursor-default min-w-24 sm:w-24 h-24 text-xs hover:scale-105 transition-all min-h-full bg-secondary/90 border border-black/10 dark:border-white/5"
                      >
                        <CardHeader className="p-0">
                          <h4 className="text-md font-semibold bg-gradient-to-b from-foreground to-zinc-400 inline-block text-transparent bg-clip-text">
                            {skill.icon({ size: "2em" })}
                          </h4>
                          <p className="text-md">{skill.title}</p>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </>
  );
}
