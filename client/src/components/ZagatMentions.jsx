import React from 'react';
import PropTypes from 'prop-types';
import container from './App.styles.css';
import styles from './ZagatMentions.styles.css';
import { PromiseProvider } from 'mongoose';

class ZagatMentions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      visible: [],
    };
    this.toggleVisible = this.toggleVisible.bind(this);
    this.showMentions = this.showMentions.bind(this);
  }

  showTwo() {
    const visible = this.props.mentions.slice(0, 2);
    return this.showMentions(visible);
  }

  showMentions(items) {
    return (
      <div className={styles.itemContainer}>
        {
      items.map((item) => {
        return (
          <div className={styles.item} key={item.id}>
            <a href={item.url} className={styles.url} target="_blank" rel="noreferrer noopener">
              <div className={styles.subContainer}>
                <div className={styles.photoContainer}>
                  <div style={{backgroundImage: `url(${item.img})`}} className={styles.photo} id={styles.box}></div>
                </div>
              <div className={styles.card}>
                <div className={styles.cardDetails}>
                  <h1 className={styles.cardTitle}>{item.title}</h1>
                </div>
              </div>
            </div>
            </a>
          </div>
        );
      })
      }
      </div>
    );
  }

  toggleVisible() {
    this.setState(state => ({
      showMore: !state.showMore,
    }));
  }

  render() {
    const { mentions, restaurantName } = this.props;
    const { showMore } = this.state;
    if (mentions.length !== 0) {
      return (
        <div>
          <h1 className={container.headings}>
          Zagat Mentions of
            {` ${restaurantName}` }
          </h1>
          <div>
            {
              showMore ? this.showMentions(mentions)
                : (
                  <div>
                    { this.showTwo() }
                  </div>
                )
            }
          </div>
          <div className={styles.buttonContainer}>
            <button type="button" onClick={this.toggleVisible} className={styles.button}>
              <span className={styles.buttonText}>{showMore ? 'SHOW LESS' : `SHOW ALL (${mentions.length})`}</span>
            </button>
          </div>
        </div>
      );
    }
    return null;
  }
}

ZagatMentions.propTypes = {
  restaurantName: PropTypes.string.isRequired,
};
// onMouseOver={styles.buttonHover} 

export default ZagatMentions;
