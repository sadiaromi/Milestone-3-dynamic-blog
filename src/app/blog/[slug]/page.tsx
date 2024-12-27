import { getBlogPost } from '../../../lib/api';
import Image from 'next/image';
import CommentSection from '../../../components/CommentSection';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Image
        src={post.coverImage}
        alt={post.title}
        width={1200}
        height={600}
        className="w-full h-[60vh] object-cover rounded-lg mb-8"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center mb-8">
        <span className="text-gray-600 mr-4">{post.date}</span>
        <span className="text-gray-600 mr-4">By {post.author}</span>
        <div className="flex flex-wrap">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div
        className="prose max-w-none mb-12"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <CommentSection />
    </article>
  );
}
