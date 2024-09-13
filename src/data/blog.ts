import { list } from "@vercel/blob";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

async function getMDXFiles(dir: string) {
  const { blobs } = await list({
    prefix: `${dir}`,
  });

  return blobs
    .filter((blob) => blob.pathname.endsWith(".mdx"))
    .map((blob) => blob.pathname);
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string, locale: string) {
  const { blobs } = await list({
    prefix: `${locale}/${slug}`,
    limit: 1,
  });

  const res = await fetch(blobs[0].url);
  const source = await res.text();

  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata,
    slug,
  };
}

async function getAllPosts(locale: string) {
  let mdxFiles = await getMDXFiles(locale);

  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      let { metadata, source } = await getPost(slug, locale);
      return {
        metadata,
        slug,
        source,
      };
    })
  );
}

export async function getBlogPosts(locale: string) {
  return getAllPosts(locale);
}
