import styles from "./preview.module.css";
import { RallyThemeProvider } from "@easyparkgroup/rally-web";
import React, { useState } from "react";

const Preview = ({ children }) => {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Preview;
