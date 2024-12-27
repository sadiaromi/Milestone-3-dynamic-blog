import { getBlogPosts } from '../../lib/api'
import BlogPreview from '../../components/BlogPreview'

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Travel Adventures</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogPreview key={post.slug} post={post} />
        ))}
      </div>
      </div>
)
}