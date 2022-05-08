import styles from './BaseTemplate.module.css';
import React, { FC } from "react";
export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: FC<IBaseTemplate> = ({ sampleTextProp  }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default BaseTemplate;
