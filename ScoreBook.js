import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, Alert } from 'react-native';



export default class ScoreBook extends React.Component {

    static navigationOptions = {
        title: 'ScoreBook',
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


        return (

            <View style={styles.container}>
                <Text style={{ fontSize: 30, color: 'white', backgroundColor: '#669933', width: 400, justifyContent: 'center' }}> Comment This App </Text>

                <TextInput
                    style={{ height: 200, width: 400, backgroundColor: 'azure', fontSize: 20 }}
                    placeholder="Comment about book this ! "
                    onChangeText={(text) => this.setState({ text })}

                />


                <View style={styles.buttonClick}>

                    <Button title="SUBMIT "
                        style={styles.buttonClick}
                        onPress={this.onPressButton} />
                    <View>

                    </View>
                    <Button title="HOME "
                        style={styles.buttonClick}
                        onPress={() => navigate('HomeScreen')} />
                </View> 
            </View>
        );
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
    },
    buttonClick: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        paddingEnd: 20,
        width: 300,
        height: 80,
        margin: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 30,

    },
    text: {

        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        margin: 20,
        flexDirection: 'row',
        backgroundColor: 'yellow',


    }




});
