import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import styles from './customButton.style';

const CustomButton = props => {
  return (
    <TouchableHighlight
      style={styles.button}
      underlayColor="#61A1E5FF"
      onPress={props.onClick}>
      <Text style={styles.button_text}>{props.buttonText}</Text>
    </TouchableHighlight>
  );
};

export default CustomButton;
