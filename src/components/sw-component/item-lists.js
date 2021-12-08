import React from 'react';
import ItemList from '../item-list'
import {withData} from "../hoc-helpers";
import SwapiService from "../../services/swapi";

const swapiService = new SwapiService();

const {getAllPeople, getAllPlanets, getAllStarships} = swapiService;

const PersonList = withData(ItemList, getAllPeople)
const PlanetList = () => withData(ItemList, getAllPlanets)
const StarshipsList = () => withData(ItemList, getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipsList
}
