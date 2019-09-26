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
      content: 'Who moved my cheese? เป็นนิทานที่เล่าผ่านตัวละคร 4 ตัว โดยแบ่งเป็น หนู 2 ตัว กับคนตัวจิ๋ว 2 คน เป็นตัวแทนของคน 4 ประเภท กลุ่มคนเหล่านี้่ออกตามหาชีสในทุกๆ วัน แต่วันนึงเหล่านั้นดันหายไปซะอย่างงั้น!!! แล้วใครเอาเนยแข็งของฉันไป????? ในหนังสือจะพูดถึงตัวละคร 4 ตัว 4 มุมมอง ถึงวิธีการแก้ไขปัญหา หลังจากที่ชีตหายไป ถ้าอยากรู้ก็ไปหาอ่านกันเลยยยยยยยยยยย'
    },
    {
      image: require('./Booklist/book4.png'),
      content: 'ปลดล็อกสกิลการทำข้อสอบ GAT เชื่อมโยง ด้วยเทคนิคลับ จากติวเตอร์มืออาชีพ ผู้สอน GAT เชื่อมโยงโดยเฉพาะ พร้อมแบบฝึกหัดและแนวข้อสอบกว่า 50 บทความ รวมเคล็ดลับและแนวข้อสอบในการทำข้อสอบ GAT ภาษาไทย หรือ GATเชื่อมโยง ไว้อย่างครบถ้วน มีการอธิบายเป็น step by step เริ่มจากการทำแนวข้อสอบในระดับง่ายๆ จนไปถึงระดับยาก'
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
