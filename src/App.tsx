import React from 'react';
import {SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';
import BannerHeader from './components/BannerHeader';
import NewsCard from './components/NewsCard';

import news_data from './news_data.json';

function App() {
  const renderNews = ({item}: {item: any}) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={BannerHeader}
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
  },
});

export default App;
