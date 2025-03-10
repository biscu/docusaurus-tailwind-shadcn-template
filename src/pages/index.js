import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { motion } from "motion/react";
import Preload from "@site/src/components/Preload";


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Preload />
      <div className="flex flex-col items-center justify-center max-w-[700px] h-full py-48 mx-auto text-center text-balance	gap-6">
        <div className="flex mb-4">
          <motion.img 
          initial={{ y: 30, x: 5, rotateZ: -10, opacity: 0 }}
          animate={{ y: 4, opacity: 1 }} 
          transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
          drag
          dragConstraints={{ left: -2, right: 2, top: -2, bottom: 2 }}
          src="/img/Stamp1.png" alt="Postnord logo" width="88px" height="88px"
          className="cursor-grab" />
          <motion.img 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 2, opacity: 1 }}  
          transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
          drag
          dragConstraints={{ left: -2, right: 2, top: -2, bottom: 2 }}
          className="cursor-grab"
          src="/img/Stamp2.png" alt="Postnord logo" width="88px" height="88px" />
          <motion.img 
          initial={{ y: 30, x: -10, rotateZ: 5, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }} 
          transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
          drag
          dragConstraints={{ left: -2, right: 2, top: -2, bottom: 2 }}
          className="cursor-grab"
          src="/img/Stamp3.png" alt="Postnord logo" width="88px" height="88px" />
        </div>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl home-title"
        >
          The Postnord app handbook
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2, ease: "easeInOut" }}
          className="text-2xl dark:text-neutral-500 text-neutral-400"
        >
        The one place of information for design, usability, accessibility and strategy.
        </motion.p>
       
      </div>
    </Layout>
  );
}
