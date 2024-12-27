import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '../lib/api'

const BlogPreview = ({ post }: { post: BlogPost }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={post.coverImage} alt={post.title} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="text-sm text-gray-600">{post.date}</span>
          <span className="mx-2">•</span>
          <span className="text-sm text-gray-600">{post.author}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex flex-wrap mb-4">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">{tag}</span>
          ))}
        </div>
        <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
          Read More
        </Link>
      </div>
    </div>
  )
}

export default BlogPreview