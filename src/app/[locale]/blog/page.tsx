import BlurFade from "@/components/magicui/blur-fade";
import CaseStudyCard from "@/components/animata/card/case-study-card";
import { Link } from "@/i18n/routing";
import { getBlogPosts } from "@/data/blog";
import { getLocale } from "next-intl/server";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const locale = await getLocale();
  const posts = await getBlogPosts(locale);

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      <div className="flex gap-4 flex-wrap md:justify-normal justify-center w-full">
        {posts
          .sort((a, b) =>
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
              ? -1
              : 1
          )
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <CaseStudyCard
                title={post.metadata.summary}
                category={post.metadata.title}
                link={`/${locale}/blog/${post.slug}`}
                image={post.metadata.image}
                type="content"
              />
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
