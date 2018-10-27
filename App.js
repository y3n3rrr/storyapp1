/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
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
import Page15 from './src/components/Page15'
import Page16 from './src/components/Page16'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      currentPage:0,
      IsReadMe:true,
      Score:0
    }
  }
  setPageNum = (_pagenum) => {
    if(_pagenum  >= 0 && _pagenum <= 16){
      this.setState({ currentPage: _pagenum })
    }
  }

  setReadMe = (_isreadme) => {
    this.setState({ IsReadMe: _isreadme })
  }

  
  addScore = (_points) => {
    let cp = this.state.Score + _points;
    this.setState({ Score: cp })
  }


  render() {
    switch(this.state.currentPage){
      case 0:
      return <View style={styles.container}>
        <HomePage setPageNum ={this.setPageNum} setReadMe ={this.setReadMe} />
       </View>
      case 1:
      return <View style={styles.container}>
        <Page1 addScore={this.addScore} Score = {this.state.Score} {...this.state} setPageNum ={this.setPageNum} />
       </View>
      case 2:
      return <View style={styles.container}>
      <Page2 addScore = {this.addScore} Score = {this.state.Score} {...this.state} setPageNum ={this.setPageNum}/>
     </View>
      case 3:
      return <View style={styles.container}>
      <Page3 Score = {this.state.Score} {...this.state} setPageNum ={this.setPageNum} />
     </View>
      case 4:
      return <View style={styles.container}>
      <Page4 Score = {this.state.Score} currentPage = {this.state.pageNum} setPageNum ={this.setPageNum} />
     </View>
      break;
      case 5:
      return <View style={styles.container}>
      <Page5 Score = {this.state.Score} currentPage = {this.state.pageNum} setPageNum ={this.setPageNum} />
     </View>
      break;
      case 6:
      return <View style={styles.container}>
      <Page6 Score = {this.state.Score} currentPage = {this.state.pageNum} setPageNum ={this.setPageNum}/>
     </View>
      break;
      case 7:
      return <View style={styles.container}>
      <Page7 Score = {this.state.Score} currentPage = {this.state.pageNum} setPageNum ={this.setPageNum}/>
     </View>
      break;
      case 8:
      return <View style={styles.container}>
      <Page8 Score = {this.state.Score} currentPage = {this.state.pageNum} setPageNum ={this.setPageNum}/>
     </View>
      break;
      case 9:
      return <View style={styles.container}>
      <Page9 Score = {this.state.Score} currentPage = {this.state.pageNum} setPageNum ={this.setPageNum}/>
     </View>
      break;
      case 10:
      return <View style={styles.container}>
      <Page10 Score = {this.state.Score} currentPage = {this.state.pageNum} setPageNum ={this.setPageNum}/>
     </View>
      break;
      case 11:
      return <View style={styles.container}>
      <Page11 Score = {this.state.Score} currentPage = {this.state.pageNum} setPageNum ={this.setPageNum}/>
     </View>
      break;
      case 12:
      return <View style={styles.container}>
      <Page12 Score = {this.state.Score} currentPage = {this.state.pageNum} setPageNum ={this.setPageNum}/>
     </View>
      break;
      case 13:
      return <View style={styles.container}>
      <Page13 Score = {this.state.Score} currentPage = {this.state.pageNum} setPageNum ={this.setPageNum}/>
     </View>
      break;
      case 14:
      return <View style={styles.container}>
      <Page14 Score = {this.state.Score} currentPage = {this.state.pageNum} setPageNum ={this.setPageNum}/>
     </View>
      break;
      case 15:
      return <View style={styles.container}>
      <Page15 Score = {this.state.Score} currentPage = {this.state.pageNum} setPageNum ={this.setPageNum}/>
     </View>
      break;
      case 16:
      return <View style={styles.container}>
      <Page16 Score = {this.state.Score} currentPage = {this.state.pageNum} setPageNum ={this.setPageNum}/>
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
