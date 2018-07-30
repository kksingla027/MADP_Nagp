// import React from 'react';
// import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
// export class Question extends React.Component{
//   constructor(props){
//       super(props)
//   }  
//    render(){
//     return (
//       <View>
//         <Text>{this.props.question}</Text>
//         <FlatList
//               data={this.props.question.options}
//               renderItem={(item)=>{<Text>item</Text>}}
//             //   keyExtractor={this._keyExtractor}
//             //   onPressItem={this._onPressOption}
//               scrollEnabled={true}
//               />

        
//         <Button title="Submit" onClick={this.props.onSubmit} />
//       </View>
//     )
//   }
// }
  

//   /* <ol type="a">
//         {question.options.map((answer, i) =>
//           <li key={`${index}-${i}`}>
//             <input type="radio" name={`question_${index}`} id={`question_${index}_answer_${i}`} defaultChecked={false} value={i} onChange={onAnswerSelected} />
//             {' '}
//             <label htmlFor={`question_${index}_answer_${i}`}>{answer.label}</label>
//           </li>
//         )}
//         </ol> */

//     //     question,
//     // index,
//     // onAnswerSelected,
//     // onSubmit