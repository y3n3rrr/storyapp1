/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


import Page1 from './src/components/Page1'
import Page2 from './src/components/Page2'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      pageNum:1
    }
  }

  nextPage= () => {
    let num = this.state.pageNum+1;
    this.setState({
      pageNum: num
    })
  }

  prevPage= () => {
    let num = this.state.pageNum-1;
    this.setState({
      pageNum: num
    })
  }

  render() {
    
    switch(this.state.pageNum){
      case 1:
      return <View style={styles.container}>
        <Page1 nextPage={this.nextPage} />
       </View>
      
      break;
      case 2:
      return <View style={styles.container}>
      <Page2 nextPage={this.nextPage} prevPage={this.prevPage}/>
     </View>
      break;
      default:
      return <View style={styles.container}rr>
        <Text>404 Not Found!!!</Text>
      </View>
      break;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
