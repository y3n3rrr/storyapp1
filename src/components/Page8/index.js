import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TouchableHighlight, Button, Image, Animated, Dimensions } from 'react-native'
import Sound from 'react-native-sound';


class Page8 extends Component {
    constructor(props) {
        super(props)

        this.state={
            citUrl:require('../../assets/8sayfa/cit-ilk.png'),
            masaUrl:require('../../assets/8sayfa/masa-ilk.png'),
            saksiUrl:require('../../assets/8sayfa/saksi-ilk.png'),
        };
    }
    onPressLearnMore = () => {
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
                    <TouchableOpacity onPress={() => this.onPressLearnMore()}>
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
                <View style={styles.buttonContainer}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={this.props.prevPage}>
                            <Image source={require('../../assets/1sayfa/1sayfa_resim/geri.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={this.props.nextPage}>
                            <Image source={require('../../assets/1sayfa/1sayfa_resim/ileri.png')} />
                        </TouchableOpacity>
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
