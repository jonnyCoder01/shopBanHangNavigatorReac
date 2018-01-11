import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

class Home extends Component {

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#D2D4D2', marginBottom: 30 }}>

                <Collection />
                <Category navigator={this.props.navigator} />
                <TopProduct navigator={this.props.navigator} />

            </ScrollView>
        );
    }
}

export default Home;
