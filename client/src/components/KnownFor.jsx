import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styles from './KnownFor.styles.css';
import container from './App.styles.css';


const KnownFor = ({ knownFor }) => (
  <div>
    <h1 className={container.headings}> Known For </h1>
    <div className={styles.itemList}>
      {
          knownFor.map(item => (
            <div className={styles.knownContainer}>
              <img src="https://www.zagat.com/assets/knownfor/placeholder.svg" alt="" className={styles.knownImage} />
              {/* <FontAwesomeIcon icon={item.icon} alt="" className={styles.knownImage}/> */}
              <div className={styles.knownText}>
                {item.title}
              </div>
            </div>
          ))
          }
    </div>
  </div>
);

// class KnownFor extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1 className={container.headings}> Known For </h1>
//         <div className={styles.itemList}>
//           {
//             this.props.knownFor.map((item) => {
//               return (
//                 <div className={styles.knownContainer}>
//                   <img src="https://www.zagat.com/assets/knownfor/placeholder.svg" className={styles.knownImage} />
//                   {/* <FontAwesomeIcon icon={item.icon} className={styles.knownImage}/> */}
//                   <div className={styles.knownText}> {item.title} </div>
//                 </div>
//               );
//             })
//           }
//         </div>
//       </div>
//     );
//   }
// }

KnownFor.propTypes = {
  knownFor: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default KnownFor;
