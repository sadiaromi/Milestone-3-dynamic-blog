
export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <h1 className="text-4xl font-bold mb-8 mt-2 text-center">Contact Us</h1>
      <p className="text-lg mb-6 text-center">
        We&apos;d love to connect with you! Feel free to reach out for collaborations, opportunities, or just to say hello.
      </p>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border rounded border-gray-300"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border rounded border-gray-300"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
          <textarea
            id="message"
            rows={6}
            className="w-full p-3 border rounded border-gray-300"
            placeholder="Write your message"
          >
          </textarea>
        </div>
        <button
          type="button"
          className="bg-yellow-950 text-white px-6 py-3 rounded hover:bg-yellow-800 w-full sm:w-auto"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
