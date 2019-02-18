import React, { Component } from 'react';

import './people-page';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi';
import Row from '../row'
import ErrorBoundry from '../error-boundry'


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
      <ItemDetails personId={this.state.selectedPerson} />
    )

    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundry>
    )
  }

}