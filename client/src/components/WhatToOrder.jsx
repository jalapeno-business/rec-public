import React from 'react';
import PropTypes from 'prop-types';
import styles from './WhatToOrder.styles.css';
import container from './App.styles.css';

const WhatToOrder = ({ whatToOrder }) => {
  const setImage = (item) => {
    const defaultImage = 'https://www.zagat.com/assets/img/no-dish.png';
    if (item.img) {
      return (
        <div className={styles.photo} style={{ backgroundImage: `url(${item.img})` }}>
          <div className={styles.overlay} />
          <span className={styles.text}>
            {item.title}
          </span>
        </div>
      );
    }
    return (
      <div className={styles.photo} style={{ backgroundImage: `url(${defaultImage})` }}>
        <span className={styles.text}>
          {item.title}
        </span>
      </div>
    );
  };

  return (
    <div>
      <h1 className={container.headings}> What To Order</h1>
      <div className={styles.itemList}>
        {
            whatToOrder.map(item => (
              <div key={item.id} className={styles.itemContainer}>
                <div className={styles.item}>{setImage(item)}</div>
              </div>
            ))
          }
      </div>
    </div>
  );
};

WhatToOrder.propTypes = {
  whatToOrder: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default WhatToOrder;
