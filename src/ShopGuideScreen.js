/**
 * Created by justloveu on 2017/5/18.
 */
import React from 'react'
import {
    Text,
    View,
    FlatList,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import {StackNavigator} from 'react-navigation';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

class ShopGuideScreen extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            data: [],
            offset: 0,
            limit: 10,
            error: null,
            refreshing: false
        }
    }

    componentDidMount() {
        this.fetchData();
    }


    fetchData() {
        fetch('http://sg-en-android-api.ezbuy.sg/api/Category/GetProducts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json charset=UTF-8',
            },
            body: JSON.stringify({
                originCode: '',
                id: 0,
                limit: this.state.limit,
                offset: this.state.offset,
            })
        })
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    data: this.state.offset === 0 ? json : [...this.state.data, ...json],
                    offset: this.state.offset + 1,
                    refreshing: false,
                    loading: false,
                })
                ;
            })
            .catch(error => {
                this.setState({error: error, loading: false, refreshing: false})
            });
    }

    handleLoadMore = () => {
        this.setState(
            {
                offset: this.state.offset + 1,
                loading: true,
            },
            () => {
                this.fetchData();
            }
        );
    };


    _handleRefresh() {
        this.setState({
            offset: 0,
            refreshing: true,
            loading: false,
        }, () => {
            this.fetchData();
        });
    }


    render() {
        return (<FlatList
            data={this.state.data}
            numColumns={2}
            // onReFresh={this._handleRefresh()}
            // refreshing={this.state.refreshing}
            onEndReached={this.handleLoadMore}
            renderItem={ ({item}) => ShopGuideScreen._renderItem(item)}
        />);
    }

    static _renderItem(item) {
        return (
            <View>
                <Image style={{height: width / 2, width: width / 2}} source={{uri: item.picture}}/>
                <Text style={{width: width / 2, fontSize: 16, color: '#333333', maxLines: 2}}>${item.name}</Text>
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

