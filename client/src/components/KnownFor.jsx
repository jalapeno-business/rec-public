import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './KnownFor.styles.css';
import container from './app.styles.css';

class KnownFor extends React.Component {
  render() {
    return (
      <div> 
        <h1 className={container.headings}> Known For </h1>
        <div className={styles.itemList}>
          { 
            this.props.knownFor.map(item => {
              return (
                <div className={styles.knownText}> 
                  <FontAwesomeIcon icon={item.icon} className={styles.knownImage}/>
                  <div className={styles.knownText}> {item.title} </div>
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
