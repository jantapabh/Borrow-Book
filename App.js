import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import HomeScreen from './HomeScreen';
import Book from './Book';
import BookContent from './BookContent';
import ScoreBook from './ScoreBook';

const Book1 = createStackNavigator({

  HomeScreen: { screen: HomeScreen },
  Book: { screen: Book },
  BookContent: { screen: BookContent },
  ScoreBook: { screen: ScoreBook },


});

const App = createAppContainer(Book1);


export default App; 