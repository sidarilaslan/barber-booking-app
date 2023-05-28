import React from 'react';
import {Text, View} from 'react-native';
import styles from './itemWithDivider.style';
import {Divider} from 'native-base';
const ItemWithDivier = props => {
  return (
    <View>
      <Text style={styles.label}>{props.stylist}</Text>
      <Text style={styles.text}>{props.title}</Text>
      <Divider style={{marginVertical: 8}} />
    </View>
  );
};

export default ItemWithDivier;
