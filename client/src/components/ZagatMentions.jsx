import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './ZagatMentions.styles.css';

class ZagatMentions extends React.Component {  
  render() {
    return (
      <div>
        <h1> Zagat Mentions of {this.props.restaurantName} </h1>
        {
          this.props.mentions.map(item => {
            return (
              <div className={styles.mention}> 
                <a href={item.url} target="_blank" rel="noreferrer noopener"><img src={item.img} /></a>
                <h1>This is the title</h1>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default ZagatMentions;