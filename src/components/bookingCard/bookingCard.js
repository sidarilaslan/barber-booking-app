import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './bookingCard.style';

const BookingCard = props => {
  let localDate = new Date(props.bookingDate).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <View style={styles.container}>
      <Image
        source={{uri: props.imageUrl}}
        style={styles.image}
        alt="Stylist Photo"
      />
      <View style={styles.info_container}>
        <Text style={styles.service_name}>{props.serviceName}</Text>
        <Text>
          {'Berber :'}
          {props.stylistName}
        </Text>
        <View>
          <Text>
            {'Tarih:'}
            {localDate}
          </Text>
          <Text>
            {'Saat:'}
            {props.bookingHour}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BookingCard;
