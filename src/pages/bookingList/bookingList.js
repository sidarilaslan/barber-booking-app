import React, { useState, useEffect } from 'react';
import {
    FlatList, Image, ScrollView, StatusBar, Text, TextInput, View
} from 'react-native';
import { useSelector } from 'react-redux';
import useApiRequest from '../../hooks/useApiRequest';
import { NativeBaseProvider } from 'native-base';
import BookingCard from "../../components/bookingCard";
import styles from "./bookingList.style";

const BookingList = (props) => {
    const [data, setData] = useState([]);
    const userData = useSelector((state) => state.user);
    [results, error, loading, useAxios] = useApiRequest();

    useEffect(() => {
        if (userData.user) {
            useAxios({
                url: `http://10.0.2.2:5000/booking?user_id=${userData.user._id}`,
                method: 'get'
            });
        }


    }, [userData]);

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
        />
    );



    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <FlatList data={data} renderItem={renderBooking}></FlatList>
            </View>
        </NativeBaseProvider>
    )
}



export default BookingList;