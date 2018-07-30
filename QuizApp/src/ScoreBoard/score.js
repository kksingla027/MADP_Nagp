
import React from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';
export class ScoreScreen extends React.Component{

    static navigationOptions = {
        title: 'Score Board',
      };
constructor(props){
super(props);
this.feedbackSubmitted = this.props.navigation.getParam('isFeedbackSubmitted', false);
         this.score = this.props.navigation.getParam('scoreValue', 0);

         console.log("fedback: " + this.feedbackSubmitted)
         console.log("score: "+this.score)
}

    render(){
        

         if(this.feedbackSubmitted)
         {
            return(
                <View>
<Text>Thanks for the feebdack.</Text>
<Text>Your total score is: {this.score}</Text>
                </View>
                
            );
         } else{
            return(
                <View>
<Text>Your total score is: {this.score}</Text>
                </View>
                
            );
         }
        
    }
}