import React from 'react';
import WhatToOrder from './WhatToOrder.jsx';
import InsiderTip from './InsiderTip.jsx';
import KnownFor from './KnownFor.jsx';
import axios from 'axios';
import styles from './app.styles.css';
import ZagatMentions from './ZagatMentions.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBirthdayCake,
  faLeaf,
  faGlassMartini,
  faBeer,
  faHeadphonesAlt,
  faPaw,
  faUtensils,
  faCookieBite
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faBirthdayCake,
  faLeaf,
  faGlassMartini,
  faBeer,
  faHeadphonesAlt,
  faPaw,
  faUtensils,
  faCookieBite
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

  getData(id) {
    axios('/recommendations/1')
      .then( res => {
        console.log(res.data[0]);
        let data = res.data[0].whatToOrderList;
        while (data.length < 3) {
          data.push('');
        }
        this.setState({
          whatToOrder: data, 
          insiderTip: res.data[0].insiderTip,
          publicationsList: res.data[0].publicationsList,
          restaurantName: res.data[0].restaurant,
          knownFor: res.data[0].knownForIcons
        });
        console.log("before state check", this.state.knownFor);
      })
      .catch(function(error) {
        console.log('error found in getwhattoorderohoto in app.jsx', error);
      });
  }

  componentDidMount() {
    this.getData(window.location.pathname);
  }

  render() {
    return (
      <div className={styles.outerContainer}> 
        <div className={styles.app}>
          <WhatToOrder whatToOrder={this.state.whatToOrder}/>
        </div>
        <InsiderTip insiderTip={this.state.insiderTip} />
        <KnownFor knownFor={this.state.knownFor} />  
        <ZagatMentions mentions={this.state.publicationsList} restaurantName={this.state.restaurantName}/>
      </div>
    ); 
  }
}

export default App;