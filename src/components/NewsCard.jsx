import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const NewsCard = ({news}) => {
  return (
    <View style={style.container}>
      <Image
        style={style.image}
        source={{uri: news.imageUrl}}
        resizeMode="cover"
      />
      <View style={style.inner_container}>
        <Text style={style.title}>{news.title}</Text>
        <Text style={style.description}>{news.description}</Text>
        <Text style={style.author}>{news.author}</Text>
      </View>
    </View>
  );
};

export default NewsCard;

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    marginTop: 3,
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
  inner_container: {
    padding: 5,
  },
});
