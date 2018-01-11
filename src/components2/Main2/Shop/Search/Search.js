import React, { Component } from 'react';
import { Navigator } from 'react-native';

import SearchView from './SearchView';
import ProductDetail from '../ProductDetail/ProductDetail';


class Search extends Component {

    render() {
        return (
            <Navigator
                initialRoute={{ name: 'SEARCH_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'SEARCH_VIEW': return <SearchView navigator={navigator} />;
                        case 'PRODUCT_DETAIL': return <ProductDetail navigator={navigator} />;
                        default: return <SearchView navigator={navigator} />;
                    }
                }}
            />
        );
    }
}

export default Search;
