import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    width: '100%',
    height: Dimensions.get('window').height * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  stylist_name: {
    color: 'black',
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 24,
  },
  stylist_label: {},
  stylist_availability: {
    fontSize: 16,
    marginStart: 8,
    color: 'black',
    flexDirection: 'row',
  },

  phone_number_container: {
    marginStart: 8,
    marginTop: 8,
    flexDirection: 'row',
  },
  phone_number: {
    fontSize: 16,
    marginStart: 8,
    color: 'black',
  },
  biography_container: {
    backgroundColor: '#e8e8e8',
    padding: 8,
    margin: 8,
    borderRadius: 8,
  },
  biography: {
    color: 'black',
  },
  about_label: {
    marginStart: 8,
    marginTop: 8,
    color: 'black',
  },
  point: {
    marginStart: 4,
    fontSize: 16,
    color: 'black',
  },
  rating_container: {
    flexDirection: 'row',
    marginTop: 4,
  },
});
