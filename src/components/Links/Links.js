import React from "react";
import style from "./style.module.css";
import { TbBrandFigma, TbBrandGithub, TbBrandStorybook } from "react-icons/tb"; // Ensure you have react-icons installed

const Links = ({
  figmaUrl,
  githubWebUrl,
  githubIosUrl,
  githubAndroidUrl,
  storybookUrl,
}) => {
  return (
    <div className={style.extLinkContainer}>
      {figmaUrl && (
        <a
          href={figmaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={style.extLink}
        >
          <TbBrandFigma size={24} />
          <span>Figma</span>
        </a>
      )}
      {githubIosUrl && (
        <a
          href={githubIosUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={style.extLink}
        >
          <TbBrandGithub size={24} />
          <span>iOS</span>
        </a>
      )}
      {githubAndroidUrl && (
        <a
          href={githubAndroidUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={style.extLink}
        >
          <TbBrandGithub size={24} />
          <span>Android</span>
        </a>
      )}
      {githubWebUrl && (
        <a
          href={githubWebUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={style.extLink}
        >
          <TbBrandGithub size={24} />
          <span>Github</span>
        </a>
      )}
      {storybookUrl && (
        <a
          href={storybookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={style.extLink}
        >
          <TbBrandStorybook size={24} />
          <span>Storybook</span>
        </a>
      )}
    </div>
  );
};

export default Links;
