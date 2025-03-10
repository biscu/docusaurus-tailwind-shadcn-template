import style from "./style.module.css";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { TbThumbUp, TbThumbDown } from "react-icons/tb";

const Guides = ({ imageSrcLight, imageSrcDark, type, text }) => {
  return (
    <>
      <div className={style.containerGuides}>
        <div className={style.image}>
          <ThemedImage
            alt="Docusaurus themed image"
            sources={{
              light: useBaseUrl(imageSrcLight),
              dark: useBaseUrl(imageSrcDark),
            }}
          />
        </div>
        <div className={type === "do" ? style.do : style.dont}>
          <div className={style.title}>
            {type === "do" ? (
              <TbThumbUp size={22} />
            ) : (
              <TbThumbDown size={22} />
            )}
            <span>
              <b>{type === "do" ? "Do" : "Don't"}</b>
            </span>
          </div>
          <div className={style.text}>{text}</div>
        </div>
      </div>
    </>
  );
};

export default Guides;
