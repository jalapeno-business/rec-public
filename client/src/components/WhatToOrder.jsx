import React from 'react';
import styles from './WhatToOrder.styles.css';
import container from './app.styles.css';

class WhatToOrder extends React.Component {

  setImage(item) {
    let defaultImage = 'https://www.thetastesf.com/wp-content/uploads/2016/08/Mensho-Tokyo-SF-ramen-thetastesf-DSC01715-2.jpg';
    if (item.img) {
      return (
        <div className={styles.photo} style={{backgroundImage: `url(${item.img})`}}> <div className={styles.text}>{item.title}</div></div>
      );
    } else {
      return (
        <div className={styles.photo} style={{backgroundImage: `url(${defaultImage})`}}> {item.title}</div> 
      );
    }
  }
  // } else if (item.title && item.img) {
  //   return (
  //     <div className={styles.photo} style={{backgroundImage: `url(${defaultImage})`}}> {item.title}</div> 
  //   );
  // }

  render() {
    return (
      <div> 
        <h1 className={container.headings}> What To Order</h1>
        <div className={styles.itemList}> 
          {
            this.props.whatToOrder.map(item => {
              return (
                <div key={item.id} className={styles.photo}>{this.setImage(item)}</div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default WhatToOrder;