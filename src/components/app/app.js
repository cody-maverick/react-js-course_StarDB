import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import SwapiService from '../../services/swapi';
import ErrorBoundry from "../error-boundry";
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages';
import {SwapiServiceProvider} from '../swapi-service-context';
import {Router, Routes, Route} from "react-router-dom";

import './app.css';


export default class App extends Component {

    state = {
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ?
                SwapiService : SwapiService;
            return {
                swapiService: new Service()
            };
        });
    };

    render() {
        return (
            // <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet/>

                        {/*<Routes>*/}
                        {/*    <Route path="/people" element={<PeoplePage/>}/>*/}
                        {/*    <Route path="/planets" element={<PlanetsPage/>}/>*/}
                        {/*    <Route path="/starships" element={<StarshipsPage/>}/>*/}

                        {/*    /!*<Route path="/" element={<App/>}/>*!/*/}
                        {/*    /!*<Route path="expenses" element={<Expenses/>}/>*!/*/}
                        {/*    /!*<Route path="invoices" element={<Invoices/>}/>*!/*/}
                        {/*</Routes>*/}

                    </div>
                </SwapiServiceProvider>

            // </Router>
            // </ErrorBoundry>
        )

    }
}


// <Routes>
//     <Route path="/people">
//         <PeoplePage/>
//     </Route>
//     <Route path="/planets" component={() => PlanetsPage}/>
//     <Route path="/starships" component={() => StarshipsPage}/>
// </Routes>
