import React, {Component} from 'react';
import {View, Text, Button, Modal, Image, Platform, ImageBackground, StyleSheet} from 'react-native';
import DetailBackground from '../assets/img/detail_background.jpg';

export default class DetailModal extends Component {
    constructor(props) {
        super(props);
    }

    checkImage = (url) => {
        if (url != null) {
          return <Image style={{height: 300}} source={{uri: url}} resizeMode="cover" />
        }
      }

    render() {
        return (
            <View>
                <Modal 
                animationType="slide"
                visible={this.props.visible}>
                    <ImageBackground 
                        style={{width: '100%', flex: 1}}
                        source={DetailBackground}>
                        <View style={{ margin: Platform.OS === 'ios'? 15 : 0 }} />
                        <Text style={styles.title}>{this.props.title}</Text>
                        <View>{this.checkImage(this.props.url)}</View>
                        <Text style={styles.text}>{this.props.text}</Text>
                        <Button 
                            title="Close"
                            titleStyle={{fontWeight: '750'}}
                            buttonStyle={{
                                backgroundColor: "#4DACC5",
                                borderColor: '#4DACC5',
                                borderWidth: 2,
                                borderRadius: 15
                            }}
                            onPress={this.props.click} />
                    </ImageBackground>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        margin: 5,
      },
      text: {
        color: '#fff',
        fontSize: 18,
        margin: 5,
      },
      button: {
          backgroundColor: "#4DACC5",
          borderColor: '#4DACC5',
          borderWidth: 2,
          borderRadius: 15
      }
})