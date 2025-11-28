"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Brain, Sparkles, Menu, X } from "lucide-react";

import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 mx-auto flex w-[min(1400px,95%)] items-center justify-between rounded-2xl border border-codeweek-purple-500/20 bg-codeweek-dark/80 px-6 py-5 backdrop-blur-xl transition-all duration-300",
          scrolled && "shadow-glow border-codeweek-purple-500/40 py-4"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <img
              src="/logo.webp"
              alt="KodlamaHaftası Logo"
              className="h-14 w-auto"
            />
          </motion.div>
          <Sparkles className="w-4 h-4 text-codeweek-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex">
          {siteConfig.navLinks.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                  pathname === item.href
                    ? "text-white bg-gradient-to-r from-codeweek-purple-600 to-codeweek-pink-600 shadow-glow"
                    : "text-codeweek-purple-300 hover:text-white hover:bg-codeweek-purple-500/20"
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-codeweek-purple-600 to-codeweek-pink-600 -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-codeweek-purple-300 hover:text-white hover:bg-codeweek-purple-500/20 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-0 right-0 z-40 mx-4 mt-4 rounded-2xl border border-codeweek-purple-500/20 bg-codeweek-dark/90 backdrop-blur-xl lg:hidden"
        >
          <nav className="flex flex-col p-4">
            {siteConfig.navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 mb-2",
                  pathname === item.href
                    ? "text-white bg-gradient-to-r from-codeweek-purple-600 to-codeweek-pink-600"
                    : "text-codeweek-purple-300 hover:text-white hover:bg-codeweek-purple-500/20"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
}
