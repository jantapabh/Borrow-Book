import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';



export default class BookContent extends React.Component {

    static navigationOptions = {
        title: 'BookContent',
    };

    render() {
        const { navigate } = this.props.navigation;

        const data = this.props.navigation.getParam('data')
        return (
            <View style={styles.container}>
                <Text style={styles.container}>{data.content} </Text>
            </View> 
        );
    }

    handlePress = () => {

    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#336699',
        flexDirection: 'column',
        fontSize: 20,

    }
});
