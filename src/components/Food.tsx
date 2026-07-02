import { motion } from "framer-motion";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { foodGallery, foodNotes, venue } from "../data/content";

export default function Food() {
  return (
    <section id="food" className="bg-cream py-24 text-ink-soft md:py-32">
      <div className="mx-auto max-w-[1180px] px-8">
        <Reveal className="mb-14 max-w-[640px]">
          <span className="mb-3.5 block text-xs font-semibold uppercase tracking-[0.28em] text-oxblood">
            On the Menu
          </span>
          <h2 className="font-display text-[34px] leading-[1.05] text-bottle sm:text-[44px] md:text-[52px]">
            Made for sharing —
            <br />
            and just as good solo.
          </h2>
          <p className="mt-4 max-w-[540px] text-[#4a4438]">
            Our menu runs from brunch through to a full evening card:
            sliders, ribs and croquettes built for the middle of the table,
            mains for one, and everything made with fresh, locally sourced
            ingredients.
          </p>
        </Reveal>

        <RevealGroup
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
          stagger={0.09}
        >
          {foodGallery.map((f) => (
            <RevealItem key={f.tag} className="group relative aspect-[3/4] overflow-hidden rounded-sm">
              <motion.img
                src={f.img}
                alt={f.alt}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/85" />
              <span className="absolute bottom-3.5 left-3.5 z-[2] bg-ink/60 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-cream backdrop-blur-sm">
                {f.tag}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup
          className="mt-14 flex flex-wrap items-start gap-10"
          stagger={0.1}
        >
          {foodNotes.map((n) => (
            <RevealItem key={n.title} className="min-w-[220px] flex-1">
              <h3 className="mb-2.5 font-display text-xl text-bottle">
                {n.title}
              </h3>
              <p className="text-[15px] text-[#4a4438]">{n.copy}</p>
            </RevealItem>
          ))}
          <RevealItem className="self-start">
            <motion.a
              whileHover={{ y: -2, backgroundColor: "#D9C08F" }}
              whileTap={{ scale: 0.97 }}
              href={venue.phoneHref}
              className="inline-flex rounded-sm border border-brass bg-brass px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-ink"
            >
              Ask About the Full Menu
            </motion.a>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
