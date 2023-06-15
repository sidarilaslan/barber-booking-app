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
import useApiRequest from '../../../hooks/useApiRequest';
import { NativeBaseProvider, VStack, Input, SearchIcon } from 'native-base';
import BookingCard from '../../../components/admin/bookingCard';
import styles from './bookingList.style';

const BookingList = ({ route, navigation }) => {
    const [data, setData] = useState([]);
    const [filteredBookings, setfilteredBookings] = useState(data);
    const [results, error, loading, useAxios] = useApiRequest();

    useEffect(() => {
        useAxios({
            url: `http://10.0.2.2:5000/booking`,
            method: 'get',
        });
    }, []);

    useEffect(() => {
        if (results?.data) {
            setData(results.data);
            setfilteredBookings(results.data);
        }
    }, [results?.data]);

    const renderBooking = ({ item }) => (
        <BookingCard
            customerFullName={item.user_id.name + " " + item.user_id.lastName
            }
            stylistName={item.worker_id.user_id.name + " " + item.worker_id.user_id.lastName}
            bookingDate={item.date}
            bookingHour={item.hour}
            isDone={item.isDone}
            onClick={
                () => {

                }
            }
        />
    );
    const handleSearch = query => {
        const filtered = data.filter(filteredBookings =>
            filteredBookings.user_id.name.toLowerCase().includes(query.toLowerCase()),
        );
        setfilteredBookings(filtered);
    };
    return (
        <NativeBaseProvider>
            <VStack flex={1} backgroundColor={'#FFFFFF'}>
                <StatusBar backgroundColor="white" barStyle={'dark-content'} />
                <Input
                    onChangeText={handleSearch}
                    placeholder="Müşteri Ara"
                    margin={4}
                    fontSize={16}
                    variant="filled"
                    borderRadius={10}
                    backgroundColor="#f1f1f1"
                    InputLeftElement={<SearchIcon marginLeft={4} size={6} />}
                />
                <View style={styles.container}>
                    <FlatList data={filteredBookings} renderItem={renderBooking} />
                </View>
            </VStack>
        </NativeBaseProvider>
    );
};

export default BookingList;
