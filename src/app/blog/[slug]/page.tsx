import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/blog/getPostBySlug";
import "@/app/blog/mdx.css";
import Image from "next/image";
import MdxRenderer from "@/components/MdxRenderer";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const { frontmatter, content } = post;

  return (
    <article>
      <h1>{frontmatter.title}</h1>
      <span>
        🗓 {formatDate(frontmatter.date)} · 📖 {frontmatter.readingTime}
      </span>
      <div className="mdx-content">
        <Image
          src={frontmatter.coverImage!}
          alt="cover"
          width={700}
          height={700}
        />
        <MdxRenderer code={content} />
      </div>
      {frontmatter.tags.map((i) => (
        <span key={i} className="mdx-content">
          {i}
        </span>
      ))}
    </article>
  );
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
