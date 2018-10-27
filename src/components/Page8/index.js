import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TouchableHighlight, Button, Image, Animated, Dimensions } from 'react-native'
import Sound from 'react-native-sound';
import Footer from '../Components/Footer';

class Page8 extends Component {
    constructor(props) {
        super(props)

        this.state={
            citUrl:require('../../assets/8sayfa/cit-ilk.png'),
            masaUrl:require('../../assets/8sayfa/masa-ilk.png'),
            saksiUrl:require('../../assets/8sayfa/saksi-ilk.png'),
        };
        this.pageAudio = new Sound('sayfa8.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            } else {
                this.pageAudio.play(); // have to put the call to play() in the onload callback
            }
        });
    }
    componentWillUnmount(){
        this.pageAudio.release()
    }

    goToHomePage = () => {
        this.props.setPageNum(0)
    }
    
    onPressCit = () => {
        this.setState({
            citUrl:require('../../assets/8sayfa/cit.gif')
        });
        setTimeout(()=>{
            this.setState({
                citUrl:require('../../assets/8sayfa/cit-ilk.png')
            });
        },2000)
    }
    onPressMasa = () => {
        this.setState({
            masaUrl:require('../../assets/8sayfa/masa.gif')
        });
        setTimeout(()=>{
            this.setState({
                masaUrl:require('../../assets/8sayfa/masa-ilk.png')
            });
        },2000)
    }
    onPressSaksi = () => {
        this.setState({
            saksiUrl:require('../../assets/8sayfa/saksi.gif')
        });
        setTimeout(()=>{
            this.setState({
                saksiUrl:require('../../assets/8sayfa/saksi-ilk.png')
            });
        },2000)
    }
    render() {
        
        return (
            <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/8sayfa/8sayfa_Taslak.png')}>
                <View style={{ margin: 10 }}>
                    <TouchableOpacity onPress={() => this.goToHomePage()}>
                        <Image source={require('../../assets/1sayfa/1sayfa_resim/home.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 2, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around' }}>
                    <View style={styles.cit}>
                        <TouchableOpacity onPress={() => this.onPressCit()}>
                            <Image source={this.state.citUrl} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.masa}>
                        <TouchableOpacity onPress={() => this.onPressMasa()}>
                            <Image source={this.state.masaUrl} />
                        </TouchableOpacity>
                    </View>                   
                    <View style={styles.saksi}>
                        <TouchableOpacity onPress={() => this.onPressSaksi()}>
                            <Image source={this.state.saksiUrl} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.kosi}>
                        <TouchableOpacity>
                            <Image source={require('../../assets/8sayfa/kosi.png')} />
                        </TouchableOpacity>
                    </View>

                <View style={{ flex: 1 }}></View>
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
    pofuStyles: {
        alignItems: 'center',
        bottom: 80,
        paddingRight: 30,
        justifyContent: 'flex-end',
        position: 'absolute',
        marginLeft: Dimensions.get('window').width / 2 - 20
    },
    cit: {
        position: 'absolute',
        marginLeft: 400,
        top: -50,
        
    },
    masa: {
        top: 140,
        marginLeft: 40,
    },

    saksi: {
        top: 120,
    },
    kosi: {
        alignItems:'center',
        justifyContent:'center',
        top: 20,
    }
})

//make this component available to the app
export default Page8;

