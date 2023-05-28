import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import styles from './bookingSuccess.style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {NativeBaseProvider} from 'native-base';
import ItemWithDivier from '../../components/itemWithDivider';
import CustomButton from '../../components/customButton';

const BookingSuccess = ({route, navigation}) => {
  const {
    serviceName,
    stylistFullName,
    worker,
    selectedDateText: date,
    selectedTimeText: time,
    input: requests,
  } = route.params;
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <StatusBar backgroundColor="#3EB489" />
        <View style={styles.header}>
          <View style={styles.inner_container}>
            <Icon
              name={'check'}
              color={'#3EB489'}
              size={35}
              solid
              style={styles.icon}
            />
            <View style={styles.text_container}>
              <Text style={styles.header_text}>
                Rezervasyon işlemi başarılı!
              </Text>
              <Text style={styles.header_description}>
                Başarılı şekilde rezervasyon oluşturuldu. Bizi seçtiğiniz için
                teşekkür ederiz!
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.booking_detail}>
          <Text style={styles.booking_detail_title}>Randevu Detayı</Text>
          <ItemWithDivier stylist={'Servis'} title={serviceName} />
          <ItemWithDivier stylist={'Stilist'} title={stylistFullName} />
          <ItemWithDivier stylist={'Tarih'} title={date} />
          <ItemWithDivier stylist={'Saat'} title={time} />
          <ItemWithDivier
            stylist={'Telefon'}
            title={worker.user_id.phoneNumber}
          />
          <ItemWithDivier stylist={'İstekler'} title={requests} />
          <CustomButton
            buttonText="Anasayfaya Dön"
            onClick={() => {
              navigation.navigate('homeScreen');
            }}
          />
        </View>
      </View>
    </NativeBaseProvider>
  );
};

export default BookingSuccess;
