import React, { Component } from 'react'
import { Modal, Text, View, ImageBackground, StyleSheet, TouchableOpacity, TouchableHighlight, Button, Image,
    PanResponder, 
    Alert,
    BackHandler, Animated, Dimensions } from 'react-native'

  
var screen = Dimensions.get('window')

class CantaModal extends Component{
        constructor(props) {
            super(props)
        }
    render() {
        return (
            <Modal transparent={true}
            visible={this.props.modalVisible}
            onRequestClose={this.closeModal}>
  <View style={{
               flex: 1,
               flexDirection: 'column',
               
                backgroundColor:"#00000080",
               justifyContent: 'center',
               alignItems: 'center'}}>
               <View style={{
                 width: screen.width/2,
                 height: 500,backgroundColor: '#fff', padding: 20}}>
                 <View style={styles.ToolsContainer}>
                    <TouchableOpacity onPress={()=>this.props.setSelectedTool(1)}>
                        <Image source={require('../../assets/12SayfaResim/sahne2/aletler/makas.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.setSelectedTool(2)}>
                        <Image style={ this.props.showCekicGif ? { height: 0} : {}}  source={require('../../assets/12SayfaResim/sahne2/aletler/cekic_ilk.png')}/>
                        <Image style={ !this.props.showCekicGif ? { opacity: 0} : {}} source={require('../../assets/12SayfaResim/sahne2/aletler/cekic.gif')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.setSelectedTool(3)}>
                        <Image source={require('../../assets/12SayfaResim/sahne2/aletler/rulo.png')}/>
                    </TouchableOpacity>
               </View>
               <View style={styles.ToolsContainer2}>
                    <TouchableOpacity onPress={()=>this.props.setSelectedTool(4)}>
                        <Image source={require('../../assets/12SayfaResim/sahne2/aletler/torna.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.setSelectedTool(5)}>
                        <Image source={require('../../assets/12SayfaResim/sahne2/aletler/pense.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.setSelectedTool(6)}>
                        <Image style={{marginRight:10}} source={require('../../assets/12SayfaResim/sahne2/aletler/yapistirici.png')}/>
                    </TouchableOpacity>
               </View>
                <TouchableOpacity onPress={()=> this.props.setModalVisible(false)}> 
                </TouchableOpacity>
         </View>

       </View>
     </Modal>
        )
    }
}
const styles = StyleSheet.create({
   
    ModalStyle:{
        backgroundColor:'#aaa',
        height:250,
        width:150,
        justifyContent:'center',
        backgroundColor:'transparent',

        alignItems:'center'
    },

    ToolsContainer:{
        height:200,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    ToolsContainer2:{
        height:200,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})
//make this component available to the app
export default CantaModal;

