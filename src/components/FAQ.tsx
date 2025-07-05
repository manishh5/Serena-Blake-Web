import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I know if therapy is right for me?",
      answer: "Therapy can benefit anyone looking to improve their mental health, work through life challenges, or gain better self-understanding. If you're experiencing persistent stress, relationship difficulties, anxiety, depression, or feeling stuck in unhelpful patterns, therapy can provide valuable support and practical tools for positive change."
    },
    {
      question: "What should I expect in our first session?",
      answer: "Our initial session focuses on understanding your concerns, goals, and background. We'll discuss what brought you to therapy, your current challenges, and what you hope to achieve. This helps me develop a personalized treatment approach that best serves your needs. Most clients leave feeling heard and hopeful about the therapeutic process."
    },
    {
      question: "Do you accept insurance?",
      answer: "I am not in-network with insurance providers, but I do provide detailed superbills that you can submit for out-of-network reimbursement. Many clients receive partial or full reimbursement from their insurance company. I accept payment via cash, check, or credit card, with payment due at the time of service."
    },
    {
      question: "Are online sessions available and effective as in-person?",
      answer: "Yes, all virtual sessions via Zoom and Research shows that telehealth therapy can be just as effective as in-person sessions for many concerns. Telehealth offers convenience and accessibility while maintaining the therapeutic relationship. All virtual sessions are conducted through a secure, HIPAA-compliant platform to ensure your privacy and confidentiality."
    },
    {
      question: "What is your cancellation policy?",
      answer: "I require 24 hours notice for cancellations or rescheduling. This policy allows me to offer your time slot to other clients who may need it. Cancellations made with less than 24 hours notice, or missed appointments, will be charged the full session fee unless due to an emergency."
    },
    {
      question: "How long does therapy typically take?",
      answer: "The length of therapy varies greatly depending on individual needs, goals, and circumstances. Some clients find significant benefit in just a few sessions, while others prefer longer-term support. We'll regularly check in about your progress and adjust our approach as needed. You're always in control of your therapeutic journey."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-dark text-stone-700 mb-7">
            Frequently Asked Questions
          </h2>
          <div className="w-19 h-px bg-slate-400 mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-stone-700 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-stone-700 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-stone-700 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-stone-500 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-stone-500 mb-5 font-medium">Any other query?</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-stone-700 hover:text-amber-900 font-medium"
          >
            Contact me directly →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;