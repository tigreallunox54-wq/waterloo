import { motion } from "framer-motion";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { hours, venue } from "../data/content";

const rows = [
  {
    k: "Address",
    v: (
      <>
        {venue.address1}
        <br />
        {venue.address2}
        <br />
        {venue.eircode}
      </>
    ),
  },
  {
    k: "Phone",
    v: (
      <a href={venue.phoneHref} className="border-b border-brass">
        {venue.phoneDisplay}
      </a>
    ),
  },
  {
    k: "Email",
    v: (
      <a href={`mailto:${venue.email}`} className="border-b border-brass">
        {venue.email}
      </a>
    ),
  },
  {
    k: "Hours",
    v: (
      <>
        {hours.map((h) => (
          <span key={h.day} className="block">
            {h.day}: {h.time}
          </span>
        ))}
      </>
    ),
  },
  {
    k: "Nearby",
    v: "10 min walk to St Stephen's Green & Grafton Street. Short stroll to Aviva Stadium & the RDS.",
  },
];

export default function Visit() {
  return (
    <section id="visit" className="bg-cream py-24 text-ink-soft md:py-32">
      <div className="mx-auto max-w-[1180px] px-8">
        <Reveal className="mb-14 max-w-[640px]">
          <span className="mb-3.5 block text-xs font-semibold uppercase tracking-[0.28em] text-oxblood">
            Find Us
          </span>
          <h2 className="font-display text-[34px] leading-[1.05] text-bottle sm:text-[44px] md:text-[52px]">
            On Baggot Street,
            <br />
            opposite the mural.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 border border-bottle/15 md:grid-cols-2">
          <RevealGroup className="bg-white p-9 md:p-14" stagger={0.07}>
            <h2 className="mb-7 font-display text-3xl text-bottle">
              Get In Touch
            </h2>
            {rows.map((r) => (
              <RevealItem
                key={r.k}
                className="flex gap-4.5 border-b border-bottle/10 py-4"
              >
                <span className="min-w-[100px] pt-0.5 text-[11px] font-bold uppercase tracking-[0.16em] text-oxblood">
                  {r.k}
                </span>
                <span className="text-[15px] leading-[1.6] text-[#332f26]">
                  {r.v}
                </span>
              </RevealItem>
            ))}
            <RevealItem>
              <motion.a
                whileHover={{ y: -2, backgroundColor: "#D9C08F" }}
                whileTap={{ scale: 0.97 }}
                href={venue.phoneHref}
                className="mt-6 inline-flex rounded-sm border border-brass bg-brass px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-ink"
              >
                Call to Book
              </motion.a>
            </RevealItem>
          </RevealGroup>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="relative min-h-[340px] md:min-h-[420px]"
          >
            <iframe
              src={venue.mapEmbed}
              loading="lazy"
              allowFullScreen
              title="Map to The Waterloo Bar, 36 Upper Baggot Street"
              className="absolute inset-0 h-full w-full grayscale-[15%]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
