import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white',
  },
  inner_container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: height * 0.3,
  },
  service_info_container: {
    backgroundColor: '#f4f4f4',
    padding: 16,
    borderBottomStartRadius: 24,
    borderBottomEndRadius: 24,
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
    marginStart: 8,
    color: 'black',
  },
  username_view: {
    flexDirection: 'row',
    marginTop: 16,
  },
  stylist_availability: {
    fontSize: 16,
    marginStart: 8,
    color: 'black',
  },
  availability_view: {
    flexDirection: 'row',
    marginTop: 16,
  },
  service_desc_container: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
  },
  service_desc_label: {
    marginStart: 16,
    marginTop: 16,
    fontSize: 24,
    color: 'black',
  },
  service_desc: {
    color: 'black',
    fontSize: 16,
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
  duration_and_money_view: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 16,
  },
  duration_view: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    alignSelf: 'baseline',
    marginHorizontal: 4,
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 24,
  },
  text_price: {
    color: 'black',
    fontSize: 18,
  },
  duration_price: {
    color: 'black',
    fontSize: 18,
  },
  point: {
    marginStart: 4,
    fontSize: 16,
    color: 'black',
  },
});
