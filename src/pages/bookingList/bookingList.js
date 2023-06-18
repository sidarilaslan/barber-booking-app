import React, { useState, useEffect } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import useApiRequest from '../../hooks/useApiRequest';
import { NativeBaseProvider } from 'native-base';
import BookingCard from '../../components/bookingCard';
import styles from './bookingList.style';

const BookingList = ({ route, navigation }) => {
  const [data, setData] = useState([]);

  const [results, error, loading, useAxios] = useApiRequest();

  useEffect(() => {
    useAxios({
      url: `http://192.168.1.43:5000/booking?user_id=${route.params._id}`,
      method: 'get',
    });
  }, []);

  useEffect(() => {
    if (results?.data) {
      setData(results.data);
    }
  }, [results?.data]);

  const renderBooking = ({ item }) => (
    <BookingCard
      imageUrl={item.worker_id.imageUrl}
      serviceName={item.name}
      stylistName={`${item.worker_id.user_id.name} ${item.worker_id.user_id.lastName}`}
      bookingDate={item.date}
      bookingHour={item.hour}
      onClick={() => {
        const booking = {
          serviceName: item.name,
          stylistFullName: `${item.worker_id.user_id.name} ${item.worker_id.user_id.lastName}`,
          bookingDate: item.date,
          bookingTime: item.hour,
          stylistPhoneNumber: item.worker_id.user_id.phoneNumber,
          requests: item.requests,
        };
        navigation.navigate('bookingDetailScreen', booking);
      }}
    />
  );

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <FlatList data={data} renderItem={renderBooking} />
      </View>
    </NativeBaseProvider>
  );
};

export default BookingList;
