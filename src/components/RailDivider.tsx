import { motion } from "framer-motion";

export default function RailDivider({
  bg = "bg-ink",
  stroke = "#B08D57",
}: {
  bg?: string;
  stroke?: string;
}) {
  const arches = [60, 240, 420, 600, 780, 960];

  return (
    <div className={`${bg} w-full`}>
      <div className="mx-auto h-[34px] max-w-[1180px] px-8">
        <svg
          viewBox="0 0 1180 34"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <motion.line
            x1="0"
            y1="17"
            x2="1180"
            y2="17"
            stroke={stroke}
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
          />
          {arches.map((x, i) => (
            <motion.path
              key={x}
              d={`M${x} 17 a20 20 0 0 1 40 0`}
              fill="none"
              stroke={stroke}
              strokeWidth="1.4"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
