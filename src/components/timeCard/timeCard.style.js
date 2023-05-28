import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 0.3,
    alignSelf: 'baseline',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderColor: 'black',
    margin: 4,
  },
  container_selected: {
    backgroundColor: '#2e6fb4',
    borderColor: '#2e6fb4',
  },
  text_unselected: {
    color: 'black',
  },
  text_selected: {
    color: 'white',
  },
});
