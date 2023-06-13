import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from '../bookingSuccess/bookingSuccess.style';
import ItemWithDivier from '../../components/itemWithDivider';
import {NativeBaseProvider} from 'native-base';

const BookingDetail = ({route}) => {
  const {
    serviceName,
    stylistFullName,
    bookingDate,
    bookingTime,
    stylistPhoneNumber,
    requests,
  } = route.params;

  return (
    <NativeBaseProvider>
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.booking_detail}>
            <Text style={styles.booking_detail_title}>Randevu Detayı</Text>
            <ItemWithDivier stylist={'Servis'} title={serviceName} />
            <ItemWithDivier stylist={'Stilist'} title={stylistFullName} />
            <ItemWithDivier stylist={'Tarih'} title={bookingDate} />
            <ItemWithDivier stylist={'Saat'} title={bookingTime} />
            <ItemWithDivier stylist={'Telefon'} title={stylistPhoneNumber} />
            <ItemWithDivier stylist={'İstekler'} title={requests} />
          </View>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default BookingDetail;
