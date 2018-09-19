import React from 'react';
import {
  faBirthdayCake,
  faLeaf,
  faGlassMartini,
  faBeer,
  faHeadphonesAlt,
  faPaw,
  faUtensils,
  faCookieBite,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WhatToOrder from './WhatToOrder';
import InsiderTip from './InsiderTip';
import KnownFor from './KnownFor';
import styles from './app.styles.css';
import ZagatMentions from './ZagatMentions';

library.add(
  faBirthdayCake,
  faLeaf,
  faGlassMartini,
  faBeer,
  faHeadphonesAlt,
  faPaw,
  faUtensils,
  faCookieBite,
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      whatToOrder: ['photo1', 'photo2', 'photo3'],
      insiderTip: 'insider tip',
      publicationsList: [],
      restaurantName: '',
      knownFor: [],
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData(window.location.pathname);
  }

  getData(id) {
    axios('http://localhost:3004/5')
      .then((res) => {
        const data = res.data[0].whatToOrderList;
        while (data.length < 3) {
          data.push('');
        }
        this.setState({
          whatToOrder: data,
          insiderTip: res.data[0].insiderTip,
          publicationsList: res.data[0].publicationsList,
          restaurantName: res.data[0].restaurant,
          knownFor: res.data[0].knownForIcons,
        });
      })
      .catch((error) => {
        // console.log('error found in getwhattoorderohoto in app.jsx', error);
        throw error;
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
