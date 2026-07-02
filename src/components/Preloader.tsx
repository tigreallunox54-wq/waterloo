import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } }}
        >
          <div className="relative flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.06em" }}
              transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
              className="font-display text-3xl font-bold text-cream md:text-4xl"
            >
              THE WATERLOO
            </motion.span>
            <motion.div
              className="mt-5 h-px w-40 bg-brass/40 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="h-full w-full bg-brass"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1], delay: 0.3 }}
              />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-[10px] uppercase tracking-[0.35em] text-brass-light"
            >
              Baggot Street · Est. 1840
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
