
import React, { Component } from 'react';
import Bootstrap, {
  Carousel,
  Button,
  Container,
} from 'bootstrap-4-react';


const MyCarousel = props => (
  <div >

    
  </div>
)
 


class Carrusel extends Component {
  componentDidMount() {
    Bootstrap.carousel();
  }

  render() {
    return (
        <main role="main">
          <MyCarousel />
        </main>
    );
  }
}

export default Carrusel;