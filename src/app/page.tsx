import Link from 'next/link'
import { getBlogPosts } from '../lib/api'
import BlogPreview from '../components/BlogPreview'

export default async function Home() {
  const posts = await getBlogPosts()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="bg-yellow-900 text-white py-20 px-4 rounded-lg mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Our Travel Blog</h1>
          <p className="text-xl md:text-2xl mb-8">Embark on a journey of discovery through our adventures around the globe</p>
          <Link href="/blog" className="bg-white text-yellow-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Explore Our Blog
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Adventures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogPreview key={post.slug} post={post} />
          ))}
        </div>
      </section>
      </div>
      )
}