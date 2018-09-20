import React from 'react';
import styles from './InsiderTip.styles.css';
import container from './app.styles.css';
import { join } from 'path';

const InsiderTip = (props) => {
  const { insiderTip } = props;
  return (
    <div className={styles.container}>
      <h1 className={container.headings}> Insider Tips </h1>
      <div className={styles.textContainer}>
        <div className={styles.tipDivider}></div>
        <div className={styles.text}>
          {insiderTip}
        </div>
        <div className={styles.tipDivider}></div>
      </div>
    </div>
  );
};

export default InsiderTip;
