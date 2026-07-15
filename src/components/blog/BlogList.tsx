import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  lang: string;
}

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-spicy-gray text-lg">Coming soon...</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/${post.lang}/blog/${post.slug}`}
          className="group block rounded-lg border border-spicy-darkgray bg-spicy-darkgray/50 overflow-hidden hover:border-spicy-red transition-all duration-300"
        >
          <div className="aspect-[16/9] bg-spicy-darkgray flex items-center justify-center overflow-hidden">
            <div className="text-spicy-gray/30 text-sm">Image placeholder</div>
          </div>
          <div className="p-6">
            <time className="text-xs text-spicy-gray">{post.date}</time>
            <h2 className="mt-2 text-xl font-semibold text-spicy-white group-hover:text-spicy-red transition-colors">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-spicy-gray line-clamp-2">
              {post.excerpt}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
