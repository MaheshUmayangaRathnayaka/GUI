import React, { useState } from "react";
import "./FAQs.css";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What documents are required to rent a vehicle?",
      answer: "You need a valid driving license, a government-issued ID, and a credit card for security purposes.",
    },
    {
      question: "Is there a minimum age requirement?",
      answer: "Yes, the minimum age to rent a vehicle is 21 years. Additional charges may apply for drivers under 25.",
    },
    {
      question: "Can I cancel my reservation?",
      answer: "Yes, you can cancel your reservation up to 24 hours before the pickup time without any charges.",
    },
    {
      question: "Are there any additional charges for late returns?",
      answer: "Late returns may incur additional charges. Please check our late return policy for more details.",
    },
    {
      question: "Do you offer insurance coverage?",
      answer: "Yes, we offer various insurance options. You can select one at the time of booking.",
    },
  ];

  return (
    <section className="faqs-section">
      <div className="container">
        <h2 className="faqs-title">Frequently Asked Questions</h2>
        <div className="faqs-container">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
              </div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
