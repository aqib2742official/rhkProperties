'use client';

import { motion } from "motion/react";
import { Shield, FileCheck, CheckCircle2 } from "lucide-react";

// Compliance items defined at the top
const complianceItems = [
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Role-based access, encryption in transit and at rest with full audit logs"
  },
  {
    icon: FileCheck,
    title: "Verified Permits",
    description: "Trakheesi permits verified and displayed properly before going live"
  },
  {
    icon: CheckCircle2,
    title: "Bilingual Contracts",
    description: "Form A and Form F securely e-signed with complete verifiable trails"
  }
];

export function TrustCompliance() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 dark:bg-accent rounded-full mb-6">
            <Shield className="h-5 w-5 text-accent dark:text-white" />
            <span className="text-accent dark:text-white font-semibold text-sm">Compliance Built-In</span>
          </div>
          <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl">Compliance is built-in.</h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            We publish only with verified permits, keep bilingual contracts consistent, and maintain a complete evidence trail.
            Data is encrypted, access is role-based, and every action is auditable so quality and accountability are never in doubt.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {complianceItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                className="bg-secondary p-6 rounded-lg text-center w-full flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05 + 0.05, ease: "easeOut" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <IconComponent className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="mb-2 text-lg font-semibold text-center min-h-[2rem]">{item.title}</h3>
                <p className="text-sm text-muted-foreground w-[280px] max-w-full text-center mx-auto min-h-[4rem] line-clamp-3">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

