import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedDate: string;
  author: string;
  featuredImage: { url: string; title: string } | null;
}

const fetchPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase.functions.invoke("contentful-blog");
  if (error) throw error;
  return data.posts;
};

const Blog = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: fetchPosts,
  });

  return (
    <Layout>
      <div className="px-8 md:px-12 py-12 md:py-20">
        <div className="flex items-baseline justify-between mb-12 md:mb-16">
          <h1 className="font-display text-5xl md:text-7xl text-foreground">
            <span className="font-display-italic">Journal</span>
          </h1>
          <span className="tracked-label text-muted-foreground hidden md:block">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle" />
            Notes from the frontier
          </span>
        </div>

        {isLoading && (
          <p className="text-muted-foreground text-sm">Loading posts…</p>
        )}

        {error && (
          <p className="text-destructive text-sm">
            Failed to load posts. Please try again later.
          </p>
        )}

        {posts && posts.length === 0 && (
          <p className="text-muted-foreground text-sm">No posts yet.</p>
        )}

        <div className="divide-y divide-border border-y border-border">
          {posts?.map((post, i) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group block py-6 md:py-8"
            >
              <article className="flex items-baseline gap-6 md:gap-10">
                <span className="tracked-label text-muted-foreground w-8 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h2 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-muted-foreground text-sm md:text-base mt-2 leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>
                  )}
                </div>
                {post.publishedDate && (
                  <span className="tracked-label text-muted-foreground hidden md:block shrink-0">
                    {new Date(post.publishedDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                )}
              </article>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
