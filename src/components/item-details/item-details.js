import React, { Component } from 'react';

import './item-details.css';

import SwapiService from '../../services/swapi';
import Spinner from '../spinner';
import ErrorButton from '../error-btn/error-btn';

export default class ItemDetails extends Component {

  swapiService = new SwapiService;

  state = {
    item: null,
    isLoading: true,
    image: null
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updatePerson();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }
   
    getData(itemId)
      .then((item) => {
        this.setState({
          item: item,
          image: getImageUrl(item)
        })
      })
  }

  render() {

    const { item, image } = this.state;
    if (!item) {
      return <Spinner/>;
    }

    const {name, gender,
      birthYear, eyeColor } = item;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={image}
          alt="character" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          <ErrorButton />
        </div>
      </div>
    )
  }
}