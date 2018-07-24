import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default class Item extends Component {
    render() {
        return (
        <View>
            <TouchableOpacity 
            style={styles.card}
            onPress={this.props.click}
            >
                <View>
                <Text style={styles.title}>{this.props.title}</Text>
                />
                <View>{this.checkImage(this.props.img)}</View>
                <Text style={styles.text}>{this.props.text}</Text>
                </View>
        </TouchableOpacity>
      </View>
        );
    }

    checkImage = (url) => {
        if (url != null) {
          return <Image style={{height: 150}} source={{uri: url}} />
        }
      }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#4DACC5',
        margin: 10,
        borderWidth: 2,
        borderColor: '#4DACC5',
        borderRadius: 10
    },
    title: {
        color: '#fff',
        fontSize: 21,
        fontWeight: 'bold',
        margin: 5,
      },
      text: {
        color: '#fff',
        fontSize: 17,
        margin: 5,
      },
})
