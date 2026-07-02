import { motion } from "framer-motion";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { reviews } from "../data/content";

export default function Reviews() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1180px] px-8">
        <Reveal
          as="span"
          className="mb-11 inline-flex items-center gap-3.5 rounded-sm border border-white/10 px-5 py-3.5"
        >
          <motion.span
            className="text-lg tracking-[2px] text-brass"
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            ★★★★☆
          </motion.span>
          <span className="text-[13px] text-stone-dim">
            Rated among Baggot Street's favourite pubs — 540+ reviews on
            Facebook, 80% recommend
          </span>
        </Reveal>

        <Reveal className="mb-14">
          <span className="mb-3.5 block text-xs font-semibold uppercase tracking-[0.28em] text-brass-light">
            What People Say
          </span>
          <h2 className="font-display text-[34px] leading-[1.05] sm:text-[44px] md:text-[52px]">
            Straight from the regulars.
          </h2>
        </Reveal>

        <RevealGroup
          className="grid grid-cols-1 gap-7 md:grid-cols-3"
          stagger={0.1}
        >
          {reviews.map((r) => (
            <RevealItem key={r.who} className="border-t-2 border-brass pt-5.5">
              <p className="text-[15.5px] italic leading-[1.7] text-stone">
                "{r.quote}"
              </p>
              <div className="mt-4.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-brass-light">
                — {r.who}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
