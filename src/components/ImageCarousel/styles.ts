import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height * 0.4,
    resizeMode: 'contain',
    margin: 10,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    marginHorizontal: 5,
    borderRadius: 500,
    borderWidth: 1,
    borderColor: 'grey',
  },
  activeDot: {
    backgroundColor: 'lightgrey',
  },
});
export default styles;
