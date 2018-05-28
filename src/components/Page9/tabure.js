import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TouchableHighlight, Button, Image,
    PanResponder, 
    Alert,
    BackHandler, Animated, Dimensions } from 'react-native'
import Sound from 'react-native-sound';

export class locationInfo {
    width;
    height;
    fx;
    fy;
    px;
    py;
  }

class Tabure extends Component {
    constructor(props) {
        super(props)
        
        this.state={
            showBg2:false,
            showTabureDuzgun:false,
            dropAreaValues: new locationInfo,
            pan: new Animated.ValueXY(),
            opacity: new Animated.Value(5),
            ImageURL: this.props.ImageURL,
            ImageURLKarli: this.props.ImageURLKarli,
            ImageURLDuzgun: this.props.ImageURLDuzgun
        };
    }

    componentWillMount(){
        let panMover = Animated.event([ null, { dx: this.state.pan.x, dy: this.state.pan.y } ])
        this._val = { x:0, y:0 }
        this.state.pan.addListener((value) => this._val = value);
        
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      
              onPanResponderGrant: (e, gesture) => {
                this.state.pan.setOffset({
                  x: this._val.x,
                  y:this._val.y
                })
                this.state.pan.setValue({ x:0, y:0 })
              },
              onPanResponderStart:(e, gesture)=>{
                let dzgn = this.state.ImageURLDuzgun
                this.setState({ImageURL:dzgn})
              },
              onPanResponderEnd:(e, gesture)=>{
                let karli = this.state.ImageURLKarli
                  this.setState({ImageURL:karli})
              },
              onPanResponderMove: (e, gesture) => {
                return panMover(e, gesture);
              },
              onPanResponderRelease: (e, gesture) => {
            var dz1 = this.state.dropAreaValues;
                if (this.isDropZone(gesture)) {
                //alert('its in dropzone!')
                  Animated.timing(this.state.opacity, {
                    toValue: 0,
                    duration: 1000
                  }).start(() =>{
                    this.props.showTabureDuzgun();
                    this.setState({
                      showDraggable: true,
                    })
                  });
                }
                else{
                  let karli = this.state.ImageURLKarli
                    //alert('its NOT in dropzone!')
                    this.setState({ImageURL:karli})
                  Animated.spring(            
                    this.state.pan,         
                    {toValue:{x:0,y:0}} 
                ).start(() =>{
                });
        
                } 
              }
            })
    }

    isDropZone(gesture){  
        var dz1 = this.props.dropAreaValues;
        //alert("px:" + gesture.moveX + "\npy:" + gesture.moveY)
        return ((gesture.moveY > dz1.py && gesture.moveY < dz1.py + dz1.height) && (gesture.moveX > dz1.px && gesture.moveX < dz1.px + dz1.width))
      }
    render() {
        
        const panStyle = {
            transform: this.state.pan.getTranslateTransform()
          }
          if (this.props.showDraggable) {
            return (
              <View style={styles.TabureStyle}>
              <Animated.Image style={[panStyle, styles[''], {opacity:this.state.opacity}]}
                  {...this.panResponder.panHandlers} 
                  source={this.state.ImageURL}>
              </Animated.Image>
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
    },
    Tabure: {
        width:55,
        height:55
    },
})

//make this component available to the app
export default Tabure;

