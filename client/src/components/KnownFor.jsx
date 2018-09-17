import React from 'react';
import styles from './KnownFor.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class KnownFor extends React.Component {
  render() {
    return (
      <div> 
        <h1> Known For </h1>
        <div className={styles.itemList}>
          { 
            this.props.knownFor.map(item => {
              return (
                <div className={styles.knownItem}> 
                  <FontAwesomeIcon icon={item.icon} />
                  {item.title}
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default KnownFor;