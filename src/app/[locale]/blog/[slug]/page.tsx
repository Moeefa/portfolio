import { getBlogPosts, getPost } from "@/data/blog";
import { getLocale, getTranslations } from "next-intl/server";

import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { DATA } from "@/data/resume";
import { Link } from "@/i18n/routing";
import type { Metadata } from "next";
import { Suspense } from "react";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  const locale = await getLocale();
  let post = await getPost(params.slug, locale);

  if (!post.slug) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    modifiedAt,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const locale = await getLocale();
  const t = await getTranslations();
  let post = await getPost(params.slug, locale);

  if (!post.slug) {
    return (
      <section>
        <Link href="/blog" className="flex items-center gap-3 mb-8">
          <ArrowLeftIcon />
          {t("sections.back")}
        </Link>
        <h1 className="bg-destructive w-fit scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {t("post_not_found.title")}
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {t("post_not_found.message")}
        </p>
      </section>
    );
  }

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.modifiedAt || post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <Link href="/blog" className="flex items-center gap-3 mb-8">
        <ArrowLeftIcon />
        {post.metadata.return ? post.metadata.return : t("sections.back")}
      </Link>

      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>

          {post.metadata.modifiedAt && (
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Last modified: {formatDate(post.metadata.modifiedAt)}
            </p>
          )}
        </Suspense>
      </div>
      <article
        className="prose dark:prose-invert sm:mb-0 mb-12"
        dangerouslySetInnerHTML={{ __html: post.source }}
      ></article>
    </section>
  );
}
