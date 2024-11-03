import React from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface CaseStudyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  category?: string;
  image?: string;
  logo?: string;
  link?: string;
  type?: "content" | "simple-image"; // Decides between text or image
}

// ContentCard Component for rendering text + image
const ContentCard: React.FC<CaseStudyCardProps> = ({
  title,
  category,
  image,
  logo,
}) => {
  return (
    <div
      className="relative flex h-full flex-col items-start justify-between rounded-lg p-4"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {image && (
        <div className="opacity-70rounded-lg absolute inset-0 bg-black" />
      )}

      <div className="relative z-10">
        {category && (
          <div className="text-xs dark:text-gray-500 text-gray-300">
            {category}
          </div>
        )}

        {title && (
          <div className="mr-2 text-lg font-bold leading-tight tracking-wide text-red-300">
            {title}
          </div>
        )}
      </div>
      {logo && ( // Check if image exists
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logo} alt={title} className="z-10 h-9 rounded-lg" />
      )}
    </div>
  );
};

// SimpleImageCard component for rendering only image
const SimpleImageCard: React.FC<CaseStudyCardProps> = ({ image }) => {
  return (
    <div
      className="relative flex w-full flex-col items-start justify-between rounded-lg p-4"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

const HoverRevealSlip = ({ show }: { show: React.ReactNode }) => {
  const t = useTranslations();
  const common = "absolute flex w-full h-full [backface-visibility:hidden]";

  return (
    <div className={cn("group relative h-60 w-52 [perspective:1000px]")}>
      {/* Back cover - static */}
      <div
        className={cn(
          "absolute inset-0 h-full w-48 rounded-lg bg-accent shadow-md"
        )}
      ></div>

      {/* Card container with slight book opening effect on hover */}
      <div
        className={cn(
          "relative z-50 h-full w-48 origin-left transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(-30deg)]"
        )}
      >
        {/* Front side of the card */}
        <div
          className={cn(
            "h-full w-full rounded-lg bg-background shadow-md",
            common
          )}
        >
          {show}
        </div>
      </div>

      {/* Sliding link/tab coming out from behind */}
      <div
        className={cn(
          "z-1 absolute bottom-0 right-0 flex h-48 w-14 -translate-x-10 transform items-start justify-start rounded-r-lg bg-green-600 pl-2 pt-2 text-xs font-bold text-white transition-transform duration-300 ease-in-out [backface-visibility:hidden] group-hover:translate-x-0 group-hover:rotate-[5deg]"
        )}
      >
        <div className="-rotate-90 whitespace-nowrap pb-16 pr-9 uppercase">
          {t("blog.click_to_read")}
        </div>
      </div>
    </div>
  );
};

// Main CaseStudyCard Component
export default function CaseStudyCard({
  title,
  category,
  link,
  image,
  logo,
  type,
}: CaseStudyCardProps) {
  return (
    <div className="flex gap-8">
      <a href={link} className="block">
        <HoverRevealSlip
          show={
            type === "content" ? (
              <ContentCard
                title={title}
                category={category}
                image={image}
                logo={logo}
              />
            ) : (
              <SimpleImageCard image={image} title={title} />
            )
          }
        />
      </a>
    </div>
  );
}