import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 100,
  },
  info_container: {
    flexDirection: 'column',
    flex: 1,
    marginStart: 8,
    justifyContent: 'space-between',
  },
  service_name: {
    color: '#000000',
    fontSize: 16,
  },
  price_button: {
    backgroundColor: '#2e6fb4',
    alignSelf: 'center',
  },
});
