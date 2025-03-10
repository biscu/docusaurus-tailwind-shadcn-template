import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useColorMode } from "@docusaurus/theme-common";

const Dropdown = ({ selectedBrand, onBrandChange }) => {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();

  const styles = {
    wrapper: {
      display: "flex",
      gap: "1rem",
      alignItems: "center",
      marginBottom: "1rem",
    },
    buttonGroup: {
      display: "inline-flex",
      borderRadius: "4px",
      overflow: "hidden",
    },
    button: {
      padding: "8px 16px",
      border: `1px solid var(--ifm-color-emphasis-300)`,
      backgroundColor: "var(--ifm-background-color)",
      color: "var(--ifm-font-color-base)",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    activeButton: {
      backgroundColor: "var(--ifm-color-emphasis-200)",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.buttonGroup}>
        <button
          style={{
            ...styles.button,
            ...(selectedBrand === "easy-park" ? styles.activeButton : {}),
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px",
            borderRight: "none",
          }}
          onClick={() => onBrandChange("easy-park")}
        >
          Easy Park
        </button>
        <button
          style={{
            ...styles.button,
            ...(selectedBrand === "park-mobile" ? styles.activeButton : {}),
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
          }}
          onClick={() => onBrandChange("park-mobile")}
        >
          Park Mobile
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
