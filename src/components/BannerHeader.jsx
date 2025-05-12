import {Dimensions, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import news_banner_data from '../news_banner_data.json';

const BannerHeader = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {news_banner_data.map(bannerNews => (
        <Image
          key={bannerNews.id}
          style={style.banner_image}
          source={{uri: bannerNews.imageUrl}}
        />
      ))}
    </ScrollView>
  );
};

export default BannerHeader;

const style = StyleSheet.create({
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
    margin: 5,
  },
});
