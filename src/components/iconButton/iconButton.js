import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconButton = props => {
  return (
    <TouchableWithoutFeedback onPress={props.onClick}>
      <Icon name={props.name} size={30} color="black" />
    </TouchableWithoutFeedback>
  );
};

export default IconButton;
