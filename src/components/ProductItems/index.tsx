import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
interface PrdocutItemProps {
  image: string;
  title: string;
  rating: number;
  price: number;
  oldPrice?: number;
}
const ProductItem: FC<PrdocutItemProps> = ({
  image,
  title,
  rating,
  price,
  oldPrice,
}) => {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={styles.textContainer}>
          <Text numberOfLines={3} style={styles.title}>
            {title}
          </Text>
          {/* rating */}
          <View style={styles.ratingContainer}>
            {Array(5)
              .fill(null)
              .map(
                (_: undefined, i: number): JSX.Element =>
                  Math.sign(rating - i) === 1 ? (
                    rating - i > 1 ? (
                      <Icon
                        key={i}
                        name="star"
                        style={styles.star}
                        size={18}
                        color="orange"
                      />
                    ) : (
                      <Icon
                        key={i}
                        name="star-half-full"
                        style={styles.star}
                        size={18}
                        color="orange"
                      />
                    )
                  ) : (
                    <Icon
                      key={i}
                      name="star-o"
                      style={styles.star}
                      size={18}
                      color="orange"
                    />
                  ),
              )}

            <Text>13,078</Text>
          </View>
          {/* price */}

          <Text style={styles.price}>
            from {price}
            <Text style={styles.oldPrice}> {oldPrice}</Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default ProductItem;
