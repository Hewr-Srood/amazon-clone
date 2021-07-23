import React, {FC, Dispatch} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
interface QuantitySelecotrProps {
  quantity: number;
  setQuantity: Dispatch<number>;
}
const QuantitySelecotr: FC<QuantitySelecotrProps> = ({
  quantity,
  setQuantity,
}) => {
  const onMinus = (): void => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const onPlus = (): void => {
    setQuantity(quantity + 1);
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn} onPress={onMinus}>
        <Text>-</Text>
      </Pressable>
      <Text>{quantity}</Text>
      <Pressable style={styles.btn} onPress={onPlus}>
        <Text>+</Text>
      </Pressable>
    </View>
  );
};

export default QuantitySelecotr;
