import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ItemList from '../item-list'
import ItemDetails from '../item-details/item-details'
import { Record } from "../item-details/record";
import ErrorBoundry from '../error-boundry'

import './app.css';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi';
import Row from '../row';
import {PersonList} from "../sw-component";

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {

    const { getPerson, getStarships, getPersonImage, getStarshipImage, getAllPeople } = this.swapiService

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      >
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    )

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarships}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    )


    return (
      <ErrorBoundry>
        <div className="container">
          <Header />
           <RandomPlanet />
           <PeoplePage />

            <PersonList>
              {({ name }) => <span>{name}</span>}
            </PersonList>
            {/*<PeopleDetail/>*/}

          <ItemList
            getData={getAllPeople}
            onItemSelected={() => { }}
          >
            {({ name }) => <span>{name}</span>}
          </ItemList>

          <Row
            left={personDetails}
            right={starshipDetails} />
        </div>
      </ErrorBoundry>

    );
  }

};
