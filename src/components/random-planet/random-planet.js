import React, { Component } from 'react';

import SwapiService from '../../services/swapi';

import './random-planet.css';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import PlanetView from "./planet-view";

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  }

  constructor() {
    super();
  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false })
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  setLoading =(loading = true) => {
    this.setState({
      loading
    })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25 + 2);
    this.setLoading();
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : <Spinner/>

    return (
      <div className="random-planet jumbotron rounded">
        {error ? errorMessage : content}
      </div>
    );
  }
}


