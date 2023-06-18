import React from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import styles from '../bookingSuccess/bookingSuccess.style';
import ItemWithDivier from '../../components/itemWithDivider';
import { NativeBaseProvider } from 'native-base';

const BookingDetail = ({ route }) => {
  const {
    serviceName,
    stylistFullName,
    bookingDate,
    bookingTime,
    stylistPhoneNumber,
    requests,
  } = route.params;

  let formattedBookingDate = new Date(bookingDate).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="white" barStyle={'dark-content'} />
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.booking_detail}>
            <Text style={styles.booking_detail_title}>Randevu Detayı</Text>
            <ItemWithDivier stylist={'Servis'} title={serviceName} />
            <ItemWithDivier stylist={'Stilist'} title={stylistFullName} />
            <ItemWithDivier stylist={'Tarih'} title={formattedBookingDate} />
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
