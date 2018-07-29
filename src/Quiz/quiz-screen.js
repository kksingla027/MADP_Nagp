import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

export class QuizScreen extends React.Component{






    _questions = [
        {"question":"what is your name","options":["opt1","opt2","opt3","opt4"], "answer":"opt1"}
        ,{"question":"what is your age","options":["10","11","12","13"], "answer":"11"}
        ,{"question":"what is your department","options":["ECE","EEE","CSE","IT"], "answer":"IT"}
    ]

    _keyExtractor = (item, index) => item;

    constructor(props){
        super(props)
        this.state={
            questions: [
                {"question":"what is your name","options":[{key:"opt1"},{key:"opt2"},{key:"opt3"},{key:"opt4"}], "answer":"opt1"}
                ,{"question":"what is your age","options":[{key:"10"},{key:"11"},{key:"12"},{key:"13"}], "answer":"11"}
                ,{"question":"what is your department","options":[{key:"ECE"},{key:"EEE"},{key:"CSE"},{key:"IT"}], "answer":"IT"}
            ],
            index: 0,
            completed:false
        }
    }

    

    handleSubmit() {
        if (this.state.index + 1 < this.state.questions.length) {
          this.setState({'index': this.state.index + 1})
        } else {
          this.setState({'completed': true})
        //   let score = this.state.score || 0
        //   this.state.answers.map((answer, i) => (
        //     score = score + this.state.quiz.questions[i].answers[answer].point
        //   ))
        //   this.setState({'score': score})
        }
      }

    render(){
        
        return(
            <View>
                <View>
                    <Text>Quiz Screen</Text>
                </View>

                <View>
                    <Text>Question {this.state.index + 1} of {this.state.questions.length}:</Text>
                    <Text>{this.state.questions[this.state.index].question}</Text>
        <FlatList
              data={this.state.questions[this.state.index].options}
              renderItem={({item})=>(<Text>{item.key}</Text>)}
            //   keyExtractor={this._keyExtractor}
            //   onPressItem={this._onPressOption}
              scrollEnabled={true}
              />
                </View>
            </View>
        );
    }
}