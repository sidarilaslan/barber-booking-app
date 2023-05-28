import React from 'react';
import {Button} from 'native-base';
import {View, Image, Text} from 'react-native';
import styles from './serviceCard.style';
import Icon from 'react-native-vector-icons/FontAwesome';

const ServiceCard = props => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: props.imageUrl}}
        style={styles.image}
        alt="Stylist Photo"
      />
      <View style={styles.info_container}>
        <Text style={styles.service_name}>{props.serviceName}</Text>
        <Text>{props.stylistName}</Text>
        <View style={{flexDirection: 'row'}}>
          <Icon name={'star'} size={20} color={'#f0df28'} solid />
          <Text>{props.points}</Text>
        </View>
      </View>
      <Button style={styles.price_button} onPress={props.onClickPriceButton}>
        {props.price.toString() + ' TL'}
      </Button>
    </View>
  );
};

export default ServiceCard;
