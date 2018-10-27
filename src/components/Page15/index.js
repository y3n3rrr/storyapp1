import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TouchableHighlight, Button, Image, Animated, Dimensions } from 'react-native'
import CantaModal from './CantaModal';
import Tool from './tool';
import Sound from 'react-native-sound';
import Footer from '../Components/Footer';

class Page15 extends Component {
    constructor(props) {
        super(props)
    
        this.citAudio = new Sound('fire_audio.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            } 
            this.windAudio = new Sound('wind_audio.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    console.log('failed to load the sound', error);
                } 
            });
        });
    
        this.state = {
            currentSahne:1,
            showTool:true,
            showSahne4:false,
            showYapistiriciGif:false,
            showFooterText:false,
            modalVisible: false,
            selectedTool:0,
            showKucukParca:true,
            showKucukparcaGif:false,
            showBuyukParca:true,
            showBuyukparcaGif:false,


            showBuyukSahne3Yapiskanli:false,
            showBuyukSahne3BuyukParca:true,
            showKucukSahne3Yapiskanli:false,
            showKucukSahne3BuyukParca:true,
            showCantaGif:false,
            sahne3Step2:false,

            sahne3YapistiriciActive:false,
            buyukparcaYapiskanHided:false,
            kucukparcaYapiskanHided:false,


        };

        this._mounted= true;
        this.pageAudio = new Sound('sayfa15_1_pofu.mp3', Sound.MAIN_BUNDLE, (error) => { this.pageAudio.play();});
        this.pageAudio2 = new Sound('sayfa15_2_saksiparcalaribul.mp3', Sound.MAIN_BUNDLE, (error) => {});
        this.pageAudio3 = new Sound('sayfa15_3_pofu_hadi.mp3', Sound.MAIN_BUNDLE, (error) => {});
        this.pageAudio4 = new Sound('sayfa15_4_takimcanta.mp3', Sound.MAIN_BUNDLE, (error) => {});
        this.pageAudio5 = new Sound('sayfa15_5_aracsecimi.mp3', Sound.MAIN_BUNDLE, (error) => {});
        this.pageAudio6 = new Sound('sayfa15_6_yapistirma.mp3', Sound.MAIN_BUNDLE, (error) => {});
        this.pageAudio7 = new Sound('sayfa15_7_evegidis.mp3', Sound.MAIN_BUNDLE, (error) => {});
        this.yanlisSound = new Sound('yanlis.mp3', Sound.MAIN_BUNDLE, (error) => {});
        setTimeout(()=>{
            if(this._mounted)
            this.pageAudio2.play();
        },7000)
    }

    goToHomePage = () => {
        this.props.setPageNum(0)
    }

    componentWillUnmount(){
        this._mounted=false;
        this.pageAudio.release();
        this.pageAudio2.release();
        this.pageAudio3.release();
        this.pageAudio4.release();
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({showBuyukparcaGif:true, showBuyukSahne3BuyukParca:false})
            this.setState({showKucukparcaGif:true, showKucukSahne3BuyukParca:false})
        }, 4000)
    }
    
    helpActionForOpencanta = () => {
        setTimeout(()=>{
            this.setState({showCantaGif:true})
        }, 4000)
    }

    onPressParca = (event, type) => {
        if(event == 'kucuk')
            this.setState({showKucukParca: false}, () =>{
                if(!this.state.showKucukParca && !this.state.showBuyukParca){
                    this.pageAudio.stop();
                    this.pageAudio2.stop();
                    this.pageAudio3.play();
                    setTimeout(()=>{
                        this.pageAudio2.stop();
                        this.pageAudio3.stop();
                        this.pageAudio4.play();
                    },2000)
                    this.setState({ showFooterText: true })
                    this.helpActionForOpencanta()
                }
                    
            })
        else
            this.setState({showBuyukParca: false}, () =>{
                if(!this.state.showKucukParca && !this.state.showBuyukParca){
                    this.pageAudio.stop();
                    this.pageAudio2.stop();
                    this.pageAudio3.play();
                    setTimeout(()=>{
                        this.pageAudio2.stop();
                        this.pageAudio3.stop();
                        this.pageAudio4.play();
                    },2000)
                    this.setState({ showFooterText: true })
                    this.helpActionForOpencanta()
                }
                    
            })
    }
    onPressParcaSahne3 = (event) => {
        if(!this.state.sahne3YapistiriciActive)
        return;
        if(event == 'kucuk'){
            if(this.state.showKucukSahne3Yapiskanli){
                this.setState({showKucukSahne3Yapiskanli: false, kucukkparcaYapiskanHided:true}, ()=>{this.checkTaslak3Ready()})
                return;
            }

            if(this.state.showBuyukSahne3BuyukParca)
                this.setState({showKucukSahne3Yapiskanli: true, showKucukSahne3BuyukParca: false})
            else
                this.setState({showKucukSahne3Yapiskanli: true, showKucukparcaGif: false})
        }
        else
        {
            if(this.state.showBuyukSahne3Yapiskanli)
            {
                this.setState({showBuyukSahne3Yapiskanli: false, buyukparcaYapiskanHided:true}, ()=>{this.checkTaslak3Ready()})
                
                return;
            }
            this.setState({ showBuyukSahne3BuyukParca: false, showBuyukparcaGif: false, showBuyukSahne3Yapiskanli:true})
        }
    }

    checkTaslak3Ready(){
        if((!this.state.showBuyukSahne3Yapiskanli && !this.state.showKucukSahne3Yapiskanli) &&(this.state.buyukparcaYapiskanHided && this.state.kucukkparcaYapiskanHided)){
            this.setState({ currentSahne: 3})
        }
    }
    setSelectedTool=(tool)=>{
        if(tool != 6){
            this.yanlisSound.play();
            this.setState({showYapistiriciGif:true})
        }else{
            this.setState({selectedTool:tool, currentSahne:2, showYapistiriciGif:false},()=>{
                this.pageAudio5.stop()
                this.pageAudio6.play()
            })
            this.setModalVisible(false)
            setTimeout(()=>{
                this.setState({sahne3Step2:true, showBuyukParca:true, showKucukParca:true, showBuyukSahne3BuyukParca:true,showKucukSahne3BuyukParca:true, showKucukparcaGif:false, showBuyukparcaGif:false})
                setTimeout(()=>{
                    this.setState({showBuyukSahne3BuyukParca:false, showBuyukparcaGif:true, showKucukSahne3BuyukParca:false, showKucukparcaGif:true})
                }, 2000)
            }, 2000)
        }
    }
            
    setModalVisible(visible) {
        this._mounted = false
        this.pageAudio.stop();
        this.pageAudio2.stop();
        this.setState({modalVisible: visible});
        if(visible){
            this.pageAudio4.stop()
            this.pageAudio5.play()
        }
        setTimeout(()=>{ this.setState({showYapistiriciGif:true})},4000)

    }
    
    
    onPressYapistirici=()=>{
        this.setState({sahne3YapistiriciActive: true,showYapistiriciGif:false})
    }
        
       
    render() {
        if(this.state.currentSahne == 1){
            return (
                <View style={styles.container} >
                    <ImageBackground style={ styles.container}  imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/15SayfaResim/sahne1/15sayfa_taslak_sahne1.png')}>
                    <View style={{ margin:10}}>
                        <TouchableOpacity onPress={() => this.goToHomePage()}>
                            <Image source={require('../../assets/1sayfa/1sayfa_resim/home.png')} />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.parcaBuyuk}>
                    { this.state.showBuyukParca && <TouchableOpacity onPress={()=>this.onPressParca('buyuk')}>
                            <Image style={ this.state.showBuyukparcaGif ? { height: 0} : {}}   source={require('../../assets/15SayfaResim/sahne1/saksi_buyukParca_ilk.png')} />
                            <Image style={ !this.state.showBuyukparcaGif ? { height: 0} : {}}   source={require('../../assets/15SayfaResim/sahne1/saksi_buyukParca.gif')} />
                        </TouchableOpacity>}
                        
                    </View>
                    <View style={styles.parcaKucuk}>

                    { this.state.showKucukParca && <TouchableOpacity onPress={()=>this.onPressParca('kucuk')}>
                            <Image style={ this.state.showKucukparcaGif ? { height: 0} : {}}   source={require('../../assets/15SayfaResim/sahne1/saksi_kucukParca_ilk.png')} />
                            <Image style={ !this.state.showKucukparcaGif ? { height: 0} : {}}   source={require('../../assets/15SayfaResim/sahne1/saksi_kucukParca.gif')} />
                        </TouchableOpacity>}
                        
                    </View>
                    <View style={styles.cantaStyle}>
                        <TouchableOpacity onPress={()=>this.setModalVisible(true)}>
                            <Image style={ this.state.showCantaGif ? { height: 0} : {}} source={require('../../assets/15SayfaResim/sahne1/canta_ilk.png')} />
                            <Image style={ !this.state.showCantaGif ? { height: 0} : {}} source={require('../../assets/15SayfaResim/sahne1/canta.gif')} />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.cantaStyle}>
                        <Image style={ this.state.showFooterText ? { height: 0} : {}} source={require('../../assets/15SayfaResim/sahne1/sahne1_metin1.png')} />
                        <Image style={ !this.state.showFooterText ? { height: 0} : {}} source={require('../../assets/15SayfaResim/sahne1/sahne1_metin2.png')} />
                    </View>
                    <CantaModal showYapistiriciGif={this.state.showYapistiriciGif} setSelectedTool={this.setSelectedTool} setModalVisible={this.setModalVisible.bind(this)} modalVisible={this.state.modalVisible} />
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
        else if(this.state.currentSahne == 2){
            if(!this.state.sahne3Step2){
                return (<View style={styles.container} >
                    <ImageBackground style={ styles.container}  imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/15SayfaResim/sahne3/15sayfa_sahne3_ilk.png')}>
                   </ImageBackground>
               </View>)
            }else{
                return (
                    <View style={styles.container} >
                         <ImageBackground style={ styles.container}  imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/15SayfaResim/sahne3/15sayfa_sahne3_taslak1.png')}>
                        <View style={{ margin:10}}>
                            <TouchableOpacity onPress={() => this.goToHomePage()}>
                                <Image source={require('../../assets/1sayfa/1sayfa_resim/home.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex:2}}>
                        </View> 
                        <View style={styles.parcaBuyuk}>
                    { this.state.showBuyukParca && <TouchableOpacity onPress={()=>this.onPressParcaSahne3('buyuk')}>
                            <Image style={ this.state.showBuyukSahne3BuyukParca ? {} : {height: 0}}   source={require('../../assets/15SayfaResim/sahne1/saksi_buyukParca_ilk.png')} />
                            <Image style={ !this.state.showBuyukSahne3Yapiskanli ? { height: 0} : {}}   source={require('../../assets/15SayfaResim/sahne3/saksi_buyuk_yapiskanli.png')} />
                            <Image style={ !this.state.showBuyukparcaGif ? { height: 0} : {}}   source={require('../../assets/15SayfaResim/sahne1/saksi_buyukParca.gif')} />
                        </TouchableOpacity>}
                    </View>
                   <TouchableOpacity style={{alignItems:'flex-end', marginRight:100}} onPress={()=>this.onPressYapistirici()}>
                            <Image style={ this.state.showYapistiriciGif ? { height: 0} : {}}   source={require('../../assets/15SayfaResim/sahne3/yapistirici_ilk.png')} />
                            <Image style={ !this.state.showYapistiriciGif ? { height: 0} : {}}   source={require('../../assets/15SayfaResim/sahne3/yapistirici.gif')} />
                        </TouchableOpacity>
                        <View style={styles.parcaKucuk}>

                    { this.state.showKucukParca && <TouchableOpacity onPress={()=>this.onPressParcaSahne3('kucuk')}>
                            <Image style={ this.state.showKucukSahne3BuyukParca ? {} : {height: 0}}   source={require('../../assets/15SayfaResim/sahne1/saksi_kucukParca_ilk.png')} />
                            <Image style={ !this.state.showKucukSahne3Yapiskanli ? { height: 0} : {}}   source={require('../../assets/15SayfaResim/sahne3/saksi_kucuk_yapiskanli.png')} />
                            <Image style={ !this.state.showKucukparcaGif ? { height: 0} : {}}   source={require('../../assets/15SayfaResim/sahne1/saksi_kucukParca.gif')} />
                        </TouchableOpacity>}
                    </View>
                    <Footer Score = {this.props.Score} setPageNum={this.props.setPageNum} currentPage={this.props.currentPage} />
                    </ImageBackground>
                    </View>
                )
            }
            
        }else{
            return (
            <View style={styles.container} >
            <ImageBackground style={ styles.container}  imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/15SayfaResim/sahne4/15sayfa_son_taslak.png')}>
            <View style={{ margin:10}}>
                <TouchableOpacity onPress={() => this.goToHomePage()}>
                    <Image source={require('../../assets/1sayfa/1sayfa_resim/home.png')} />
                </TouchableOpacity>
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
        </View>)
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
    cantaStyle: {
        flex:2, 
        alignItems:'center',
        marginRight:Dimensions.get('window').width / 4,
    },
    parcaBuyuk:{
        flex:1, 
        alignItems:'center',
        top:60,
        left:100
    },
    parcaKucuk:{
        flex:2, 
        alignItems:'center',
        top:30
    }
})

//make this component available to the app
export default Page15;

