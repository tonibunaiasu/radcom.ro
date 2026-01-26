import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Calendar, User, Tag } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function Blog() {
  const { data: posts, isLoading } = trpc.blog.getPublished.useQuery();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Știri</h1>
              <p className="text-xl text-primary-foreground/90">
                Ultimele noutăți, articole și insights din lumea tehnologiei
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
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
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
                      <Card key={post.id} className="hover:shadow-lg transition-shadow">
                        <CardContent className="pt-6">
                          {post.featuredImage && (
                            <img
                              src={post.featuredImage}
                              alt={post.title}
                              className="w-full h-64 object-cover rounded-lg mb-6"
                            />
                          )}

                          {post.category && (
                            <Badge variant="secondary" className="mb-3">
                              {post.category}
                            </Badge>
                          )}

                          <h2 className="text-3xl font-bold mb-3">
                            <Link href={`/blog/${post.slug}`}>
                              <span className="hover:text-primary transition-colors cursor-pointer">
                                {post.title}
                              </span>
                            </Link>
                          </h2>

                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
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
                            <p className="text-muted-foreground mb-4 leading-relaxed">
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
                            <Button variant="link" className="p-0 h-auto text-primary">
                              Citește mai mult →
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Categories */}
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-4">Categorii</h3>
                      <div className="space-y-2">
                        {Array.from(new Set(posts.map((p) => p.category).filter(Boolean))).map(
                          (category, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between py-2 border-b last:border-0"
                            >
                              <span className="text-sm">{category}</span>
                              <Badge variant="secondary">
                                {posts.filter((p) => p.category === category).length}
                              </Badge>
                            </div>
                          )
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Posts */}
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-4">Articole Recente</h3>
                      <div className="space-y-4">
                        {posts.slice(0, 5).map((post) => (
                          <div key={post.id} className="border-b last:border-0 pb-3 last:pb-0">
                            <Link href={`/blog/${post.slug}`}>
                              <h4 className="text-sm font-medium hover:text-primary transition-colors cursor-pointer mb-1">
                                {post.title}
                              </h4>
                            </Link>
                            {post.publishedAt && (
                              <p className="text-xs text-muted-foreground">
                                {new Date(post.publishedAt).toLocaleDateString("ro-RO")}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Newsletter CTA */}
                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">Newsletter</h3>
                      <p className="text-sm text-primary-foreground/90 mb-4">
                        Abonează-te pentru a primi ultimele noutăți
                      </p>
                      <Button variant="secondary" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        Abonează-te
                      </Button>
                    </CardContent>
                  </Card>
                </div>
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
