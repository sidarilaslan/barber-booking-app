import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  fullName: {
    fontSize: 24,
    color: 'black',
  },
  phoneNumber: {
    marginTop: 8,
    marginBottom: 24,
  },
  card_settings: {
    borderWidth: 0.4,
    borderColor: 'black',
    width: '100%',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    backgroundColor: "#e8e8e8"
  },
  text_settings: {
    alignSelf: 'center',
  },
});
