import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { RadioButton, RadioGroup } from 'react-native-flexi-radio-button';

export class QuizScreen extends React.Component{


    static navigationOptions = {
        title: 'Quiz',
      };



    _questions = [
        {id:1,"question":"NAGP related to which company","options":[{id:1,key:"TCS", point:0},{id:2,key:"Infosys",point:0},{id:3,key:"Nagarro",point:1},{id:4,key:"Accenture",point:0}], "answer":"opt1"}
        ,{id:2,"question":"Who are coordinating NAGP program","options":[{id:5,key:"Anju",point:1},{id:6,key:"Meena",point:0},{id:7,key:"Teena",point:0},{id:8,key:"Reena",point:0}], "answer":"11"}
        ,{id:3,"question":"what is your department","options":[{id:9,key:"ECE",point:0},{id:10,key:"EEE",point:0},{id:11,key:"CSE",point:1},{id:12,key:"IT",point:0}], "answer":"IT"}
    ]

    _keyExtractor = (item, index) => item;

    constructor(props){
        super(props)
        this.state={
            questions: this._questions,
            index: 0,
            completed:false,
            score: new Array(this._questions.length),
            answers:new Array(this._questions.length),
            selectedBtnId:0
        }
    }

    _onNextPress(){
        this.setState({'index': this.state.index + 1});
    }

    _onPreviousPress(){
        
        this.setState({'index': this.state.index - 1});
    }

    _onPressOption(item) {
        console.log(item);
    }

    
    _onSubmitPress() {
        
          this.setState({'completed': true})
          let sum = 0;
          this.state.score.forEach(item => {
              sum+=item;
          });
          console.log(sum);
          this.props.navigation.navigate('Feedback', {
            TotalScore:sum
          });
        //   let score = this.state.score || 0
        //   this.state.answers.map((answer, i) => (
        //     score = score + this.state.quiz.questions[i].answers[answer].point
        //   ))
        //   this.setState({'score': score})
        
      }

      _chooseOption({item}) {
        this.state.questions[this.state.index].options.forEach(opt => {
            if(opt.id!= item.id)
            opt.isSelected = false;
        });

          this.state.score[this.state.index] = item.point;
          this.state.answers[this.state.index] = item;
          this.setState({'answers':this.state.answers});
          this.setState({'score':this.state.score});
          this.setState({'selectedBtnId':item.id});
          console.log(item.point);

          
      };

      _renderOptions = ({item}) => (
        
        
        <Button color={item.isSelected ? 'green': 'blue'}
        
        // style={item.isSelected ? styles.selected : styles.notSelected} 
        title={item.key} onPress={()=>{ 
            item.isSelected = true;

            this._chooseOption({item})
        }} >
      </Button>
      
        
      );

    //   _renderHeader = ({item})=>(
    // //     <RadioGroup
    // //     onSelect = {(index, value) => this.onSelect(index, value)}
    // //   >
    //   );
    //   renderFooter = ()=>(
    //     // </RadioGroup>
    //   );

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
            //   ListHeaderComponent={this._renderHeader}
            //   ListFooterComponent={this.renderFooter}
              renderItem={this._renderOptions}
            //   keyExtractor={this._keyExtractor}
              onPressItem={()=>this._onPressOption()}
              scrollEnabled={true}
              />
           

              <Button title="Next" onPress={this._onNextPress.bind(this)} disabled={this.state.index == this.state.questions.length - 1}/>
              <Button title="Previous" onPress={this._onPreviousPress.bind(this)} disabled={this.state.index == 0} />
              <Button title="Submit" onPress={this._onSubmitPress.bind(this)}/>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    button: {
        borderColor: '#000066',
        borderWidth: 1,
        borderRadius: 10,
        color:'blue'
      },
      selected: {
        borderColor: '#000066',
        backgroundColor: '#000066',
        borderWidth: 1,
        borderRadius: 10,
        color:'green'
      },
});