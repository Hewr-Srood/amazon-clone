import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    color: 'black',
  },
  price: {fontSize: 18, fontWeight: 'bold', marginRight: 10},
  oldPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    fontWeight: 'normal',
  },
  description: {
    marginVertical: 10,
    lineHeight: 20,
  },
});
export default styles;
