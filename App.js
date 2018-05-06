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


import HomePage from './src/components/HomePage'
import Page1 from './src/components/Page1'
import Page2 from './src/components/Page2'
import Page3 from './src/components/Page3'
import Page4 from './src/components/Page4'
import Page5 from './src/components/Page5'
import Page6 from './src/components/Page6'
import Page7 from './src/components/Page7'
import Page8 from './src/components/Page8'
import Page9 from './src/components/Page9'
import Page10 from './src/components/Page10'
import Page11 from './src/components/Page11'
import Page12 from './src/components/Page12'
import Page13 from './src/components/Page13'
import Page14 from './src/components/Page14'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      pageNum:12
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
      case 0:
      return <View style={styles.container}>
        <HomePage banaOku={this.nextPage} />
       </View>
      break;
      case 1:
      return <View style={styles.container}>
        <Page1 nextPage={this.nextPage} />
       </View>
      break;
      case 2:
      return <Page2 nextPage={this.nextPage} prevPage={this.prevPage}/>
      break;
      case 3:
      return <View style={styles.container}>
      <Page3 nextPage={this.nextPage} prevPage={this.prevPage}/>
     </View>
      break;
      case 4:
      return <View style={styles.container}>
      <Page4 nextPage={this.nextPage} prevPage={this.prevPage}/>
     </View>
      break;
      case 5:
      return <View style={styles.container}>
      <Page5 nextPage={this.nextPage} prevPage={this.prevPage}/>
     </View>
      break;
      case 6:
      return <View style={styles.container}>
      <Page6 nextPage={this.nextPage} prevPage={this.prevPage}/>
     </View>
      break;
      case 7:
      return <View style={styles.container}>
      <Page7 nextPage={this.nextPage} prevPage={this.prevPage}/>
     </View>
      break;
      case 8:
      return <View style={styles.container}>
      <Page8 nextPage={this.nextPage} prevPage={this.prevPage}/>
     </View>
      break;
      case 9:
      return <View style={styles.container}>
      <Page9 nextPage={this.nextPage} prevPage={this.prevPage}/>
     </View>
      break;
      case 10:
      return <View style={styles.container}>
      <Page10 nextPage={this.nextPage} prevPage={this.prevPage}/>
     </View>
      break;
      case 11:
      return <View style={styles.container}>
      <Page11 nextPage={this.nextPage} prevPage={this.prevPage}/>
     </View>
      break;
      case 12:
      return <View style={styles.container}>
      <Page12 nextPage={this.nextPage} prevPage={this.prevPage}/>
     </View>
      break;
      case 13:
      return <View style={styles.container}>
      <Page13 nextPage={this.nextPage} prevPage={this.prevPage}/>
     </View>
      break;
      case 14:
      return <View style={styles.container}>
      <Page14 nextPage={this.nextPage} prevPage={this.prevPage}/>
     </View>
      break;
      default:
      return <View style={styles.container}rr>
        <Text>404 Not Found!!</Text>
      </View>
      break;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
