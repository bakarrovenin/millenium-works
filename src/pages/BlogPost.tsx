import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Layout from "@/components/Layout";

interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  body: any;
  excerpt: string;
  publishedDate: string;
  author: string;
  featuredImage: { url: string; title: string } | null;
}

const fetchPost = async (slug: string): Promise<BlogPostData> => {
  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contentful-blog?slug=${slug}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) throw new Error("Failed to fetch post");
  const result = await response.json();
  if (!result.posts?.length) throw new Error("Post not found");
  return result.posts[0];
};

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: any) => (
      <p className="text-foreground/90 text-sm md:text-base leading-relaxed mb-4">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (_node: any, children: any) => (
      <h2 className="text-xl md:text-2xl font-normal mt-8 mb-4">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_node: any, children: any) => (
      <h3 className="text-lg md:text-xl font-normal mt-6 mb-3">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (_node: any, children: any) => (
      <ul className="list-disc list-inside space-y-1 mb-4 text-foreground/90">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_node: any, children: any) => (
      <ol className="list-decimal list-inside space-y-1 mb-4 text-foreground/90">{children}</ol>
    ),
    [BLOCKS.QUOTE]: (_node: any, children: any) => (
      <blockquote className="border-l-2 border-muted-foreground pl-4 italic my-4 text-muted-foreground">
        {children}
      </blockquote>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { title, file } = node.data.target.fields;
      return (
        <img
          src={`https:${file.url}`}
          alt={title || ""}
          className="w-full rounded my-6"
        />
      );
    },
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:opacity-70 transition-opacity"
      >
        {children}
      </a>
    ),
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: () => fetchPost(slug!),
    enabled: !!slug,
  });

  return (
    <Layout>
      <div className="px-8 md:px-12 py-12 md:py-20 max-w-3xl">
        <Link
          to="/blog"
          className="text-muted-foreground text-sm hover:opacity-70 transition-opacity mb-8 inline-block"
        >
          ← Back to Blog
        </Link>

        {isLoading && (
          <p className="text-muted-foreground text-sm">Loading…</p>
        )}

        {error && (
          <p className="text-destructive text-sm">Failed to load post.</p>
        )}

        {post && (
          <article>
            <h1 className="font-display text-4xl md:text-6xl text-foreground mb-6 leading-[1.05]">
              {post.title}
            </h1>
            <div className="flex gap-4 tracked-label text-muted-foreground mb-10 border-b border-border pb-6">
              {post.publishedDate && (
                <time>
                  {new Date(post.publishedDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              )}
              {post.author && <span>— {post.author}</span>}
            </div>

            {post.featuredImage && (
              <img
                src={post.featuredImage.url}
                alt={post.featuredImage.title}
                className="w-full mb-10"
              />
            )}

            <div className="prose-minimal">
              {post.body && documentToReactComponents(post.body, richTextOptions)}
            </div>
          </article>
        )}
      </div>
    </Layout>
  );
};

export default BlogPost;
