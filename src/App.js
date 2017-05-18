import React from 'react';

import
    ShopGuideStack
    from './ShopGuideScreen';

import {
    AppRegistry,
    Text,
    View, Button,
} from 'react-native';

import {StackNavigator} from 'react-navigation';

const AppRoutes = {
    ShopGuideStack: {
        name: 'Shop Guide',
        description: 'Shop Guide',
        screen: ShopGuideStack,
    },
};

class HomeScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (<View>
            <Text>Hello, Chat App!</Text>
            <Button
                onPress={() => navigate('ShopGuide')}
                title='ShopGuideScreen'
            />
        </View>);
    }
}
const SimpleApp = StackNavigator({
        ...AppRoutes,
        Home: {
            screen: HomeScreen,
        },
    },
    {
        initialRouteName: 'Home',
        headerMode:'none'
    }
    )
;

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
