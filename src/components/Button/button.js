import styles from "./button.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(CustomEase);

const Button = () => {
  CustomEase.create("animate-in", "M0,0 C0.562,0 0.11,1.004 1,1 ");
  useGSAP(() => {
    gsap.from(".button_src-components-Button-button-module", {
      opacity: 0,
      y: 30,
      ease: "animate-in",
      duration: 1,
      delay: 0.2,
    });
  });
  return (
    <a href="/app/intro" className={styles.button}>
      Get Started
    </a>
  );
};

export default Button;
