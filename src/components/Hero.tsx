import { motion, type Variants } from "framer-motion";
import { venue } from "../data/content";

// build

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 1.5 },
  },
};
const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-svh min-h-160 items-end overflow-hidden text-cream"
    >
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        poster="https://cdn.pixabay.com/video/2016/02/29/2328-157269842_tiny.jpg"
        initial={{ scale: 1.15, filter: "brightness(0.3) saturate(0.9)" }}
        animate={{ scale: 1, filter: "brightness(0.6) saturate(0.9)" }}
        transition={{ duration: 2.2, ease: [0.22, 0.61, 0.36, 1] }}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source
          src="https://cdn.pixabay.com/video/2016/02/29/2328-157269842_large.mp4"
          type="video/mp4"
        />
      </motion.video>

      <div className="absolute inset-0 z-1 bg-[linear-gradient(180deg,rgba(14,11,8,0.35)_0%,rgba(14,11,8,0.35)_40%,rgba(14,11,8,0.94)_100%),linear-gradient(90deg,rgba(14,11,8,0.55)_0%,rgba(14,11,8,0.08)_45%)]" />

      <motion.div
        variants={container}
        initial="hidden" 
        animate="show"
        className="relative z-2 w-full pb-24 pt-10 md:pb-28"
      >
        <div className="mx-auto max-w-295 px-8">
          <motion.span
            variants={item}
            className="mb-4 block text-xs font-semibold uppercase tracking-[0.28em] text-brass-light"
          >
            36 Upper Baggot Street · Ballsbridge · Dublin 4
          </motion.span>

          <h1 className="max-w-225 font-display text-[15vw] font-semibold leading-[0.96] sm:text-[64px] md:text-[84px] lg:text-[104px]">
            <motion.span variants={item} className="block">
              Good pints,
            </motion.span>
            <motion.span variants={item} className="block italic text-brass-light">
              honest food,
            </motion.span>
            <motion.span variants={item} className="block">
              since 1840.
            </motion.span>
          </h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-130 text-lg font-light text-stone-dim"
          >
            A gastropub on Baggot Street with 30+ craft beers, house-infused
            cocktails and a kitchen that sources fresh and local. Come for
            the rugby, stay for the whiskey.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ y: -2, backgroundColor: "#D9C08F" }}
              whileTap={{ scale: 0.97 }}
              href={venue.phoneHref}
              className="rounded-sm border border-brass bg-brass px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-ink"
            >
              Book a Table
            </motion.a>
            <motion.a
              whileHover={{ y: -2, backgroundColor: "rgba(176,141,87,0.14)" }}
              whileTap={{ scale: 0.97 }}
              href="#food"
              className="rounded-sm border border-cream/70 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-cream"
            >
              View the Menu
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="absolute bottom-7 right-8 z-2 hidden items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-stone-dim md:flex"
        style={{ writingMode: "vertical-rl" }}
      >
        Scroll
        <motion.span
          className="block h-12.5 w-px origin-top bg-brass"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}