import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Calendar, User, Tag } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function Articole() {
  const { data: posts, isLoading } = trpc.blog.getPublished.useQuery();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Articole</h1>
              <p className="text-xl text-primary-foreground/90">
                Ultimele noutați, articole și insights din lumea tehnologiei
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-16">
          <div className="container">
            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Se încarcă articolele...</p>
              </div>
            ) : posts && posts.length > 0 ? (
              <div className="max-w-4xl mx-auto">
                {posts.map((post) => {
                  const tags = post.tags ? JSON.parse(post.tags) : [];
                  const publishedDate = post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString("ro-RO", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "";

                  return (
                    <Card key={post.id} className="article-card mb-12">
                      <CardContent className="p-0">
                        {post.featuredImage && (
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="featured-image w-full h-auto object-cover rounded-lg mb-6"
                          />
                        )}

                        <div className="px-2">
                          {post.category && (
                            <Badge variant="secondary" className="mb-3">
                              {post.category}
                            </Badge>
                          )}

                          <h2 className="post-title text-4xl font-bold mb-3">
                            <Link href={`/blog/${post.slug}`}>
                              <span className="hover:text-primary transition-colors cursor-pointer">
                                {post.title}
                              </span>
                            </Link>
                          </h2>

                          <div className="post-meta flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                            {post.author && (
                              <div className="flex items-center gap-1">
                                <User size={16} />
                                <span>{post.author}</span>
                              </div>
                            )}
                            {publishedDate && (
                              <div className="flex items-center gap-1">
                                <Calendar size={16} />
                                <span>{publishedDate}</span>
                              </div>
                            )}
                          </div>

                          {post.excerpt && (
                            <p className="post-excerpt text-lg text-muted-foreground mb-4 leading-relaxed">
                              {post.excerpt}
                            </p>
                          )}

                          {tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {tags.map((tag: string, idx: number) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  <Tag size={12} className="mr-1" />
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          )}

                          <Link href={`/blog/${post.slug}`}>
                            <Button variant="link" className="read-more p-0 h-auto text-primary">
                              Citește mai mult →
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  Nu există articole publicate momentan.
                </p>
                <Link href="/">
                  <Button variant="outline">Înapoi la Homepage</Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
