import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TouchableHighlight, Button, Image,
    PanResponder, 
    Alert,
    BackHandler, Animated, Dimensions } from 'react-native'
import Sound from 'react-native-sound';

  const toolImages = {
    1: require('../../assets/12SayfaResim/sahne2/aletler/makas.png'),
    2: require('../../assets/12SayfaResim/sahne2/aletler/cekic_ilk.png'),
    3:require('../../assets/12SayfaResim/sahne2/aletler/rulo.png'),
  }; 

class Tool extends Component {
    constructor(props) {
        super(props)
        this.state={
          showTool:this.props.showTool,
        };
    }

    componentDidMount(){
      this.setState({showTool: (this.props.selectedTool != 0)})
    }
    componentWillReceiveProps(nextProps){
      this.setState({showTool: (nextProps.selectedTool != 0)})
    }

   
    render() {
        
          if (this.props.showTool) {
            return (
              <View style={styles.TabureStyle}>
                <Image source={toolImages[this.props.selectedTool]} />
              </View>
            );
          }  else{
            return (<View></View>)
        }
    }
}


const styles = StyleSheet.create({
    TabureStyle: {
        position:"relative",
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1111
    },
    Tabure: {
        width:60,
        height:90,
        zIndex: 1111
    },
})

//make this component available to the app
export default Tool;

