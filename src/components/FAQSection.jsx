import React from "react";

const FAQSection = () => {
  const faqs = [
    { question: "What is Cineflix?", answer: "Cineflix is a streaming service offering a variety of TV shows, movies, anime, documentaries, and more." },
    { question: "How much does Cineflix cost?", answer: "Plans range from $8.99 to $17.99 a month, depending on your region and chosen package." },
    { question: "Where can I watch?", answer: "You can watch on any internet-connected device that offers the Cineflix app, such as smart TVs, game consoles, or mobile devices." },
    { question: "How do I cancel?", answer: "You can cancel anytime by visiting your account settings." },
    { question: "What can I watch on Cineflix?", answer: "You can watch a variety of TV shows, movies, and exclusive Cineflix Originals." },
  ];

  return (
    <section className="my-12 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl lg:text-4xl font-bold dark:text-white mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="bg-base-200 dark:bg-transparent dark:text-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <summary className="font-semibold cursor-pointer flex justify-between items-center">
              {faq.question}
              <span className="text-xl font-bold">+</span>
            </summary>
            <p className="mt-2">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
