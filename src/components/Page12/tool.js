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
            pan: new Animated.ValueXY(),
            opacity: new Animated.Value(5)
        };
    }

    componentDidMount(){
      this.setState({showTool: (this.props.selectedTool != 0)})
    }
    componentWillReceiveProps(nextProps){
      this.setState({showTool: (nextProps.selectedTool != 0)})
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
              onPanResponderMove: (e, gesture) => {
                return panMover(e, gesture);
              },
              onPanResponderRelease: (e, gesture) => {
                if (this.isDropZone1(gesture)) {
                //alert('its in dropzone!')
                this.props.dikCitCakilabilir(1)
                }
                else if (this.isDropZone2(gesture)) {
                  //alert('its in dropzone!')
                    // Animated.timing(this.state.opacity, {
                    //   toValue: 0,
                    //   duration: 1000
                    // }).start(() =>{
                    //   this.setState({
                    //     showTool: false,
                    //   })
                    // });
                    this.props.dikCitCakilabilir(2)
                  } 
                else{
                  this.props.dikCitCakilabilir(0)
                //   Animated.spring(            
                //     this.state.pan,         
                //     {toValue:{x:0,y:0}} 
                // ).start(() =>{
                //   this.setState({
                //     showTool: true,
                //   })
                // });
        
                } 
              }
            })
    }

    isDropZone1(gesture){  
        var dz1 = this.props.dropAreaValues1;
        //alert("px:" + gesture.moveX + "\npy:" + gesture.moveY)
        return ((gesture.moveY > dz1.py && gesture.moveY < dz1.py + dz1.height) && (gesture.moveX > dz1.px && gesture.moveX < dz1.px + dz1.width))
      }
      isDropZone2(gesture){  
        var dz1 = this.props.dropAreaValues2;
        //alert("px:" + gesture.moveX + "\npy:" + gesture.moveY)
        return ((gesture.moveY > dz1.py && gesture.moveY < dz1.py + dz1.height) && (gesture.moveX > dz1.px && gesture.moveX < dz1.px + dz1.width))
      }
    render() {
        
        const panStyle = {
            transform: this.state.pan.getTranslateTransform()
          }
          if (this.props.showTool) {
            return (
              <View style={styles.TabureStyle}>
                 <Animated.Image style={[panStyle, styles['Tabure'], {opacity:this.state.opacity}]}
                  {...this.panResponder.panHandlers} 
                  source={toolImages[this.props.selectedTool]}>
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

