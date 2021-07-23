import React, {FC, useState} from 'react';
import {Text, ScrollView} from 'react-native';
import styles from './styles';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker';
import QuantitySelecotr from '../../components/QantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen: FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [quantity, setQuantity] = useState(1);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      {/* image carousel */}
      <ImageCarousel images={product.images} />
      {/* option selector */}
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={itemValue => setSelectedLanguage(itemValue)}>
        {product.options.map(
          (option: string, i: number): JSX.Element => (
            <Picker.Item key={i} label={option} value={option} />
          ),
        )}
      </Picker>
      {/* price */}
      <Text style={styles.price}>
        from {product.price}
        <Text style={styles.oldPrice}> {product.oldPrice}</Text>
      </Text>
      {/* desc */}
      <Text style={styles.description}>{product.description}</Text>
      {/* quantity selector */}
      <QuantitySelecotr quantity={quantity} setQuantity={setQuantity} />
      {/* btns */}
      <Button
        title="Add To Cart"
        onPress={() => {
          console.log('hey');
        }}
      />
      <Button
        title="Buy Now"
        onPress={() => {
          console.log('hey');
        }}
      />
    </ScrollView>
  );
};

export default ProductScreen;
