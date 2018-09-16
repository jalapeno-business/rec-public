import React from 'react';
import styles from './whatToOrder.styles.css';

class WhatToOrder extends React.Component {

  setImage(item) {
    let defaultImage = 'http s://storage.googleapis.com/zagat-top-places/2014-12-san-francisco/27_4505_burger.jpg?max-w=305&auto=format';
    if (item.img) {
      return (
        <div className={styles.photo} style={{backgroundImage: `url(${item.img})`}}> {item.title}</div>
      );
    } else {
      return (
        <div className={styles.photo} style={{backgroundImage: `url(${defaultImage})`}}> {item.title}</div> 
      );
    }
  }

  render() {
    return (
      <div className={styles.test}> 
        <h1> What To Order and {this.props.whatToOrder.length}</h1>
        {
          this.props.whatToOrder.map(item => {
            return (
              <div key={item.id}>{this.setImage(item)}</div>
            );
          })
        }
      </div>
    );
  }
}

export default WhatToOrder;