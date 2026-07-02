import { motion } from "framer-motion";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { timeline } from "../data/content";

export default function Story() {
  return (
    <section id="story" className="bg-cream py-24 text-ink-soft md:py-32">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <Reveal>
          <span className="mb-3.5 block text-xs font-semibold uppercase tracking-[0.28em] text-oxblood">
            The Building
          </span>
          <h2 className="font-display text-[34px] leading-[1.05] text-bottle sm:text-[44px] md:text-[52px]">
            A wine merchant's
            <br />
            corner, since 1840.
          </h2>
          <p className="mt-4 max-w-[480px] text-[#4a4438]">
            Long before it was a gastropub, No. 36 traded hands as a wine and
            grocery merchant for over 150 years — Edward Nixon, then the
            Byrnes, the Keoghs, the Moroneys, the Higgins, right through to
            Andy Ryan. The Quinn family took it over in 2002 and shaped it
            into the Waterloo it is today, on Patrick Kavanagh's old patch of
            "Baggatonia."
          </p>
          <p className="mt-4 max-w-[480px] text-[#4a4438]">
            Step inside and the room runs long and narrow with an arched,
            vaulted ceiling — locals say it feels like standing in a grand
            old railway carriage. A striking mural of the surrounding Baggot
            Street buildings covers one wall; the bar runs the length of the
            other.
          </p>

          <RevealGroup className="mt-7 border-t border-bottle/20 pt-5" stagger={0.08}>
            {timeline.map((t) => (
              <RevealItem
                key={t.year}
                className="flex gap-4 border-b border-bottle/10 py-2.5 text-sm"
              >
                <span className="min-w-[96px] font-display font-bold text-oxblood">
                  {t.year}
                </span>
                <span className="text-[#4a4438]">{t.copy}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative"
        >
          <img
            src="https://assets.mixkit.co/videos/4195/4195-thumb-360-0.jpg"
            alt="Classic styled restaurant interior with warm lighting"
            className="h-[340px] w-full rounded-sm object-cover md:h-[520px]"
          />
          <div className="pointer-events-none absolute -bottom-4 -right-4 -top-4 left-4 -z-10 border border-brass md:-bottom-4.5" />
        </motion.div>
      </div>
    </section>
  );
}
