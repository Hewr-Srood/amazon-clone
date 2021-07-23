import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
interface ButtonProps {
  title: string;
  onPress: () => void;
  containerStyles?: object;
}
const Button: FC<ButtonProps> = ({title, onPress, containerStyles}) => {
  return (
    <TouchableOpacity style={[styles.btn, containerStyles]} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
