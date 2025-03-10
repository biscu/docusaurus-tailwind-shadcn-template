import clsx from "clsx";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

export default function HomepageFeatures() {
  return (
    <section>
      <h1>App</h1>
      <div className={styles.feature}>
        <a className={styles.linkWrap} href="/app">
          <div className={clsx("col", styles.feautureCard)}>
            <div>
              <h3 as="h3" className={clsx(styles.feautureTitle)}>
                Foundations
              </h3>
              <p className={clsx(styles.feautureParagraph)}>Description</p>
            </div>
          </div>
        </a>
        <a className={styles.linkWrap} href="/app">
          <div className={clsx("col", styles.feautureCard)}>
            <div>
              <h3 as="h3" className={clsx(styles.feautureTitle)}>
                Components
              </h3>
              <p className={clsx(styles.feautureParagraph)}>Description</p>
            </div>
          </div>
        </a>
        <a className={styles.linkWrap} href="/app">
          <div className={clsx("col", styles.feautureCard)}>
            <div>
              <h3 as="h3" className={clsx(styles.feautureTitle)}>
                Patterns
              </h3>
              <p className={clsx(styles.feautureParagraph)}>Description</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
