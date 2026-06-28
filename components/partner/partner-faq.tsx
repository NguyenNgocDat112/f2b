"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const FAQ_DATA = [
  {
    question: "How does Saber's pricing work?",
    answer: "Saber's pricing is based on the number of agents, monthly tasks, and feature access. You can start free with the Starter plan, and upgrade anytime as your needs grow."
  },
  {
    question: 'What counts as a "task"?',
    answer: "A task is counted every time an AI agent completes a full action or generates a response within your integrated tools or channels."
  },
  {
    question: "Can I upgrade or downgrade my plan anytime",
    answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes will be reflected in your next billing cycle."
  },
  {
    question: "What happens if I exceed my monthly task limit?",
    answer: "Once you reach your limit, your agents will temporarily pause until the next billing cycle. You can always upgrade to a higher plan for more tasks or purchase add-ons."
  },
  {
    question: "Is there a free trial for Pro or Enterprise plans?",
    answer: "We offer a 14-day free trial on the Pro plan so you can test all the premium features before committing. Enterprise plans offer custom pilot programs."
  },
  {
    question: "Do I need a credit card to get started?",
    answer: "No, you don't need a credit card to start using the free Starter plan. You will only be prompted to add payment details when you upgrade to a paid subscription."
  }
];

// Reusing the geometric background from the image (diamond mesh)
const GeometricBackground = () => (
  <div className="absolute inset-x-0 bottom-0 h-[250px] pointer-events-none select-none opacity-20 overflow-hidden flex items-end justify-center z-0">
    <div className="relative w-full h-[150%] max-w-[1440px] flex items-end justify-center">
      <svg 
        viewBox="0 0 1000 200" 
        preserveAspectRatio="xMidYMax slice" 
        style={{ width: "100%", height: "100%" }}
        fill="none"
      >
        <path d="M 0,200 L 100,100 L 200,200 Z" fill="#d0d0d5"/>
        <path d="M 100,200 L 200,100 L 300,200 Z" fill="#e5e5ea"/>
        <path d="M 200,200 L 300,100 L 400,200 Z" fill="#d0d0d5"/>
        <path d="M 300,200 L 400,100 L 500,200 Z" fill="#e5e5ea"/>
        <path d="M 400,200 L 500,100 L 600,200 Z" fill="#d0d0d5"/>
        <path d="M 500,200 L 600,100 L 700,200 Z" fill="#e5e5ea"/>
        <path d="M 600,200 L 700,100 L 800,200 Z" fill="#d0d0d5"/>
        <path d="M 700,200 L 800,100 L 900,200 Z" fill="#e5e5ea"/>
        <path d="M 800,200 L 900,100 L 1000,200 Z" fill="#d0d0d5"/>
        <path d="M 900,200 L 1000,100 L 1100,200 Z" fill="#e5e5ea"/>
      </svg>
    </div>
  </div>
);

export function PartnerFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#f9f9fa] overflow-hidden pt-4 pb-8 sm:pb-16 sm:pt-10 border-t border-gray-100/50">
      
      {/* Abstract geometric shapes at background bottom */}
      <GeometricBackground />

      <div className="relative max-w-3xl mx-auto px-4 z-10">
        
        {/* Header Tag and Title */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block px-3 py-1 bg-white border border-[#f0f0f2] rounded-md text-[9px] font-extrabold text-[#ff3b30] tracking-[0.2em] uppercase font-mono shadow-sm select-none mb-6">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-[40px] font-semibold tracking-[-0.03em] text-[#111111] leading-tight font-sans">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3.5 mb-5 sm:mb-6">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.015)] transition-shadow duration-300 border border-gray-50/80"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-start text-left px-5 sm:px-7 py-5 sm:py-6 focus:outline-none"
                >
                  <div className="mr-4 mt-[3px] shrink-0 text-[#ff3b30]">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[3]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[3]" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-[15px] sm:text-base tracking-tight font-sans ${isOpen ? 'font-bold text-[#111111]' : 'font-semibold text-[#111111] hover:text-[#ff3b30]'} transition-colors duration-200`}>
                      {faq.question}
                    </h3>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <p className="pt-3 text-[13.5px] sm:text-[14.5px] leading-[1.6] text-gray-500 font-medium pb-1 font-sans">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Still having a question block */}
        <div className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.015)] border border-gray-50/80 px-5 sm:px-7 py-5 flex items-center justify-between">
          <span className="text-[15px] font-semibold text-[#111111] font-sans">
            Still having a question?
          </span>
          <button
            onClick={() => {
              const el = document.getElementById("registration-form-section");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-5 py-2 sm:py-2.5 bg-white border border-gray-200 hover:border-[#111111] text-[#111111] text-xs font-semibold rounded-full tracking-wide transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
          >
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}
