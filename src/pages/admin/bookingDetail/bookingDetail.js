import React from 'react';
import { ScrollView, StatusBar, Text, View, Alert } from 'react-native';
import styles from './bookingDetail.style';
import ItemWithDivier from '../../../components/itemWithDivider';
import { NativeBaseProvider, Button } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const BookingDetail = ({ route, navigation }) => {
    const {
        id,
        serviceName,
        phoneNumber,
        requests,
    } = route.params;

    const handleDelete = () => {
        Alert.alert(
            'Dikkat !',
            'Randevuyu silmek istediğinizden emin misiniz?',
            [
                {
                    text: 'Vazgeç',
                    style: 'cancel'
                },
                {
                    text: 'Evet',
                    style: 'destructive',
                    onPress: confirmDelete

                },
            ],
            { cancelable: true }
        );
    };

    const confirmDelete = async () => {
        console.log("id-->" + id);
        try {
            const response = await axios.delete(`http://10.0.2.2:5000/booking/${id}`);

            Alert.alert("", response.data.message, [
                {
                    text: 'Tamam',
                    style: 'destructive',
                    onPress: () => {
                        navigation.navigate("adminBookingListScreen");
                    }
                }
            ]);
        } catch (error) {
            Alert.alert("", error.response.data.message);
        }
    };


    return (
        <NativeBaseProvider>
            <StatusBar backgroundColor="white" barStyle={'dark-content'} />
            <View style={styles.container}>
                <View style={styles.booking_detail}>
                    <Text style={styles.booking_detail_title}>Randevu Detayı</Text>
                    <ItemWithDivier stylist={'Servis'} title={serviceName} />
                    <ItemWithDivier stylist={'Telefon'} title={phoneNumber} />
                    <ItemWithDivier stylist={'İstekler'} title={requests} />
                </View>

                <View style={styles.button_group}>
                    <Button width={150}
                        leftIcon={<Ionicons name={"trash"} size={20} color={"white"} />}
                        colorScheme="danger"
                        onPress={handleDelete}
                    >
                        Randevuyu Sil
                    </Button>
                </View>
            </View>
        </NativeBaseProvider>
    );
};

export default BookingDetail;
