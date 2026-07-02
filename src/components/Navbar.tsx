import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, venue } from "../data/content";

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1], delay: 1.3 }}
      className={`fixed inset-x-0 top-0 z-[100] transition-[padding,background-color,border-color] duration-500 ${
        solid
          ? "border-b border-white/10 bg-ink/90 py-3.5 backdrop-blur-md"
          : "border-b border-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-8">
        <a href="#top" className="flex flex-col leading-[1.05]">
          <span className="font-display text-xl font-bold tracking-wide text-cream md:text-2xl">
            THE WATERLOO
          </span>
          <span className="mt-1 text-[9px] font-medium tracking-[0.3em] text-brass-light">
            BAR &amp; GRILL · BAGGOT ST · EST. 1840
          </span>
        </a>

        <ul
          className="hidden items-center gap-9 md:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {nav.map((item) => (
            <li key={item.href} className="relative">
              <a
                href={item.href}
                onMouseEnter={() => setHovered(item.href)}
                className="block py-1 text-[13px] font-semibold uppercase tracking-[0.14em] text-stone transition-colors hover:text-cream"
              >
                {item.label}
              </a>
              {hovered === item.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-0.5 left-0 right-0 h-px bg-brass"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        <a
          href={venue.phoneHref}
          className="hidden rounded-sm border border-brass bg-brass px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-brass-light hover:border-brass-light md:inline-flex"
        >
          Book a Table
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="p-2 text-cream md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden bg-ink/98 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-8 pb-6 pt-2">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-stone"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={venue.phoneHref}
                className="mt-3 inline-flex justify-center rounded-sm border border-brass bg-brass px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-ink"
              >
                Book a Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
