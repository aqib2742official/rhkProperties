'use client';

import { motion } from "motion/react";
import { Shield, FileCheck, CheckCircle2 } from "lucide-react";

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
          <motion.div
            className="bg-secondary p-6 rounded-lg text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Shield className="h-10 w-10 text-accent mx-auto mb-4" />
            <h3 className="mb-2 text-lg font-semibold">Privacy & Security</h3>
            <p className="text-sm text-muted-foreground">
              Role-based access, encryption in transit and at rest, and full audit logs
            </p>
          </motion.div>
          <motion.div
            className="bg-secondary p-6 rounded-lg text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <FileCheck className="h-10 w-10 text-accent mx-auto mb-4" />
            <h3 className="mb-2 text-lg font-semibold">Verified Permits</h3>
            <p className="text-sm text-muted-foreground">
              Trakheesi permits verified and displayed before going live
            </p>
          </motion.div>
          <motion.div
            className="bg-secondary p-6 rounded-lg text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <CheckCircle2 className="h-10 w-10 text-accent mx-auto mb-4" />
            <h3 className="mb-2 text-lg font-semibold">Bilingual Contracts</h3>
            <p className="text-sm text-muted-foreground">
              Form A and Form F securely e-signed in with verifiable trails
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

