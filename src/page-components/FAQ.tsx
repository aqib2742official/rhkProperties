'use client';

import { motion } from "motion/react";
import { ChevronDown, CheckCircle, Shield, FileCheck, Users, Home, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: "Getting Started",
      question: "How fast do you respond to inquiries?",
      answer: "We guarantee a response within 5 minutes during business hours. If an agent is unavailable, our dedicated support team will engage immediately to ensure your questions are answered promptly."
    },
    {
      category: "Getting Started",
      question: "How do I begin my property search?",
      answer: "Start by contacting us for a consultation where we'll discuss your requirements, budget, and timeline. You can also browse our curated portfolio on our website. We'll create a personalized search strategy tailored to your needs."
    },

    {
      category: "Documentation & Compliance",
      question: "Do you publish properties without proper permits?",
      answer: "Absolutely not. Every listing on our platform has a verified Trakheesi permit that's displayed before going live. We maintain strict compliance with RERA regulations and never compromise on legal requirements."
    },
    {
      category: "Documentation & Compliance",
      question: "Are contracts available in both English and Arabic?",
      answer: "Yes, all contracts (Form A and Form F) are provided in both English and Arabic with secure e-signing capabilities. We ensure full legal compliance with bilingual documentation and maintain verifiable evidence trails for all transactions."
    },
    {
      category: "Documentation & Compliance",
      question: "What documents do I need to start the process?",
      answer: "You'll need a valid passport, Emirates ID (for UAE residents), visa copy, and proof of income for mortgage applications. We guide you through the complete documentation process and handle all paperwork to make it seamless."
    },
    {
      category: "Closing & Handover",
      question: "Who manages the closing process?",
      answer: "We coordinate the entire closing process including NOC acquisition, clearance certificates, outstanding charges settlement, Trustee appointment, DLD transfer, and final handover. You'll have a dedicated coordinator managing every detail."
    },
    {
      category: "Closing & Handover",
      question: "What happens during the handover?",
      answer: "During handover, we conduct a complete property inspection with you, verify all utilities and services, provide keys and access cards, and ensure all documentation is in order. Your documents remain securely accessible in your account for future reference."
    },
    {
      category: "Security & Privacy",
      question: "How do you protect my personal data?",
      answer: "We employ bank-grade security with encryption in transit and at rest, role-based access controls, and full audit logs. Your data is only accessible to authorized team members working on your transaction, and we maintain strict privacy policies."
    },
    {
      category: "Security & Privacy",
      question: "Can I trust your property valuations?",
      answer: "Our valuations are based on comprehensive market analysis including recent comparable sales, current market trends, location factors, and property condition. We provide transparent data sources and methodology so you can make informed decisions."
    },
    {
      category: "Services & Support",
      question: "Do you offer property management services?",
      answer: "Yes, we provide comprehensive property management including tenant placement, rent collection, maintenance coordination, and regular property inspections. Our management services ensure your investment is well-maintained and profitable."
    },
    {
      category: "Services & Support",
      question: "Can you help with mortgage arrangements?",
      answer: "We work with leading UAE banks and mortgage providers to help you secure the best financing options. Our team guides you through the pre-approval process and assists with all mortgage-related documentation."
    },
    {
      category: "Investment",
      question: "Do you provide investment advice?",
      answer: "We provide educational guidance and market insights to help you understand Dubai's real estate landscape. Our team can share general market trends, comparable sales data, and area characteristics. For personalized investment recommendations tailored to your financial goals, we encourage you to contact us for a private consultation where we can discuss your specific situation."
    },
    {
      category: "Investment",
      question: "What are the best areas for investment in Dubai?",
      answer: "Investment potential varies significantly based on individual goals, budget, timeline, and risk tolerance. Different areas offer different advantages—some focus on rental yields, others on capital appreciation or lifestyle amenities. Our team can advise you based on your specific objectives and circumstances. Contact us for personalized insights tailored to your investment criteria."
    }
  ];

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-5 md:py-10 bg-gradient-to-br from-accent/10 via-accent/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: 'auto' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 dark:bg-accent/40 rounded-full mb-6">
              <CheckCircle className="h-5 w-5 text-accent dark:text-white" />
              <span className="text-accent dark:text-white font-semibold text-sm">Got Questions? We've Got Answers</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6">Frequently Asked Questions</h1>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about buying, selling, and investing in Dubai real estate with RHK Properties LLC
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.a
                key={index}
                href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-background hover:bg-accent hover:text-accent-foreground rounded-full text-sm transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                {category}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-6 md:py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex} id={category.toLowerCase().replace(/\s+/g, '-')} className="mb-8">
                <motion.h2
                  className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  {category === "Getting Started" && <Home className="h-6 w-6 text-accent" />}
                  {category === "Documentation & Compliance" && <FileCheck className="h-6 w-6 text-accent" />}
                  {category === "Closing & Handover" && <CheckCircle className="h-6 w-6 text-accent" />}
                  {category === "Security & Privacy" && <Shield className="h-6 w-6 text-accent" />}
                  {category === "Services & Support" && <Users className="h-6 w-6 text-accent" />}
                  {category === "Investment" && <Users className="h-6 w-6 text-accent" />}
                  {category}
                </motion.h2>

                <div className="">
                  {faqs
                    .filter(faq => faq.category === category)
                    .map((faq, index) => {
                      const globalIndex = faqs.indexOf(faq);
                      const isOpen = openIndex === globalIndex;

                      return (
                        <motion.div
                          key={globalIndex}
                          className="bg-background border border-border rounded-lg overflow-hidden"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <button
                            onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                            aria-expanded={isOpen}
                            aria-controls={`faq-answer-${globalIndex}`}
                            type="button"
                          >
                            <span className="font-semibold text-base md:text-lg pr-4">{faq.question}</span>
                            <ChevronDown
                              className={`h-5 w-5 flex-shrink-0 text-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                }`}
                              aria-hidden="true"
                            />
                          </button>
                          <motion.div
                            id={`faq-answer-${globalIndex}`}
                            initial={false}
                            animate={{
                              height: isOpen ? 'auto' : 0,
                              opacity: isOpen ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                            role="region"
                            aria-labelledby={`faq-question-${globalIndex}`}
                          >
                            <div className="px-6 pb-4 text-muted-foreground">
                              {faq.answer}
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 md:py-10 bg-gradient-to-r from-accent to-accent/80 dark:from-accent/60 dark:to-accent/20 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl">Still Have Questions?</h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Our team is here to help. Get in touch and we'll provide personalized answers to all your real estate questions.
            </p>
            <Link href="/contact" className="inline-block">
              <motion.button
                className="flex items-center gap-2 px-3 py-2 bg-white text-gray-900 font-medium 
               rounded-lg hover:bg-white/90 transition-colors cursor-pointer 
               text-sm md:text-base w-max"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
                <ArrowRight className="h-5 w-5 text-gray-900" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

