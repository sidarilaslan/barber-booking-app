import React from 'react';
import { View, Text, Alert } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeBaseProvider, Button } from 'native-base';
import axios from 'axios';

import styles from './userDetail.style';

const UserDetail = props => {
    const userData = props.route.params;
    let createdAt = new Date(userData.createdAt).toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const handleDelete = () => {
        Alert.alert(
            'Dikkat !',
            'Kullanıyı silmek istediğinizden emin misiniz?',
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

    const handleBookingList = () => {
        props.navigation.navigate("bookingListScreen", { _id: userData.id });
    }

    const confirmDelete = async () => {
        try {
            const response = await axios.delete(`http://10.0.2.2:5000/user/${userData.id}`);
            Alert.alert("", response.data.message, [
                {
                    text: 'Tamam',
                    style: 'destructive',
                    onPress: () => {
                        props.navigation.navigate("adminUserListScreen");
                    }
                }
            ]);
        } catch (error) {
            Alert.alert("", error.response.data.message);
        }
    };

    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <View style={styles.card_container}>
                    <View style={styles.card_info_container}>
                        <Text style={styles.user_name}>{userData.fullName}</Text>
                        <View style={styles.phone_container}>
                            <Ionicons name={"call"} size={30} color={"black"} />
                            <Text style={styles.p_5}>  {userData.phoneNumber}</Text>
                        </View>
                        <View style={styles.created_date_container}>
                            <Ionicons name={"calendar"} size={30} color={"black"} />
                            <Text style={styles.p_5}>
                                {createdAt}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.button_group}>
                    <Button width={150}
                        leftIcon={<Ionicons name={"reader-outline"} size={20} color={"white"} />}
                        colorScheme="blue"
                        onPress={handleBookingList}
                    >
                        Randevu Listesi
                    </Button>
                    <Button width={150}
                        leftIcon={<Ionicons name={"trash"} size={20} color={"white"} />}
                        colorScheme="danger"
                        onPress={handleDelete}
                    >
                        Hesabı Sil
                    </Button>
                </View>
            </View>
        </NativeBaseProvider>
    );
};

export default UserDetail;