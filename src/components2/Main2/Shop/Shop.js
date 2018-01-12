import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Dimensions, Image,
    StyleSheet
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Header from './Header';

import homeIconS from '../../../media/appIcon/home.png';
import homeIcon from '../../../media/appIcon/home0.png';

import cartIconS from '../../../media/appIcon/cart.png';
import cartIcon from '../../../media/appIcon/cart0.png';

import searchIconS from '../../../media/appIcon/search.png';
import searchIcon from '../../../media/appIcon/search0.png';

import contactIconS from '../../../media/appIcon/contact.png';
import contactIcon from '../../../media/appIcon/contact0.png';



class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            types: [],
            topProducts: [],
            cartArray: [1,2,3],
        };
    }

    componentDidMount() {
        fetch('http://192.168.99.2/api')
            .then(res => res.json())
            .then(resJSON => {
                const { type, product } = resJSON;
                this.setState({
                    types: type,
                    topProducts: product
                });
            });
    }

    openMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        const { iconStyle } = styles;
        const { types, selectedTab, topProducts, cartArray } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <Header onOpen={this.openMenu.bind(this)} />
                <TabNavigator
                    tabBarStyle={{ backgroundColor: '#fff', height: '15%' }}
                >
                    <TabNavigator.Item
                        selected={selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image source={homeIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={homeIconS} style={iconStyle} />}
                        badgeText=""
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        selectedTitleStyle={{ color: 'red', fontSize: 12, fontFamily: 'sans-serif', fontWeight: 'bold' }}
                    >

                        <Home types={types} topProducts={topProducts} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'cart'}
                        title="Cart"
                        renderIcon={() => <Image source={cartIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={cartIconS} style={iconStyle} />}
                        badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'cart' })}>
                        <Cart cartArray= {cartArray} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'search'}
                        title="Search"
                        renderIcon={() => <Image source={searchIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={searchIconS} style={iconStyle} />}
                        badgeText=""
                        onPress={() => this.setState({ selectedTab: 'search' })}>
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'contact'}
                        title="Contact"
                        renderIcon={() => <Image source={contactIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={contactIconS} style={iconStyle} />}
                        onPress={() => this.setState({ selectedTab: 'contact' })}>
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: 35, height: 35
    }
});

export default Shop;
