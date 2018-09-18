import React from 'react';
import styles from './InsiderTip.styles.css';
import container from './app.styles.css';

const InsiderTip = (props) => {
  const { insiderTip } = props;
  return (
    <div>
      <h1 className={container.headings}> Insider Tips </h1>
      <div className={styles.container}>
        <div className={styles.text}>
          {insiderTip}
        </div>
      </div>
    </div>
  );
};

export default InsiderTip;
