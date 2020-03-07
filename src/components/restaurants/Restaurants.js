import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {

    const restaurants = this.props.restaurants.map((restaurant) => <Restaurant key={this.props.id} {...restaurant} />)
    return(
      <div>
      <ul>
        { restaurants }
      </ul>
      </div>
    );
  }
};

// const Restaurants = props => {
  
//   return (
//     <div>
//       { restaurants }
//     </div>
//   )
// }

export default Restaurants;