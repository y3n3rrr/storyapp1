import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity,TouchableHighlight, Button, Image, Animated, Dimensions } from 'react-native'
import Sound from 'react-native-sound';

class Page2 extends Component {
    constructor(props) {
        super(props)
        this.state={
            moveAnim: new Animated.ValueXY(),
            pofuImage:require('../../assets/2sayfa/ikinciSayfa_resim/new_pofu.png'),
            showImage:true,
            showPoguDongu:false,
            agac_Karli_ilk:true,
            yariAgacAni:false,
            agac_kariDokulmus_ikinci:false,
            agac_kariTamDokulmus_ucuncu:false
        }

        this.pageAudio = new Sound('sayfa2.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            } else {
                this.pageAudio.play(); // have to put the call to play() in the onload callback
            }
        });
    }
    componentWillUnmount(){
        this.pageAudio.stop()
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
    clickTree = (e)=>{
        if(e==1){
            
        }
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
                <View style={{paddingTop:100, justifyContent:'space-between', paddingRight:50, flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>this.clickTree(1)}>
                        <Image style={ !this.state.agac_Karli_ilk ? { height: 0} : {}}  source={require('../../assets/2sayfa/ikinciSayfa_resim/agac_Karli_ilk.png')}/>
                        <Image style={ !this.state.yariAgacAni ? { height: 0} : {}}  source={require('../../assets/2sayfa/ikinciSayfa_resim/yariAgacAni.gif')}/>
                        <Image style={ !this.state.agac_kariDokulmus_ikinci ? { height: 0} : {}}  source={require('../../assets/2sayfa/ikinciSayfa_resim/agac_kariDokulmus_ikinci.png')}/>
                        <Image style={ !this.state.agac_kariTamDokulmus_ucuncu ? { height: 0} : {}}  source={require('../../assets/2sayfa/ikinciSayfa_resim/agac_kariTamDokulmus_ucuncu.png')}/>
                        
                </TouchableOpacity>
                <TouchableOpacity style={{right:100, top:10}} onPress={()=>this.clickTree(1)}>
                        <Image style={ !this.state.agac_Karli_ilk ? { height: 0} : {}}  source={require('../../assets/2sayfa/ikinciSayfa_resim/agac_Karli_ilk.png')}/>
                        <Image style={ !this.state.yariAgacAni ? { height: 0} : {}}  source={require('../../assets/2sayfa/ikinciSayfa_resim/yariAgacAni.gif')}/>
                        <Image style={ !this.state.agac_kariDokulmus_ikinci ? { height: 0} : {}}  source={require('../../assets/2sayfa/ikinciSayfa_resim/agac_kariDokulmus_ikinci.png')}/>
                        <Image style={ !this.state.agac_kariTamDokulmus_ucuncu ? { height: 0} : {}}  source={require('../../assets/2sayfa/ikinciSayfa_resim/agac_kariTamDokulmus_ucuncu.png')}/>
                        
                </TouchableOpacity>
                <TouchableOpacity style={{top:50, top:Dimensions.get('window').height/4}} onPress={()=>this.clickTree(1)}>
                        <Image style={ !this.state.agac_Karli_ilk ? { height: 0} : {}}  source={require('../../assets/2sayfa/ikinciSayfa_resim/agac_Karli_ilk.png')}/>
                        <Image style={ !this.state.yariAgacAni ? { height: 0} : {}}  source={require('../../assets/2sayfa/ikinciSayfa_resim/yariAgacAni.gif')}/>
                        <Image style={ !this.state.agac_kariDokulmus_ikinci ? { height: 0} : {}}  source={require('../../assets/2sayfa/ikinciSayfa_resim/agac_kariDokulmus_ikinci.png')}/>
                        <Image style={ !this.state.agac_kariTamDokulmus_ucuncu ? { height: 0} : {}}  source={require('../../assets/2sayfa/ikinciSayfa_resim/agac_kariTamDokulmus_ucuncu.png')}/>
                        
                </TouchableOpacity>
                </View>
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
