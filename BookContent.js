import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';



export default class BookContent extends React.Component {

    static navigationOptions = {
        title: 'BookContent',
    };


    constructor(props) {
        super(props);
        this.state = { text: '' };

    }
    onPressButton() {

        Alert.alert('Thanks You Comments and Read Review .')


    }




    render() {
        const { navigate } = this.props.navigation;

        const data = this.props.navigation.getParam('data')
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{data.content} </Text>

                <Text style={{ fontSize: 30, color: 'white', backgroundColor: '#669933', width: 400, justifyContent: 'center' }}> Comment This App </Text>

                <TextInput
                    style={{ height: 200, width: 400, backgroundColor: 'azure', fontSize: 20 }}
                    placeholder="Comment about book this ! "
                    onChangeText={(text) => this.setState({ text })}

             />

            </View> 
        );

        <>
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
