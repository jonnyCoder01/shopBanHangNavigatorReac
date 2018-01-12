import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

class Home extends Component {

    render() {
        const { types, topProducts } = this.props;
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#D2D4D2', marginBottom: 30 }}>

                <Collection />
                <Category navigator={this.props.navigator} types={types} />
                <TopProduct navigator={this.props.navigator} topProducts={topProducts} />

            </ScrollView>
        );
    }
}

export default Home;
