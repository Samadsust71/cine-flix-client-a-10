import Lottie from "lottie-react";
import React from "react";
import faqAnimationData from "../assets/faqLottieData.json"

const FAQSection = () => {
  const faqs = [
    { question: "What is Cineflix?", answer: "Cineflix is a streaming service offering a variety of TV shows, movies, anime, documentaries, and more." },
    { question: "How much does Cineflix cost?", answer: "Plans range from $8.99 to $17.99 a month, depending on your region and chosen package." },
    { question: "Where can I watch?", answer: "You can watch on any internet-connected device that offers the Cineflix app, such as smart TVs, game consoles, or mobile devices." },
    { question: "How do I cancel?", answer: "You can cancel anytime by visiting your account settings." },
    { question: "What can I watch on Cineflix?", answer: "You can watch a variety of TV shows, movies, and exclusive Cineflix Originals." },
  ];

  return (
    <section className="my-10">
      <h2 className="text-2xl lg:text-4xl font-bold dark:text-white mb-8 text-start border-l-4 border-[#FFB347] pl-2">
        Frequently Asked Questions
      </h2>
      <div className="flex items-center flex-col lg:flex-row">
      <div className="lg:w-1/2">
        <Lottie animationData={faqAnimationData} className="h-[400px]" ></Lottie>
      </div>
      <div className="space-y-4 lg:w-1/2">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="bg-base-200 dark:bg-[#1B262C] dark:text-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 min-w-full"
          >
            <summary className="font-semibold cursor-pointer flex justify-between items-center w-full">
              {faq.question}
              <span className="text-xl font-bold">+</span>
            </summary>
            <p className="mt-2">{faq.answer}</p>
          </details>
        ))}
      </div>
      </div>
    </section>
  );
};

export default FAQSection;
