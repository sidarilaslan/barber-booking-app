import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    backgroundColor: '#368fc9',
    width: '100%',
    height: Dimensions.get('window').height * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner_container: {
    flex: 1,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  stylist_name: {
    marginTop: 8,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  stylist_label: {
    color: 'white',
  },
  service_name: {
    alignSelf: 'center',
    marginTop: 16,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  date_picker: {
    width: Dimensions.get('window').width,
  },
  choose_datetime_label: {
    alignSelf: 'center',
    marginTop: 16,
  },
  request_input: {
    margin: 16,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    backgroundColor: '#f1f1f1',
  },
  request_input_focused: {
    backgroundColor: '#cccccc',
  },
  request_input_unfocused: {
    backgroundColor: '#f1f1f1',
  },
});
