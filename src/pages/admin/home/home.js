import React, { useEffect } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import styles from './home.style';
import auth from '@react-native-firebase/auth';
import CustomButton from '../../../components/customButton';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Home = props => {
    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        props.navigation.navigate('adminBookingListScreen');
                    }}>
                    <View style={styles.card_settings}>
                        <Ionicons name={"reader-outline"} size={50} color={"#2e6fb4"} />
                        <Text style={styles.text_settings}>
                            Randevular
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => {
                        props.navigation.navigate('adminUserListScreen');
                    }}>
                    <View style={styles.card_settings}>
                        <Ionicons name={"people-outline"} size={50} color={"#2e6fb4"} />
                        <Text style={styles.text_settings}>
                            Müşteriler
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => {
                        props.navigation.navigate('adminWorkerListScreen');
                    }}>
                    <View style={styles.card_settings}>
                        <Ionicons name={"cut-outline"} size={50} color={"#2e6fb4"} />
                        <Text style={styles.text_settings}>
                            Çalışanlar
                        </Text>
                    </View>
                </TouchableWithoutFeedback>


                <CustomButton
                    buttonText={'Çıkış Yap'}
                    onClick={async () => {
                        await auth().signOut();
                        props.navigation.navigate('welcomeStack', {
                            screen: 'introScreen',
                        });
                    }}
                />
            </View>
        </NativeBaseProvider>
    );
};

export default Home;
