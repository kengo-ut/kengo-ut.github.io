"use client";
import ModeToggle from "@/components/common/ModeToggle";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Publications", href: "#publications" },
  { name: "Certifications", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Awards", href: "#awards" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: "0px",
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
        staggerChildren: 0.05,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
        staggerChildren: 0.05,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -16,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex items-center gap-x-4">
          <ModeToggle />
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold text-primary hover:text-accent transition-colors">
              KENGO
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="xl:hidden rounded-lg hover:bg-accent/10"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMenuOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>

        {/* Desktop navigation */}
        <div className="hidden xl:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-md font-semibold text-primary hover:text-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="xl:hidden absolute w-full"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="bg-background/95 backdrop-blur-md shadow-lg">
              <div className="mx-auto max-w-7xl px-4">
                <motion.div className="py-4 space-y-2">
                  {navigation.map((item) => (
                    <motion.div key={item.name} variants={itemVariants}>
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-primary font-semibold hover:text-accent hover:bg-accent/10 rounded-lg transition-colors"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
