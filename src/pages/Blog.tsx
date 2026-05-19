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
        <h1 className="text-2xl md:text-3xl font-normal mb-12 md:mb-16">Blog</h1>

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

        <div className="space-y-8 md:space-y-10">
          {posts?.map((post, i) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group block"
            >
              <article>
                <div className="flex items-baseline gap-4 md:gap-6">
                  <span className="text-muted-foreground text-sm font-normal">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <div className="flex-1">
                    <h2 className="text-lg md:text-xl font-normal group-hover:opacity-70 transition-opacity">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-muted-foreground text-sm md:text-base mt-1">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                  {post.publishedDate && (
                    <span className="text-muted-foreground text-sm hidden md:block">
                      {new Date(post.publishedDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
