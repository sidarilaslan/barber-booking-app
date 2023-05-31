import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  button: {
    width: Dimensions.get('window').width * 0.75,
    marginBottom: 10,
  },
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  }
});
