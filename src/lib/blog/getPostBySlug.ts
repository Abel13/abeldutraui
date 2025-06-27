import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "src", "content", "blog");

export interface BlogPost {
  slug: string;
  frontmatter: {
    key: string;
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
    tags?: string[];
    draft?: boolean;
    readingTime: string;
  };
  content: string;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
    const fileContent = await fs.readFile(filePath, "utf-8");

    const { content, data } = matter(fileContent);

    if (data.draft) return null;

    const readingStats = readingTime(content);

    return {
      slug,
      frontmatter: {
        key: data.key,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        coverImage: `/images/blog/${data.key}/${data.coverImage}`,
        tags: data.tags || [],
        draft: data.draft ?? false,
        readingTime: readingStats.text,
      },
      content,
    };
  } catch (err) {
    console.error(`Erro ao carregar post: ${slug}`, err);
    return null;
  }
}
