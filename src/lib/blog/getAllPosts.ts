import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "src", "content", "blog");

export interface BlogPostMeta {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
    tags?: string[];
    draft?: boolean;
    readingTime: string;
  };
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const files = await fs.readdir(POSTS_DIR);

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (filename) => {
        const filePath = path.join(POSTS_DIR, filename);
        const fileContent = await fs.readFile(filePath, "utf-8");

        const { content, data } = matter(fileContent);

        if (data.draft) return null;

        const readingStats = readingTime(content);

        const slug = filename.replace(/\.mdx$/, "");

        return {
          slug,
          frontmatter: {
            title: data.title,
            date: data.date,
            excerpt: data.excerpt,
            coverImage: `/images/blog/${data.key}/${data.coverImage}`,
            tags: data.tags || [],
            draft: data.draft ?? false,
            readingTime: readingStats.text,
          },
        } as BlogPostMeta;
      })
  );

  // Remove nulos e ordena por data (mais recentes primeiro)
  return posts
    .filter((post): post is BlogPostMeta => post !== null)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}
