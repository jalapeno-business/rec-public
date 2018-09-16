import React from 'react';
import WhatToOrder from './WhatToOrder.jsx';
import InsiderTip from './InsiderTip.jsx';
import KnownFor from './KnownFor.jsx';
import axios from 'axios';
import styles from './app.styles.css';
import ZagatMentions from './ZagatMentions.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      whatToOrder: ['photo1', 'photo2', 'photo3'],
      insiderTip: 'insider tip',
      knownFor: 'these things and this',
      publicationsList: ['testing']
      // server: 'http:localhost:3004/recommendations/'
    };
    this.getData = this.getData.bind(this);
  }

  getData(id) {
    axios('/recommendations/1')
      .then( res => {
        console.log(res.data[0]);
        let data = res.data[0].whatToOrderList;
        if (data.length < 3) {
          data.push('');
        }
        this.setState({
          whatToOrder: data, 
          insiderTip: res.data[0].insiderTip,
          publicationsList: res.data[0].publicationsList
        });
        console.log("before state check", this.state.whatToOrder);
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
        <ZagatMentions mentions={this.state.publicationsList}/>
      </div>
    ); 
  }
}

export default App;