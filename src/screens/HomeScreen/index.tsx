import React, {FC} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ProductItem from '../../components/ProductItems';
import products from '../../data/products';

const renderProducts = ({item}) => (
  <ProductItem
    image={item.image}
    title={item.title}
    rating={item.avgRating}
    price={item.price}
    oldPrice={item.oldPrice}
  />
);
const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={renderProducts}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
