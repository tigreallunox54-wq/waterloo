import { motion } from "framer-motion";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { events } from "../data/content";

export default function Events() {
  return (
    <section id="events" className="bg-cream py-24 text-ink-soft md:py-32">
      <div className="mx-auto max-w-[1180px] px-8">
        <Reveal className="mb-14 max-w-[640px]">
          <span className="mb-3.5 block text-xs font-semibold uppercase tracking-[0.28em] text-oxblood">
            Book the Room
          </span>
          <h2 className="font-display text-[34px] leading-[1.05] text-bottle sm:text-[44px] md:text-[52px]">
            Cocktail classes, whiskey
            <br />
            tastings &amp; private dining.
          </h2>
          <p className="mt-4 max-w-[540px] text-[#4a4438]">
            Our function room upstairs comes with its own bar and heated
            outdoor terrace — suitable for private dining, corporate events
            or a proper birthday.
          </p>
        </Reveal>

        <RevealGroup
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          stagger={0.08}
        >
          {events.map((e) => (
            <RevealItem key={e.title}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 24px 44px rgba(27,58,47,0.14)" }}
                transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                className="h-full rounded-sm border border-bottle/15 bg-white p-7"
              >
                <h3 className="mb-2.5 font-display text-xl text-bottle">
                  {e.title}
                </h3>
                <p className="mb-4 text-[14.5px] text-[#4a4438]">{e.copy}</p>
                <span className="block border-t border-dashed border-oxblood/30 pt-3 font-display font-bold text-oxblood">
                  {e.price}
                </span>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
