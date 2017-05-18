/**
 * Created by justloveu on 2017/5/18.
 */
import React from 'react'
import {
    Text,
    View,
    FlatList,
    Image,
    Button,
} from 'react-native';
import {StackNavigator} from 'react-navigation'
const shows_first = [
    {
        key: 1,
        name: 'Suits',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg'
    },
    {
        key: 2,
        name: 'Modern Family',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/628.jpg'
    },
    {
        key: 3,
        name: 'The Flash',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg'
    },
    {
        key: 4,
        name: 'Supergirl',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/83/209955.jpg'
    },
    {
        key: 5,
        name: 'Designated Survivor',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/101/253490.jpg'
    },
    {
        key: 6,
        name: '24: Legacy',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/90/225030.jpg'
    }
]

class ShopGuideScreen extends React.PureComponent {
    render() {
        return (<FlatList
            data={shows_first}
            numColumns={2}
            SeparatorComponent={() => <View style={{width: 50, height: 10, backgroundColor: 'red'}}/>}
            renderItem={ ({item}) => ShopGuideScreen._renderItem(item)}
        />);
    }

    static _renderItem(item) {
        return (
            <View>
                <Image style={{width: 120, height: 120}} source={{uri: item.image}}/>
                <Text>${item.name}</Text>
            </View>
        )
    }
}

const ShopGuideStack = StackNavigator({
    ShopGuide: {
        screen: ShopGuideScreen,
    }
}, {
    headerMode: 'none'
});

export default ShopGuideStack;

