import React, { Component } from 'react'
import { Films } from './shared/ListOfFlims'
import FilmsPresentation from './FilmsPresentation';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
            films: Films
        };
    }
    render() {
        return <FilmsPresentation players={this.state.films} />
    }
}
export default Main;