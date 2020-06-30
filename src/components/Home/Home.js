import React, { Component } from 'react';
import Banner from '../Banner'
import ListBlockGS from './ListBlockGS';
import Intro from './Intro';
import ListClass from './ListClass';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Banner />
                <ListBlockGS />
                <Intro />
                <ListClass />
            </div>
        )
    }
}