import React, { Component } from 'react';

import './item-list.css';
import Spinner from '../spinner';
import SwapiService from '../../services/swapi'

const ItemList = (props) => {
  const { data, onItemSelected, children: renderLabel } = props;
  const items = data ? data.map((item) => {
    const { id } = item;
    const label = renderLabel(item)

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}>
        {label}
      </li>
    )
  }) : ''

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
}

export default ItemList
