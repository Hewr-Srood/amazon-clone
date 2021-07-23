import React, {FC, useState, useCallback} from 'react';
import {FlatList, Image, Dimensions, View} from 'react-native';
import styles from './styles';
interface ImageCarouselProps {
  images: string[];
}
interface renderImageProps {
  item: string;
}
const renderImage: FC<renderImageProps> = ({item}) => {
  return <Image style={styles.image} source={{uri: item}} />;
};

const ImageCarousel: FC<ImageCarouselProps> = ({images}) => {
  // we used callback beacuse if we you normal function the onViewableItemsChanged will be assigned multiple times and it'll give error
  const onFlatListChange = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveImageIndex(viewableItems[0].index || 0);
    }
  }, []);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  return (
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').width - 20}
        snapToAlignment="center"
        decelerationRate={'fast'}
        data={images}
        renderItem={renderImage}
        keyExtractor={(_: string, i: number) => i.toString()}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatListChange}
      />
      <View style={styles.dots}>
        {images.map((_: string, i: number) => (
          <View
            key={i}
            style={[styles.dot, i === activeImageIndex ? styles.activeDot : {}]}
          />
        ))}
      </View>
    </>
  );
};

export default ImageCarousel;
