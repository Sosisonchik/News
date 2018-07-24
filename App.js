import React from 'react';
import { StyleSheet,ActivityIndicator, Text, View, FlatList, TouchableOpacity, Image, Platform, ImageBackground } from 'react-native';
import DetailModal from './Component/DetailModal';
import MainBackground from './assets/img/main_background.jpg';
import Item from './Component/Item';

const URL = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8c3de14eec094331945faa6fffc5b345";
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      visible: false,
      title: "",
      text: "",
      url: "",
      animating: false,
      listVisible: false,
      listHeight: '0%'
    }

  }
  componentWillMount() {
    this.getData();
  }

  getData = async () => {
    this.setState({
      animating: true
    });

    let result = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8c3de14eec094331945faa6fffc5b345");
    let json = await result.json();

    this.setState({
      data: json.articles,
      animating: false,
      listVisible: true,
      listHeight: '100%'
    });
  };

  renderItem = ({ item, index }) => {
    return (
     <Item
     title={item.title}
     text={item.description}
     img={item.urlToImage}
     click={() => {this.onItemClick(index)}}
      />
    );
  }

  onItemClick = (index) => {
    this.setState({
      visible: true,
      title: this.state.data[index].title,
      text: this.state.data[index].description,
      url: this.state.data[index].urlToImage
    })
  }

  render() {
    return (
      <View style={{width: '100%', flex: 1}}>
        <ImageBackground
          style={styles.container}
          source={MainBackground}
        >
        <ActivityIndicator
        style={styles.loading}
          size="large"
          color="#009CC5"
          animating={this.state.animating}
         />
        <FlatList 
        visible={this.state.listVisible}
        height={this.state.listHeight}
        style={{ margin: Platform.OS === 'ios'? 15 : 0, width: '100%' }}
        data={this.state.data}
        keyExtractor={(x,i) => i.toString()}
        renderItem={this.renderItem}
        onMomentumScrollBegin={() => this.getData()}/>


        <DetailModal
          visible={this.state.visible}
          title={this.state.title}
          text={this.state.text}
          url={this.state.url}
          click={() => this.setState({visible: false})}
        />

        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
