import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: height * 0.2,
    backgroundColor: '#3EB489',
  },
  inner_container: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 360,
    marginEnd: 8,
    marginBottom: 32,
    marginStart: 16,
  },
  text_container: {
    flex: 1,
    marginBottom: 32,
  },
  header_text: {
    color: 'white',
    fontSize: 20,
  },
  header_description: {
    color: 'white',
  },
  booking_detail: {
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
    backgroundColor: 'white',
    marginTop: -10,
    padding: 16,
  },
  booking_detail_title: {
    fontSize: 24,
    color: 'black',
  },
  label: {
    marginTop: 16,
    fontSize: 16,
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});
