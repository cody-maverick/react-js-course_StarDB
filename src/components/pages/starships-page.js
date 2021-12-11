import React, { Component } from 'react';
import { StarshipsDetails, StarshipsList } from '../sw-component';
import Row from '../row';

export default class StarshipsPage extends Component {

    state = {
        selectedItem: null
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {
        const { selectedItem } = this.state;

        return (
            <Row
                left={<StarshipsList onItemSelected={this.onItemSelected} />}
                right={<StarshipsDetails itemId={selectedItem} />} />
        );
    }
}
