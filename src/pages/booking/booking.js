import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './booking.style';
import DatePicker from 'react-native-date-picker';
import CustomButton from '../../components/customButton';
import { NativeBaseProvider } from 'native-base';
import IconButton from '../../components/iconButton';
import TimeCard from '../../components/timeCard';
import useApiRequest from "../../hooks/useApiRequest";
import { useSelector } from 'react-redux';


const Booking = ({ route, navigation }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedDateText, setSelectedDateText] = useState('');
  const [selectedTimeText, setSelectedTimeText] = useState('');
  const [inputState, setInputState] = useState({
    style: styles.request_input_unfocused,
  });
  const [input, setInput] = useState('');
  const { serviceId, name: serviceName, worker_id: worker } = route.params;
  const stylistFullName = worker.user_id.name + ' ' + worker.user_id.lastName;
  const imageUrl = worker.imageUrl;
  const [results, error, loading, useFetch] = useApiRequest();
  const userData = useSelector((state) => state.user);

  const handleBooking = async () => {
    const requestData = {
      serviceName,
      stylistFullName,
      serviceId,
      worker,
      selectedDateText,
      input,
      selectedTimeText,
    };
    await useFetch({
      url: 'http://10.0.2.2:5000/booking',
      method: 'post',
      data: {
        name: serviceName,
        worker_id: worker._id,
        requests: input,
        hour: selectedTimeText,
        date: date.toDateString(),
        user_id: userData.user[0]._id
      }
    })

    navigation.navigate('bookingSuccess', requestData);
  }


  const checkSelectedDateText = text => {
    if (text !== '') {
      return text;
    }
    return '-';
  };

  function checkIsEnabled(item) {
    const today = new Date();

    if (date.toLocaleDateString() === today.toLocaleDateString()) {
      return date.getHours() < item.id;
    }
    return true;
  }

  const renderItem = ({ item }) => (
    <TimeCard
      enabled={checkIsEnabled(item)}
      time={item.time}
      onClickTime={value => {
        console.log(value.time);
        setSelectedTimeText(value.time);
      }}
    />
  );



  return (
    <NativeBaseProvider>
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#368fc9" barStyle={'light-content'} />
        <View style={styles.header}>
          <Image
            source={{
              uri: imageUrl,
            }}
            style={styles.image}
          />
          <Text style={styles.stylist_name}>{stylistFullName}</Text>
          <Text style={styles.stylist_label}>Stylist</Text>
        </View>
        <View style={styles.inner_container}>
          <Text style={styles.service_name}>{serviceName}</Text>
          <Text style={styles.request_input_label}>
            Lütfen Ek İsteklerinizi Yazınız
          </Text>
          <TextInput
            multiline
            numberOfLines={8}
            maxLength={200}
            value={input}
            onChangeText={value => setInput(value)}
            style={[styles.request_input, inputState.style]}
            placeholder={'İsteklerini gir'}
            onFocus={() => {
              setInputState({ style: styles.request_input_focused });
            }}
          />
          <Text style={styles.choose_datetime_label}>Tarih-Zaman Seç</Text>
          <View style={styles.card_date_time}>
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={_date => {
                setOpen(false);
                setDate(_date);
                setSelectedDateText(_date.toLocaleDateString());
              }}
              onCancel={() => {
                setOpen(false);
              }}
              mode="date"
              minimumDate={date}
              maximumDate={new Date('2024-01-01')}
            />
            <View style={styles.card_date_container}>
              <View style={styles.card_date_label}>
                <Text>Date: </Text>
                <Text style={{ marginStart: 24, color: 'black' }}>
                  {' '}
                  {checkSelectedDateText(selectedDateText)}{' '}
                </Text>
              </View>

              <IconButton
                name={'calendar'}
                onClick={() => {
                  console.log('clicked rocket!!');
                  setOpen(true);
                }}
              />
            </View>
            <View style={styles.card_time_container}>
              <Text>Time: </Text>
              <Text style={{ marginStart: 24, color: 'black' }}>
                {checkSelectedDateText(selectedTimeText)}
              </Text>
            </View>

            <View>
              <FlatList
                data={timeList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
        <CustomButton
          buttonText="Rezervasyon Yap"
          onClick={handleBooking}
        />
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Booking;

const timeList = [
  {
    id: 9,
    time: '09:00',
  },
  {
    id: 10,
    time: '10:00',
  },
  {
    id: 11,
    time: '11:00',
  },
  {
    id: 12,
    time: '12:00',
  },
  {
    id: 13,
    time: '13:00',
  },
  {
    id: 14,
    time: '14:00',
  },
  {
    id: 15,
    time: '15:00',
  },
  {
    id: 16,
    time: '16:00',
  },
  {
    id: 17,
    time: '17:00',
  },
  {
    id: 18,
    time: '18:00',
  },
  {
    id: 19,
    time: '19:00',
  },
  {
    id: 20,
    time: '20:00',
  },
  {
    id: 21,
    time: '21:00',
  },
  {
    id: 22,
    time: '22:00',
  },
  {
    id: 23,
    time: '23:00',
  },
  {
    id: 24,
    time: '00:00',
  },
];
