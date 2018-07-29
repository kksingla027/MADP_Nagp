
import React from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';
export class FeedbackScreen extends React.Component{

    static navigationOptions = {
        title: 'Feedback',
      };

    constructor(props){
        super(props)
        this.score = this.props.navigation.getParam('TotalScore', 0);
        // feedbackSubmitted = false;
    }

    _handleSubmitFeedback(){
        this.feedbackSubmitted = true;

        console.log(this.feedbackSubmitted);
        
        // let score = this.props.navigation.getParam('TotalScore', 0);
        // console.log(score);
        this.props.navigation.navigate('Score',{
            isFeedbackSubmitted: this.feedbackSubmitted,
            scoreValue:this.score
        });
    }

    _handleSubmitViewScore(){
        this.feedbackSubmitted = false;
        // let score = this.props.navigation.getParam('TotalScore', 0);
        this.props.navigation.navigate('Score',{
            isFeedbackSubmitted: this.feedbackSubmitted,
            scoreValue: this.score
        });
    }

    render(){
        
        return(
            <View>
            <View>
                <Text>Thank you for taking the Quiz. Please provide your valuable feedback.</Text>

                <TextInput
        // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {40}
      />

      <Button title="Submit Feedback" onPress={this._handleSubmitFeedback.bind(this)}/>
      <Button title="Skip and See your Score directly" onPress={this._handleSubmitViewScore.bind(this)}/>
      {/* <Button title="Submit" onPress={this._onSubmitPress.bind(this)}/> */}
            </View>

            
            
            </View>

        );
    }
}

