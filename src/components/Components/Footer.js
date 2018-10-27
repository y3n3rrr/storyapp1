import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Button, Image } from 'react-native'
import Cuzdan from './Helpers'

export default class Footer extends Component {
    constructor(props) {
        super(props)
    }

  render() {
    return (
        <View style={styles.buttonContainer}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <TouchableOpacity onPress={()=>this.props.setPageNum(this.props.currentPage-1)}>
                    { this.props.currentPage > 1 && <Image source={require('../../assets/1sayfa/1sayfa_resim/geri.png')}/> }
                </TouchableOpacity> 
                </View>
                <View style={{ flex: 0, paddingRight:20, flexDirection: 'row' }}>
                    <Image source={Cuzdan.cuzdanImages[this.props.Score]} />
                </View>
                <View style={{ flex: 0, flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => this.props.setPageNum(this.props.currentPage+1)}>
                    <Image source={require('../../assets/1sayfa/1sayfa_resim/ileri.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    puanText:{
        position: 'absolute',
        zIndex:1010
    },
    buttonContainer: {
        position: 'absolute',
        left: 10,
        right: 10,
        bottom: 10,
        flexDirection: 'row'
    }
})

