import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import container from './app.styles.css';
import styles from './ZagatMentions.styles.css';

class ZagatMentions extends React.Component {
  constructor(props) {
    super();
      this.state = {
        showMore: false,
        visible: []
      };
      this.toggleVisible = this.toggleVisible.bind(this);
  }

  showTwo() {
    const visible = this.props.mentions.slice(0,2);
    console.log(visible);
    return this.showMentions(visible);
  }

  showMentions(items){
    return(
      <div className={styles.itemContainer}>
      {
      items.map((item) => {
        return (
          <div className={styles.item} key={item.id}>
          <a href={item.url} className={styles.url} target="_blank" rel="noreferrer noopener">
            <div className={styles.subContainer}>
              <div style={{backgroundImage: `url(${item.img})`}} className={styles.photo}></div>
              <div className={styles.card}>
                <div className={styles.cardDetails}>
                  <h1 className={styles.cardTitle}>This is the title</h1>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    })

      }
    </div>
    )
  }

  toggleVisible(){
    this.setState((state) => {
      return{
        showMore: !state.showMore
      }
    })
  }

  render() {
    const { mentions, restaurantName} = this.props;
    const { showMore } = this.state; 
    return (
      <div>
        <h1 className={container.headings}> Zagat Mentions of {restaurantName} </h1>
        <div>
          {
            showMore ? this.showMentions(mentions)
          :
          <div>
            {this.showTwo()}
          </div>
          }
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={this.toggleVisible} className={styles.button}>
            <span className={styles.buttonText}>{showMore ? "SHOW LESS" : `SHOW ALL (${mentions.length})`}</span>
          </button>
        </div>
      </div>
    );
  }
}

export default ZagatMentions;
