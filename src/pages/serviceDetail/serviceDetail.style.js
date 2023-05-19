import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    padding: 16,
  },
  inner_container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: height * 0.3,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  service_info_container: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
  },
  service_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  service_title: {
    fontSize: 20,
    color: 'black',
  },
  stylist_name: {
    fontSize: 16,
    marginTop: 16,
  },
  stylist_availability: {
    fontSize: 16,
    marginTop: 16,
  },
  service_desc_container: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    marginTop: 16,
    borderRadius: 16,
  },
  service_desc: {
    color: 'black',
  },
  book_button: {
    backgroundColor: '#2e6fb4',
    padding: 8,
    alignItems: 'center',
    borderRadius: 10,
  },
  book_button_text: {
    color: 'white',
  },
});
