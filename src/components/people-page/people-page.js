import React, { Component } from 'react';

import './people-page';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi';
import Row from '../row'
import ErrorBoundry from '../error-boundry'
import {Record} from "../item-details/record";


export default class PeoplePage extends Component {

  swapiService = new SwapiService()

  state = {
    selectedPerson: 3
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    console.log(this.state.selectedPerson)
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {(i) => (
          `${i.name}, birth-year ${i.birthYear}`
        )}
      </ItemList>
    )

    const itemDetails = (
      <ItemDetails
          getData={this.swapiService.getPerson}
          itemId={this.state.selectedPerson}
          getImageUrl={this.swapiService.getPersonImage}
      >
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    )

    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundry>
    )
  }

}
