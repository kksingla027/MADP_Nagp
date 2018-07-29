import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createStackNavigator} from 'react-navigation';

import {LoginScreen, QuizScreen, ScoreScreen, FeedbackScreen} from './src';


class HomeScreen extends React.Component{{}
  static navigationOptions = {
    title: 'Home',
  };
  render(){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Button title="Login" onPress={()=>this.props.navigation.navigate('Login')}/>
        <Button title="Start Quiz" onPress={()=>this.props.navigation.navigate('Quiz')}/>
      </View>
      
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button title="Back" onPress={()=>this.props.navigation.goBack()} />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home:{
      screen: HomeScreen
    },
    Details:{
      screen: DetailsScreen
    },
    Login: {
      screen: LoginScreen
    },
    Quiz:{
      screen: QuizScreen
    },
    Feedback:{
      screen:FeedbackScreen
    },
    Score:{
      screen: ScoreScreen
    }


  },{
    initialRouteName : 'Home'
  }
);

export default class App extends React.Component{
  render(){
    return <RootStack/>
  }
}

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
