"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

type ServicePanelProps = {
  title: string;
  copy: string;
  capabilities: string[];
  image: string;
};

export function ServicePanel({ title, copy, capabilities, image }: ServicePanelProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="service-panel-stage">
      <motion.article
        className="service-panel"
        initial={reduceMotion ? false : "rest"}
        whileInView="visible"
        viewport={{ once: false, amount: 0.22 }}
        variants={{
          rest: { opacity: 0.78, y: 52, scale: 0.985 },
          visible: { opacity: 1, y: 0, scale: 1 },
        }}
        transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="service-panel-media"
          variants={{
            rest: { scale: 1.045 },
            visible: { scale: 1 },
          }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image src={image} alt="" fill sizes="(max-width: 767px) 100vw, 48vw" className="media-cover" />
        </motion.div>

        <motion.div
          className="service-panel-copy"
          variants={{
            rest: { opacity: 0.72, y: 24 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2>{title}</h2>
          <p>{copy}</p>
          <ul aria-label={`${title} capabilities`}>
            {capabilities.map((capability) => <li key={capability}>{capability}</li>)}
          </ul>
        </motion.div>
      </motion.article>
    </div>
  );
}
