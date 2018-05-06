import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity,TouchableHighlight, Button, Image, Animated, Dimensions } from 'react-native'

class Page2 extends Component {
    constructor(props) {
        super(props)
        this.state={
            moveAnim: new Animated.ValueXY(),
            pofuImage:require('../../assets/2sayfa/ikinciSayfa_resim/new_pofu.png'),
            showImage:true,
            showPoguDongu:false
        }
    }
    onPressLearnMore = () => {
          this.setState({
            pofuImage: require('../../assets/2sayfa/ikinciSayfa_resim/new_PofuZiplama.gif')
          });
          Animated.timing(this.state.moveAnim, {
            toValue: {x:50, y:-40},
            duration: 2000
          }).start(() =>{
            this.setState({
                pofuImage: require('../../assets/2sayfa/ikinciSayfa_resim/new_PofuZiplama.gif')
              });
          })
//
          setTimeout(()=>{
            this.setState({
                pofuImage: require('../../assets/2sayfa/ikinciSayfa_resim/pofu_ziplama_dongu.gif'),
                showPoguDongu:true
              });
              Animated.timing(this.state.moveAnim, {
                toValue: {x: 275, y:-250},
                duration: 4000
              }).start(() =>{
                this.setState({
                    showImage: false
                  });
              })
          }
              , 4000)
        
    }
    componentDidMount(){
        this.onPressLearnMore();
    }
    render() {
       
        return (
            <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/2sayfa/ikinciSayfa.png')}>
                <View style={{ margin:11}}>
                <TouchableOpacity onPress={() => this.onPressLearnMore()}>
                <Image
                        source={require('../../assets/1sayfa/1sayfa_resim/home.png')}
                    />
                </TouchableOpacity>
                </View>{
                    this.state.showImage && <Animated.Image 
                    resizeMethod="scale"
                    resizeMode="cover"
                    source={this.state.pofuImage}
                    style={{
                        alignItems: 'center',
                        bottom:10,
                        justifyContent: 'flex-end',
                        position:'absolute',
                        width:60,
                        opacity: this.state.showPoguDongu ? 0 : 100,
                        height:90,
                        marginLeft : Dimensions.get('window').width/2 - 21,
                        transform: [{
                            translateX: this.state.moveAnim.x
                         }, {
                            translateY: this.state.moveAnim.y
                         }]
                    }}
                    ></Animated.Image>
                }
                {
                    this.state.showImage && <Animated.Image 
                    resizeMethod="scale"
                    resizeMode="cover"
                    source={require('../../assets/2sayfa/ikinciSayfa_resim/pofu_ziplama_dongu.gif')}
                    style={{
                        alignItems: 'center',
                        bottom:10,
                        justifyContent: 'flex-end',
                        position:'absolute',
                        width:60,
                        opacity: !this.state.showPoguDongu ? 0 :100,
                        height:90,
                        marginLeft : Dimensions.get('window').width/2 - 21,
                        transform: [{
                            translateX: this.state.moveAnim.x
                         }, {
                            translateY: this.state.moveAnim.y
                         }]
                    }}
                    ></Animated.Image>
                }
                <View style={styles.buttonContainer}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={this.props.prevPage}><Image
                            source={require('../../assets/1sayfa/1sayfa_resim/geri.png')}
                        /></TouchableOpacity>
                    </View>
                 
                    <View style={{ flex: 0, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={this.props.nextPage}>
                        <Image 
                            source={require('../../assets/1sayfa/1sayfa_resim/ileri.png')}
                        /></TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
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
    pofuStyles:{
        alignItems: 'center',
        bottom:10,
        justifyContent: 'flex-end',
        position:'absolute',
        marginLeft : Dimensions.get('window').width/2 - 21
    }
})

//make this component available to the app
export default Page2;
