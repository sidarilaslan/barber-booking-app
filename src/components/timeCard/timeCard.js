import React, {useState} from 'react';
import {
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './timeCard.style';

const TimeCard = props => {
  const [selected, setSelected] = useState(false);
  const [styleState, setStyleState] = useState({
    backgroundStyle: styles.container,
    textStyle: styles.text_unselected,
  });
  const isEnabled = props.enabled;
  const enabledStyle = {
    style: {
      backgroundColor: '#cccccc',
    },
  };

  function setView() {
    if (selected) {
      setStyleState({
        backgroundStyle: styles.container_selected,
        textStyle: styles.text_selected,
      });
      props.onClickTime(props);
      return;
    }
    setStyleState({
      backgroundStyle: styles.container,
      textStyle: styles.text_unselected,
    });
  }

  function onClickCard() {
    setSelected(!selected);
    setView();
  }

  return (
    <TouchableWithoutFeedback onPress={isEnabled ? onClickCard : null}>
      <View
        style={[
          styles.container,
          styleState.backgroundStyle,
          !isEnabled ? enabledStyle.style : null,
        ]}>
        <Text style={styleState.textStyle}>{props.time}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TimeCard;
