import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TouchableHighlight, Button, Image, Animated, Dimensions } from 'react-native'
import Sound from 'react-native-sound';

class Page2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            moveAnim: new Animated.ValueXY(),
            pofuImage: require('../../assets/2sayfa/ikinciSayfa_resim/new_pofu.png'),
            showImage: true,
            showPoguDongu: false,

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

        this.pageAudio = new Sound('sayfa2.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            } else {
                this.pageAudio.play(); // have to put the call to play() in the onload callback
            }
        });
    }
    componentWillUnmount() {
        this.pageAudio.stop()
    }
    onPressLearnMore = () => {
        this.setState({
            pofuImage: require('../../assets/2sayfa/ikinciSayfa_resim/new_PofuZiplama.gif')
        });
        Animated.timing(this.state.moveAnim, {
            toValue: { x: 50, y: -40 },
            duration: 2000
        }).start(() => {
            this.setState({
                pofuImage: require('../../assets/2sayfa/ikinciSayfa_resim/new_PofuZiplama.gif')
            });
        })
        //
        setTimeout(() => {
            this.setState({
                pofuImage: require('../../assets/2sayfa/ikinciSayfa_resim/pofu_ziplama_dongu.gif'),
                showPoguDongu: true
            });
            Animated.timing(this.state.moveAnim, {
                toValue: { x: 275, y: -250 },
                duration: 4000
            }).start(() => {
                this.setState({
                    showImage: false
                });
            })
        }
            , 15000)

    }
    componentDidMount() {
        this.onPressLearnMore();
    }
    onPressTree = (e) => {
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
            <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/2sayfa/ikinciSayfa.png')}>
                <View style={{ margin: 11 }}>
                    <TouchableOpacity onPress={() => this.onPressLearnMore()}>
                        <Image
                            source={require('../../assets/1sayfa/1sayfa_resim/home.png')}
                        />
                    </TouchableOpacity>
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

                        <View style={{ top: 50, top: Dimensions.get('window').height / 4 }} >
                            <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => this.onPressTree(5)}>
                                <Image style={!this.state.agacTamResim3 ? { height: 0 } : {}} source={require('../../assets/2sayfa/ikinciSayfa_resim/agac_Karli_ilk.png')} />
                            </TouchableHighlight>
                                <Image style={!this.state.agacTamGif3 ? { height: 0 } : {}} source={require('../../assets/2sayfa/ikinciSayfa_resim/agacAni.gif')} />
                            <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => this.onPressTree(6)}>
                                <Image style={!this.state.agacYarimResim3 ? { height: 0 } : {}} source={require('../../assets/2sayfa/ikinciSayfa_resim/yariAgac.png')} />
                            </TouchableHighlight>
                                <Image style={!this.state.agacYarimGif3 ? { height: 0 } : {}} source={require('../../assets/2sayfa/ikinciSayfa_resim/yariAgacAni.gif')} />
                                <Image style={!this.state.agacKarsiz3 ? { height: 0 } : {}} source={require('../../assets/2sayfa/ikinciSayfa_resim/agac_kariDokulmus_ikinci.png')} />
                        </View>
                    </View>
                </View>{
                    this.state.showImage && <Animated.Image
                        resizeMethod="scale"
                        resizeMode="cover"
                        source={this.state.pofuImage}
                        style={{
                            alignItems: 'center',
                            bottom: 10,
                            justifyContent: 'flex-end',
                            position: 'absolute',
                            width: 60,
                            opacity: this.state.showPoguDongu ? 0 : 100,
                            height: 90,
                            marginLeft: Dimensions.get('window').width / 2 - 21,
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
                            bottom: 10,
                            justifyContent: 'flex-end',
                            position: 'absolute',
                            width: 60,
                            opacity: !this.state.showPoguDongu ? 0 : 100,
                            height: 90,
                            marginLeft: Dimensions.get('window').width / 2 - 21,
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
    pofuStyles: {
        alignItems: 'center',
        bottom: 10,
        justifyContent: 'flex-end',
        position: 'absolute',
        marginLeft: Dimensions.get('window').width / 2 - 21
    }
})

//make this component available to the app
export default Page2;
