import React from 'react';
import axios from 'axios';
import WhatToOrder from './WhatToOrder';
import InsiderTip from './InsiderTip';
import KnownFor from './KnownFor';
import styles from './App.styles.css';
import ZagatMentions from './ZagatMentions';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      whatToOrder: [],
      insiderTip: 'insider tip',
      publicationsList: [],
      restaurantName: '',
      knownFor: [],
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    let id = window.location.pathname;
    if (id === '/') {
      id = '/1';
    }
    this.getData(id);
  }

  getData(id) {
    axios(`/api/restaurant/recommendations${id}`)
      .then((res) => {
        const data = res.data[0].whatToOrderList;
        this.setState({
          whatToOrder: data,
          insiderTip: res.data[0].insiderTip,
          publicationsList: res.data[0].publicationsList,
          restaurantName: res.data[0].restaurant,
          knownFor: res.data[0].knownForIcons,
        });
      })
      .catch((error) => {
        console.log('error found in getwhattoorderohoto in app.jsx', error);
      });
  }

  render() {
    const {
      whatToOrder, insiderTip, publicationsList, restaurantName, knownFor,
    } = this.state;
    return (
      <div className={styles.outerContainer}>
        <div>
          <WhatToOrder className="item-1" whatToOrder={whatToOrder} />
        </div>
        <div>
          <InsiderTip className="item-2" insiderTip={insiderTip} />
        </div>
        <KnownFor className="item-3" knownFor={knownFor} />
        <div className="list">
          <ZagatMentions className="item-4" mentions={publicationsList} restaurantName={restaurantName} />
        </div>
      </div>
    );
  }
}

export default App;
