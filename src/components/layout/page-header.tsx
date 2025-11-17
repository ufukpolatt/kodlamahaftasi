"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type PageHeaderProps = {
  title: string;
  description: string;
  badge?: string;
  actions?: ReactNode;
};

export function PageHeader({ title, description, badge, actions }: PageHeaderProps) {
  return (
    <section className="mx-auto w-[min(1100px,95%)] pt-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl border border-white/70 bg-white/80 p-8 shadow-soft"
      >
        {badge && (
          <span className="inline-flex items-center rounded-full bg-codeweek-secondary px-4 py-1 text-xs font-semibold text-white">
            {badge}
          </span>
        )}
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-base text-slate-600">{description}</p>
          </div>
          {actions}
        </div>
      </motion.div>
    </section>
  );
}

