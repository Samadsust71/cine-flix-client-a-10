import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adds a smooth scroll effect
    });
  }, [])
  return (
    <div className="bg-gray-900 text-white py-10 px-6 md:px-16">
      <h1 className="text-4xl font-bold mb-6 text-center">About CineFlix</h1>
      <p className="text-lg leading-relaxed mb-6 text-center">
        Welcome to <span className="text-[#FFB347] font-semibold">CineFlix</span>, where every frame tells a story!  
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-base leading-relaxed">
          We aim to make discovering and managing your favorite movies seamless and enjoyable. CineFlix was built to bring movie lovers together by offering a platform to:
        </p>
        <ul className="list-disc list-inside mt-4 text-base space-y-2">
          <li><span className="text-[#FFB347] font-medium">Discover New Movies:</span> Search for films across genres, eras, and ratings.</li>
          <li><span className="text-[#FFB347] font-medium">Manage Your Favorites:</span> Add movies to your personalized favorites list with ease.</li>
          <li><span className="text-[#FFB347] font-medium">Track Your Watchlist:</span> Stay on top of the movies you’ve watched or plan to see.</li>
          <li><span className="text-[#FFB347] font-medium">Rate & Review:</span> Share your opinions and connect with a community of cinephiles.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">What Makes Us Unique?</h2>
        <ul className="list-disc list-inside mt-4 text-base space-y-2">
          <li><span className="text-[#FFB347] font-medium">Dynamic Movie Management:</span> Enjoy intuitive features like adding or removing movies from your favorites list.</li>
          <li><span className="text-[#FFB347] font-medium">User-Centric Design:</span> A clean, responsive interface that works on all devices.</li>
          <li><span className="text-[#FFB347] font-medium">Dark/Light Theme Toggle:</span> Tailor your experience to your preference with an easy theme switcher.</li>
          <li><span className="text-[#FFB347] font-medium">Movie Rating Integration:</span> View ratings to help you choose the best movies to watch.</li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Join the CineFlix Family</h2>
        <p className="text-base leading-relaxed">
          CineFlix is more than a website; it’s a community for people who love cinema. We invite you to dive into the CineFlix experience, explore new films, and create your personal movie universe.
        </p>
        <p className="text-base mt-4">
          Together, let’s celebrate the art of storytelling—one movie at a time.
        </p>
      </section>
    </div>
  );
};

export default About;
