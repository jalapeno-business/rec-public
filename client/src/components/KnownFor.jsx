import React from 'react';
import PropTypes from 'prop-types';
import styles from './KnownFor.styles.css';
import container from './App.styles.css';


const KnownFor = ({ knownFor }) => {
  if (knownFor.length !== 0) {
    return (
      <div>
        <h1 className={container.headings}> Known For </h1>
        <div className={styles.itemList}>
          {
            knownFor.map(item => (
              <div className={styles.knownContainer}>
                <div key={item.id} style={{ backgroundImage: `url(${item.icon})` }} alt="" className={styles.knownImage} />
                <div className={styles.knownText}>
                  {item.title}
                </div>
              </div>
            ))
            }
        </div>
      </div>
    );
  }
  return null;
};

KnownFor.propTypes = {
  knownFor: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default KnownFor;
