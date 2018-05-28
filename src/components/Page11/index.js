import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TouchableHighlight, Button, Image,
    PanResponder, 
    Alert,
    BackHandler, Animated, Dimensions } from 'react-native'
import Sound from 'react-native-sound';

import Modal from "react-native-modal";
export class locationInfo {
    width;
    height;
    fx;
    fy;
    px;
    py;
  }

class Page11 extends Component {
    constructor(props) {
        super(props)

        this.state={
            showDraggable: true,
            dropAreaValues: new locationInfo,
            pan: new Animated.ValueXY(),
            opacity: new Animated.Value(5),
            tabureSagImageUrl:require('../../assets/11SayfaResim/tabure_tek.png')
        };
    }
    onPressLearnMore = () => {
    }
    // componentWillUpdate(nextProps, nextState){
       
    // }

    componentDidMount(){
    }

    setDropZoneValues(event){
        this.refs.mycomponent.measure( (fx, fy, width, height, px, py) => {
        //   alert('Component width is: ' + width +
        //   '\nComponent height is: ' + height +
        //   '\nX offset to frame: ' + fx +
        //   '\nY offset to frame: ' + fy +
        //   '\nX offset to page: ' + px +
        //   'Y offset to page: ' + py)
          this.setState({
            dropAreaValues : {width, height,fx,fy,px,py}
          });
    
      })
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
              onPanResponderStart:(e, gesture)=>{
                this.setState({tabureSagImageUrl:require('../../assets/11SayfaResim/tabure_duzgun.png')})
              },
              onPanResponderEnd:(e, gesture)=>{
                  this.setState({tabureSagImageUrl:require('../../assets/11SayfaResim/tabure_tek.png')})
              },
              onPanResponderRelease: (e, gesture) => {
            var dz1 = this.state.dropAreaValues;
                if (this.isDropZone(gesture)) {
                  Animated.timing(this.state.opacity, {
                    toValue: 0,
                    duration: 1000
                  }).start(() =>{
                    
                    this.setState({
                      showDraggable: false
                    })
                  });
                }
                else{
                    this.setState({tabureSagImageUrl:require('../../assets/11SayfaResim/tabure_tek.png')})
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
        var dz1 = this.state.dropAreaValues;
        //alert("px:" + gesture.moveX + "\npy:" + gesture.moveY)
        return ((gesture.moveY > dz1.py && gesture.moveY < dz1.py + dz1.height) && (gesture.moveX > dz1.px && gesture.moveX < dz1.px + dz1.width))
      }

    render() {
        
        return (
            <View style={styles.container} >
                <ImageBackground style={ styles.container}  imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/11SayfaResim/11sayfa_taslak.png')}>
                <View style={{ margin:10}}>
                    <TouchableOpacity onPress={() => this.onPressLearnMore()}>
                        <Image source={require('../../assets/1sayfa/1sayfa_resim/home.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{position: 'absolute', top: 200, left: 80, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'flex-start'}}>
                    {this.renderDraggable()}
                </View>

                <View style={styles.trashcontainer} >
                <View style={styles.trash} onLayout={(e)=>this.setDropZoneValues(e)} ref="mycomponent">
                    <Image style={this.state.showDraggable ? {height:0} : {}} source={require('../../assets/11SayfaResim/tabure_duzgun.png')} />
                 </View>
                 </View>
                 <View style={styles.buttonContainer}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={this.props.prevPage}>
                            <Image source={require('../../assets/1sayfa/1sayfa_resim/geri.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={this.props.nextPage}>
                            <Image source={require('../../assets/1sayfa/1sayfa_resim/ileri.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                </ImageBackground>
            </View>
            
        )
    }

    renderDraggable() {

        const panStyle = {
          transform: this.state.pan.getTranslateTransform()
        }
        if (this.state.showDraggable) {
          return (
            <View style={styles.TabureStyle}>
            <Animated.Image ref="refTabure" style={[panStyle, styles[this.props.Name], {opacity:this.state.opacity}]}
                {...this.panResponder.panHandlers} 
                source={this.state.tabureSagImageUrl}>
            </Animated.Image>
            
            </View>
          );
        }
      }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    buttonContainer: {
        position: 'absolute',
        left: 10,
        right: 10,
        bottom: 10,
        flexDirection: 'row'
    },
    trashcontainer:{
        flex: 1,
      
        justifyContent:'center',
        alignItems:'center',
        bottom:0,
        top:Dimensions.get('window').height/3,
        right:0,
        left:Dimensions.get('window').width/3-50
      },
    TabureStyle: {
        position:"relative",
        justifyContent: 'center',
        alignItems: 'center',
    },
    Tabure: {
        width:55,
        height:55
    },
    trash: {
        width: 75,
        height: 75,
        left:10,
        bottom:10
    }
})

//make this component available to the app
export default Page11;

