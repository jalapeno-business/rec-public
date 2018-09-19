import React from 'react';
import styles from './WhatToOrder.styles.css';
import container from './app.styles.css';

class WhatToOrder extends React.Component {

  setImage(item) {
    let defaultImage = 'https://www.zagat.com/assets/img/no-dish.png';
    if (item.img) {
      return (
        <div className={styles.photo} style={{backgroundImage: `url(${item.img})`}}> 
          <div className={styles.overlay}></div>
          <span className={styles.text}> {item.title} </span>
        </div>
      );
    } else {
      return (
          <div className={styles.photo} style={{backgroundImage: `url(${defaultImage})`}}> 
            <span className={styles.text}> {item.title} </span>
          </div> 
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
            this.props.whatToOrder.map((item) => {
              return (
                <div key={item.id} className={styles.itemContainer}>
                  <div className={styles.item}>{this.setImage(item)}</div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default WhatToOrder;
