import { motion } from "framer-motion";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { drinkPillars, drinkStats } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";

function Stat({ value, suffix, label }: (typeof drinkStats)[number]) {
  const { ref, value: current } = useCountUp(value);
  return (
    <div className="border-l border-brass pl-4.5">
      <span
        ref={ref}
        className="block font-display text-4xl text-brass-light"
      >
        {current}
        {suffix}
      </span>
      <span className="text-xs uppercase tracking-[0.14em] text-stone-dim">
        {label}
      </span>
    </div>
  );
}

export default function Drinks() {
  return (
    <section id="drinks" className="relative overflow-hidden bg-bottle-deep py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="pointer-events-none absolute -right-[10%] -top-[30%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(176,141,87,0.12),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[1180px] px-8">
        <Reveal className="mb-14 max-w-[640px]">
          <span className="mb-3.5 block text-xs font-semibold uppercase tracking-[0.28em] text-brass-light">
            The Bar
          </span>
          <h2 className="font-display text-[34px] leading-[1.05] sm:text-[44px] md:text-[52px]">
            The house for craft beer
            <br />
            on Baggot Street.
          </h2>
          <p className="mt-4 max-w-[540px] text-stone-dim">
            Over 30 bottled craft beers and 22 on draught — plus wines poured
            only from small independent vineyards, by the glass or bottle.
          </p>
        </Reveal>

        <RevealGroup
          className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-3"
          stagger={0.12}
        >
          {drinkPillars.map((d) => (
            <RevealItem key={d.num} className="bg-bottle-deep p-9">
              <span className="mb-3.5 block font-display text-sm text-brass">
                {d.num}
              </span>
              <h3 className="mb-3 font-display text-2xl text-cream">
                {d.title}
              </h3>
              <p className="text-[14.5px] text-stone-dim">{d.copy}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup
          className="mt-11 flex flex-wrap gap-9"
          stagger={0.1}
        >
          {drinkStats.map((s) => (
            <RevealItem key={s.label}>
              <Stat {...s} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
