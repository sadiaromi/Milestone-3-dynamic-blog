import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 mt-2 text-center">About Us</h1>

      <Image
        src="/images/travel.about.jpg"
        alt="Our Team exploring nature"
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-lg mb-8 shadow-lg"
      />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="mb-4">
          Welcome to our travel blog! We are a group of passionate travelers united by our love for exploring the world and sharing its beauty with others. Each of us brings unique perspectives and experiences to create content that inspires, informs, and empowers our readers.
        </p>
        <p>
          From bustling cities to serene landscapes, we aim to uncover hidden gems, share cultural insights, and connect with people from all walks of life.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          Our mission is to inspire wanderlust and provide practical guidance for travelers around the globe. We believe that travel has the power to enrich lives, broaden horizons, and create unforgettable memories.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Inspire you to step out of your comfort zone and explore new destinations.</li>
          <li>Provide actionable travel tips, itineraries, and recommendations.</li>
          <li>Promote sustainable and responsible travel practices.</li>
        </ul>
        <p>
          Whether you&apos;re a seasoned globetrotter or planning your very first trip, we&apos;re here to help you every step of the way.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p>
          We envision a world where travel is accessible to everyone and fosters deeper connections across cultures. Through our blog, we strive to break barriers, celebrate diversity, and encourage meaningful interactions between travelers and locals.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Join Us on This Adventure!</h2>
        <p className="mb-4">
          Let&apos;s discover new cultures, taste exotic cuisines, and create unforgettable memories together. Follow us on our journey as we explore the hidden treasures of the world and share our experiences with you.
        </p>
        <p className="mb-4">
          We love to hear from you! Share your stories, ask questions, or just say hello. Let&apos;s build a community of travelers who inspire and support each other.
        </p>
      </section>
    </div>
  );
}
