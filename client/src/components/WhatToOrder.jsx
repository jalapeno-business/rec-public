import React from 'react';
import styles from './WhatToOrder.styles.css';

class WhatToOrder extends React.Component {

  setImage(item) {
    let defaultImage = 'https://www.thetastesf.com/wp-content/uploads/2016/08/Mensho-Tokyo-SF-ramen-thetastesf-DSC01715-2.jpg';
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
      <div> 
        <h1> What To Order and {this.props.whatToOrder.length}</h1>
        {
          this.props.whatToOrder.map(item => {
            return (
              <div key={item.id} className={this.test}>{this.setImage(item)}</div>
            );
          })
        }
      </div>
    );
  }
}

export default WhatToOrder;