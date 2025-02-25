import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Link } from "@/i18n/routing";
import { LocaleSelect } from "@/components/locale-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { useTranslations } from "next-intl";

export const Header = () => {
  const t = useTranslations();

  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex gap-1">
            <Button variant="link" size="sm" asChild>
              <Link href="/">{t("sections.home")}</Link>
            </Button>
            <Button variant="link" size="sm" asChild>
              <Link href="/blog">{t("sections.blog")}</Link>
            </Button>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-secondary/70">
          <ModeToggle />
          </div>
          <div className="hidden md:flex">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/Moeefa" className="bg-secondary/70" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Icons.github className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <LocaleSelect />
        </div>
      </div>
    </header>
  );
};