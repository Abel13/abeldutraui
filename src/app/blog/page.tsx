import Link from "next/link";
import { getAllPosts } from "@/lib/blog/getAllPosts";
import "@/app/blog/mdx.css";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="">
      <main className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>

        <ul className="space-y-10">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block group">
                <h2 className="text-2xl font-semibold group-hover:underline">
                  {post.frontmatter.title}
                </h2>
                <div className="text-sm text-gray-500 mt-1">
                  🗓 {formatDate(post.frontmatter.date)} · 📖{" "}
                  {post.frontmatter.readingTime}
                </div>
                <p className="text-gray-700 mt-2">{post.frontmatter.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

// Utils
function formatDate(date: string) {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
