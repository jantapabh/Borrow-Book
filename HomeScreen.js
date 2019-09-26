import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Book from './Book';


const initState = {
  books: [
    {
      image: require('./Booklist/book1.jpg'),
      content: 'นานเท่าไหร่แล้วที่คุณ... เฝ้ารอว่าชีวิตจะดีขึ้นอย่างปาฏิหาริย์ หวังว่าโชคชะตาจะบันดาลให้รวยขึ้น ฝันลมแล้งๆ ว่า ปัญหาที่มีจะหายไปเอง แล้วเมื่อไหร่สิ่งเหล่านี้จะเกิดขึ้นจริง? "หนังสือเล่มนี้จะเปลี่ยนชีวิตคุณภายใน 30 วัน" ด้วยเทคนิค เคล็ดลับ และแบบฝึกหัด ที่จะนำไปใช้ปรับปรุงชีวิตได้ดีกว่าที่คุณคาด เพียงแค่ฝึกฝนอย่างต่อเนื่องและสม่ำเสมอ ฝันทุกอย่างก็สามารถเป็นจริงได้ด้วยมือของคุณเอง!'
    },
    {
      image: require('./Booklist/book3.jpg'),
      content: 'test book2'
    },
    {
      image: require('./Booklist/book4.png'),
      content: 'Test 3'
    },
    {
      image: require('./Booklist/book5.jpg'),
      content: 'Test 4' 

    }
  ]
}



export default class HomeScreen extends React.Component {

  state = initState;

  static navigationOptions = {
    title: 'HomeScreen',
  };


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>"Book Love"</Text>
        <Text style={styles.text1}>"หนังสือที่ดี จะเปลี่ยนชีวิตคุณ"</Text>
        <Image source={require('./book.jpg')} style={styles.image}></Image>
        <View style={styles.buttonClick}>
          <Button title="Read Review"
            onPress={() => navigate('Book', { data: this.state.books, id: 0 })} style={{ fontSize: 30, color: 'white', backgroundColor: '#669933', width: 400, justifyContent: 'center', textAlign: 'center' }} />
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
    backgroundColor: '#6666FF',
    borderColor: 'black',
    overflow: 'hidden',

  },
  buttonClick: {

    textAlign: 'center',
    margin: 30,
    width: 700,
    height: 150,
    color: 'green',
    alignItems: 'center',
    display: 'flex',
    flex: 1,

  },
  text: {
    backgroundColor: 'skyblue',
    textAlign: 'center',
    color: 'black',
    fontSize: 50,
    margin: 10,
    flexDirection: 'row',
    fontWeight: 'bold',
    flex: 1,


  },
  image: {
    backgroundColor: 'blue',
    textAlign: 'center',
    color: 'green',
    margin: 20,
    flexDirection: 'column',
    fontWeight: 'bold',
    width: 300,
    height: 300,
    alignItems: 'center',


  },
  text1: {
    backgroundColor: 'skyblue',
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    margin: 5,
    flexDirection: 'row',
    fontWeight: 'bold',


  },




});
