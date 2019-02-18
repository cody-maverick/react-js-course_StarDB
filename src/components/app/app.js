import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ItemList from '../item-list'
import ItemDetails from '../item-details'
import ErrorBoundry from '../error-boundry'

import './app.css';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi';
import Row from '../row';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }


  render() {

    const { getPerson, getStarships, getPersonImage, getStarshipImage } = this.swapiService

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      />
    )

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarships}
        getImageUrl={getStarshipImage}
      />
    )


    return (
      <ErrorBoundry>
        <div className="container">
          <Header />
          {/* <RandomPlanet /> */}
          {/* <PeoplePage /> */}
          <Row
            left={personDetails}
            right={starshipDetails} />
        </div>
      </ErrorBoundry>

    );
  }

};
