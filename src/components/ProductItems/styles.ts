import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    height: Dimensions.get('screen').height * 0.18,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: Dimensions.get('screen').height * 0.18,
    height: Dimensions.get('screen').height * 0.18,
    resizeMode: 'contain',
  },
  textContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  star: {
    margin: 1,
  },
  price: {fontSize: 18, fontWeight: 'bold', marginRight: 10},
  oldPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    fontWeight: 'normal',
  },
});
export default styles;
