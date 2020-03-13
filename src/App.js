import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Card from './components/Card';
import Cards from './components/Cards';
import './App.css';

const data = [
  {
    id: '1',
    name: 'Album',
    path:'album',
    image: require('./images/album.png')
  }, {
    id: '2',
    name: 'Blog',
    path:'blog',
    image: require('./images/blog.png')
  }, {
    id: '3',
    name: 'Carousel',
    path:'carousel',
    image: require('./images/carousel.png')
  }, {
    id: '4',
    name: 'Checkout',
    path:'checkout',
    image: require('./images/checkout.png')
  }, {
    id: '5',
    name: 'Cover',
    path:'cover',
    image: require('./images/cover.png')
  }, {
    id: '6',
    name: 'Product',
    path:'product',
    image: require('./images/product.png')
  },
]


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/card">
            <Card />
          </Route>
          <Route exact path="/">
            <Cards data={data} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
