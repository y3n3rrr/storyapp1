import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity,TouchableHighlight, Button, Image, Animated, Dimensions } from 'react-native'
import Sound from 'react-native-sound';
import Footer from '../Components/Footer';

class Page5 extends Component {
    constructor(props) {
        super(props)
        this.state={
            isDoorOpen:true,
            agacTamResim: true,
            agacTamGif: false,
            agacYarimResim: false,
            agacYarimGif: false,
            agacKarsiz: false,

            agacTamResim2: true,
            agacTamGif2: false,
            agacYarimResim2: false,
            agacYarimGif2: false,
            agacKarsiz2: false,

            agacTamResim3: true,
            agacTamGif3: false,
            agacYarimResim3: false,
            agacYarimGif3: false,
            agacKarsiz3: false,
        }
        this.pageAudio = new Sound('sayfa5.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            } else {
                this.pageAudio.play(); // have to put the call to play() in the onload callback
            }
        });
        this.hisirtiAudio = new Sound('hisirti.mp3', Sound.MAIN_BUNDLE, (error) => {});
    }
    
    componentWillUnmount(){
        this.pageAudio.release()
    }

    goToHomePage = () => {
        this.props.setPageNum(0)
    }
    onPressDoor = ()=>{
        let doorState = this.state.isDoorOpen
        this.setState({
            isDoorOpen: !doorState
        })
    }

    onPressTree = (e) => {
        this.hisirtiAudio.play();
        switch (e) {
            case 1:
            this.setState({ agacTamResim: false, agacTamGif:true });
            setTimeout(()=>{ this.setState({ agacTamGif: false, agacYarimResim:true }); }, 3000)
            break;
            case 2:
            this.setState({ agacYarimResim: false, agacYarimGif:true });
            setTimeout(()=>{ this.setState({ agacYarimGif: false, agacKarsiz:true }); }, 3000)
            break;
            case 3:
            this.setState({ agacTamResim2: false, agacTamGif2:true });
            setTimeout(()=>{ this.setState({ agacTamGif2: false, agacYarimResim2:true }); }, 3000)
            break;
            case 4:
            this.setState({ agacYarimResim2: false, agacYarimGif2:true });
            setTimeout(()=>{ this.setState({ agacYarimGif2: false, agacKarsiz2:true }); }, 3000)
            break;
            case 5:
            this.setState({ agacTamResim3: false, agacTamGif3:true });
            setTimeout(()=>{ this.setState({ agacTamGif3: false, agacYarimResim3:true }); }, 3000)
            break;
            case 6:
            this.setState({ agacYarimResim3: false, agacYarimGif3:true });
            setTimeout(()=>{ this.setState({ agacYarimGif3: false, agacKarsiz3:true }); }, 3000)
            break;
        }
    }
    render() {
       
        return (
            <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/5sayfa/5sayfa_taslak.png')}>
                <View style={{ margin:10}}>
                    <TouchableOpacity onPress={() => this.goToHomePage()}>
                        <Image source={require('../../assets/1sayfa/1sayfa_resim/home.png')} />
                    </TouchableOpacity>
                </View>
                
                <View style={{ marginBottom:180, marginLeft:210, justifyContent: 'center',flex:3}}>
               
                <View style={{ paddingTop: 100, justifyContent: 'space-between', paddingRight: 50, flexDirection: 'row' }}>
                        <View>
                            <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => this.onPressTree(1)}>
                                <Image style={!this.state.agacTamResim ? { height: 0 } : {}} source={require('../../assets/2sayfa/ikinciSayfa_resim/agac_Karli_ilk.png')} />
                            </TouchableHighlight>

                                <Image style={!this.state.agacTamGif ? { height: 0 } : {}} source={require('../../assets/2sayfa/ikinciSayfa_resim/agacAni.gif')} />
                            
                            <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => this.onPressTree(2)}>
                                <Image style={!this.state.agacYarimResim ? { height: 0 } : {}} source={require('../../assets/2sayfa/ikinciSayfa_resim/yariAgac.png')} />
                            </TouchableHighlight>
                                <Image style={!this.state.agacYarimGif ? { height: 0 } : {}} source={require('../../assets/2sayfa/ikinciSayfa_resim/yariAgacAni.gif')} />
                                <Image style={!this.state.agacKarsiz ? { height: 0 } : {}} source={require('../../assets/2sayfa/ikinciSayfa_resim/agac_kariDokulmus_ikinci.png')} />
                        </View>

                        <View style={{ right: 100, top: 10 }}>
                            <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => this.onPressTree(3)}>
                                <Image style={!this.state.agacTamResim2 ? { height: 0 } : {}} source={require('../../assets/2sayfa/ikinciSayfa_resim/agac_Karli_ilk.png')} />
                            </TouchableHighlight>
                                <Image style={!this.state.agacTamGif2 ? { height: 0 } : {}} source={require('../../assets/2sayfa/ikinciSayfa_resim/agacAni.gif')} />
                            <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => this.onPressTree(4)}>
                                <Image style={!this.state.agacYarimResim2 ? { height: 0 } : {}} source={require('../../assets/2sayfa/ikinciSayfa_resim/yariAgac.png')} />
                            </TouchableHighlight>
                                <Image style={!this.state.agacYarimGif2 ? { height: 0 } : {}} source={require('../../assets/2sayfa/ikinciSayfa_resim/yariAgacAni.gif')} />
                                <Image style={!this.state.agacKarsiz2 ? { height: 0 } : {}} source={require('../../assets/2sayfa/ikinciSayfa_resim/agac_kariDokulmus_ikinci.png')} />
                        </View>

                        
                    </View>
                </View>

                <Footer Score = {this.props.Score} setPageNum={this.props.setPageNum} currentPage={this.props.currentPage} />
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
        bottom:80,
        paddingRight:30,
        justifyContent: 'flex-end',
        position:'absolute',
        marginLeft : Dimensions.get('window').width/2 - 20
    },
    door: {
        position:'absolute'
    }
})

//make this component available to the app
export default Page5;
