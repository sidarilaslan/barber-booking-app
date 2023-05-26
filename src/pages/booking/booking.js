import {React, useState} from 'react';
import {Image, ScrollView, Text, TextInput, View} from 'react-native';
import styles from './booking.style';
import DatePicker from 'react-native-date-picker';
import CustomButton from '../../components/customButton';
import {NativeBaseProvider} from 'native-base';

const Booking = () => {
  const [date, setDate] = useState(new Date());
  const [inputState, setInputState] = useState({
    style: styles.request_input_unfocused,
  });

  return (
    <NativeBaseProvider>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://miro.medium.com/v2/resize:fit:1400/1*XocQvssh4q9IJmfROJZsvQ.jpeg',
            }}
            style={styles.image}
          />
          <Text style={styles.stylist_name}>Sidar İlaslan</Text>
          <Text style={styles.stylist_label}>Stylist</Text>
        </View>
        <View style={styles.inner_container}>
          <Text style={styles.service_name}>Saç Sakal - Yıkama</Text>
          <Text style={styles.choose_datetime_label}>Tarih-Zaman Seç</Text>
          <DatePicker
            date={date}
            onDateChange={setDate}
            style={styles.date_picker}
            minimumDate={new Date()}
          />
          <Text style={styles.choose_datetime_label}>
            Lütfen Ek İsteklerinizi Yazınız
          </Text>
          <TextInput
            multiline
            numberOfLines={8}
            maxLength={200}
            style={[styles.request_input, inputState.style]}
            placeholder={'İsteklerini gir'}
            onFocus={() => {
              setInputState({style: styles.request_input_focused});
            }}
          />
        </View>
        <CustomButton
          buttonText="Rezervasyon Yap"
          onClick={() => {
            console.log('date-time: ' + date);
          }}
        />
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Booking;
