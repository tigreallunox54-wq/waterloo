import Reveal from "./Reveal";
import { nav, venue } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-14 pb-8">
      <Reveal className="mx-auto max-w-[1180px] px-8">
        <div className="flex flex-wrap justify-between gap-8 pb-9">
          <div className="max-w-[320px]">
            <a href="#top" className="flex flex-col leading-[1.05]">
              <span className="font-display text-xl font-bold text-cream">
                THE WATERLOO
              </span>
              <span className="mt-1 text-[9px] font-medium tracking-[0.3em] text-brass-light">
                BAR &amp; GRILL
              </span>
            </a>
            <p className="mt-3.5 text-sm text-stone-dim">
              36 Upper Baggot Street, Ballsbridge, Dublin 4. Craft beer,
              house cocktails and honest gastropub food since 1840.
            </p>
          </div>

          <div className="flex flex-wrap gap-16">
            <div>
              <h4 className="mb-4 text-xs uppercase tracking-[0.16em] text-brass-light">
                Explore
              </h4>
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="mb-2.5 block text-sm text-stone-dim transition-colors hover:text-cream"
                >
                  {n.label}
                </a>
              ))}
            </div>
            <div>
              <h4 className="mb-4 text-xs uppercase tracking-[0.16em] text-brass-light">
                Visit
              </h4>
              <a
                href={venue.phoneHref}
                className="mb-2.5 block text-sm text-stone-dim transition-colors hover:text-cream"
              >
                {venue.phoneDisplay}
              </a>
              <a
                href={`mailto:${venue.email}`}
                className="mb-2.5 block text-sm text-stone-dim transition-colors hover:text-cream"
              >
                {venue.email}
              </a>
              <a
                href="#visit"
                className="mb-2.5 block text-sm text-stone-dim transition-colors hover:text-cream"
              >
                Get Directions
              </a>
            </div>
            <div>
              <h4 className="mb-4 text-xs uppercase tracking-[0.16em] text-brass-light">
                Follow
              </h4>
              <a
                href={venue.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2.5 block text-sm text-stone-dim transition-colors hover:text-cream"
              >
                Facebook
              </a>
              <a className="mb-2.5 block text-sm text-stone-dim transition-colors hover:text-cream">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-2.5 border-t border-white/10 pt-5.5 text-[12.5px] text-stone-dim">
          <span>© 2026 The Waterloo Bar &amp; Grill. All rights reserved.</span>
          <span>Design concept — Baggot Street, Dublin 4</span>
        </div>
      </Reveal>
    </footer>
  );
}
