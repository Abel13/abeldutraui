import { getPostBySlug } from "@/lib/blog/getPostBySlug";
import type { Metadata } from "next";

interface BlogMetadataProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: BlogMetadataProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) return {};

  const { title, excerpt, coverImage, key } = post.frontmatter;
  const baseUrl = "https://abeldutraui.me";

  return {
    title,
    description: excerpt,
    openGraph: {
      title,
      description: excerpt,
      type: "article",
      url: `${baseUrl}/blog/${params.slug}`,
      images: coverImage
        ? [
            {
              url: `${baseUrl}/images/blog/${key}/${coverImage}`,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: coverImage ? "summary_large_image" : "summary",
      title,
      description: excerpt,
      images: coverImage
        ? [`${baseUrl}/images/blog/${key}/${coverImage}`]
        : undefined,
    },
  };
}
