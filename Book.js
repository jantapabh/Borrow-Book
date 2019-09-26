import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';



export default class Book extends React.Component {

  static navigationOptions = {
    title: 'Book',
  };


  render() {
    const { navigate } = this.props.navigation;
    const id = this.props.navigation.getParam('id');
    const propsData = this.props.navigation.getParam('data');
    const data = propsData[id];

    //const isLast = id === propsData.length - 1

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, color: 'white', backgroundColor: '#669933', width: 400, justifyContent: 'center', textAlign: 'center' }}>ReView Book</Text>
        <View style={styles.container}>
          <Image source={data.image} style={{ width: 300, height: 400 }} />
        </View>
        <View style={styles.buttonClick}>
          <Button title="Read Review"
            style={styles.buttonClick}
            // { data: data } = { data }
            onPress={() => navigate('BookContent', { data })} />
          <Button title="Next Review"
            style={styles.buttonClick}
            onPress={() => navigate('Book', {
              data: propsData, id: (id + 1) % propsData.length,
            })}
          />

          {
            // hide or show
            /* {
            isLast && (
              <Button title="Next Review"
              style={styles.buttonClick}
              onPress={() => navigate('BookSelect', { data: propsData, id: id + 1 })} />
              )
            } */
          }
          {
            //select one
            /* {
            isLast ? <Text>true</Text> : <Text>false</Text>
          } */
          }
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

    textAlign: 'center',
    justifyContent: 'center',
    paddingEnd: 20,
    width: 300,
    height: 80,
    margin: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
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
