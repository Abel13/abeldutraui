import Link from "next/link";
import { getAllPosts } from "@/lib/blog/getAllPosts";
import "@/app/blog/mdx.css";
import Image from "next/image";
import { formatDate } from "@/lib/utils/date";

export default async function BlogPage() {
  const posts = await getAllPosts();
  const [lastPost, ...otherPosts] = posts;

  return (
    <div className="">
      <main className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold border-b">
          Abel Dutra UI <label className="text-rose-500">|</label> BLOG
        </h1>

        <div className="flex flex-col md:flex-row gap-6 mb-14 bg-[#1a1a2e] p-4 rounded-lg mt-8">
          <Image
            src={lastPost.frontmatter.coverImage!}
            alt="cover"
            width={600}
            height={300}
            className="rounded-lg object-cover w-full md:w-1/2"
          />
          <div className="flex flex-col justify-between md:w-1/2">
            <Link href={`/blog/${lastPost.slug}`} className="block group">
              <h2 className="text-3xl font-bold text-white group-hover:underline mb-2">
                {lastPost.frontmatter.title}
              </h2>
              <div className="text-sm text-gray-400 mb-4">
                🗓 {formatDate(lastPost.frontmatter.date)} · 📖{" "}
                {lastPost.frontmatter.readingTime}
              </div>
              <p className="text-gray-300">{lastPost.frontmatter.excerpt}</p>
              <span className="mt-6 inline-block text-pink-500 font-semibold">
                Continue Reading →
              </span>
            </Link>
          </div>
        </div>
        {/* Lista de outros posts */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherPosts.map((post) => (
            <li key={post.slug} className="bg-[#1a1a2e] p-4 rounded-lg">
              <Link href={`/blog/${post.slug}`} className="block group">
                <Image
                  src={post.frontmatter.coverImage!}
                  alt="cover"
                  width={400}
                  height={200}
                  className="rounded-md mb-4 object-cover"
                />
                <h2 className="text-xl font-semibold text-white group-hover:underline">
                  {post.frontmatter.title}
                </h2>
                <div className="text-sm text-gray-400 mt-1">
                  🗓 {formatDate(post.frontmatter.date)} · 📖{" "}
                  {post.frontmatter.readingTime}
                </div>
                <p className="text-gray-300 mt-2">{post.frontmatter.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
