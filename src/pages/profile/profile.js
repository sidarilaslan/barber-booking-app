import React, {useEffect} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {useSelector} from 'react-redux';
import {NativeBaseProvider} from 'native-base';
import styles from './profile.style';
import auth from '@react-native-firebase/auth';
import CustomButton from '../../components/customButton';

const Profile = props => {
  const userData = useSelector(state => state.user);
  const user = auth().currentUser;

  useEffect(() => {}, [userData]);

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View>
          <Text style={styles.fullName}>
            {userData.user.name + ' ' + userData.user.lastName}
          </Text>
          <Text style={styles.phoneNumber}>{user.phoneNumber}</Text>
          <View style={styles.card_settings}>
            <Text style={styles.text_settings}>HESAP AYARLARI</Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              console.log(userData.user._id);
              props.navigation.navigate('bookingListScreen', {
                _id: userData.user._id,
              });
            }}>
            <View style={styles.card_settings}>
              <Text style={styles.text_settings}>Randevularımı Göster</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <CustomButton
          buttonText={'Çıkış Yap'}
          onClick={async () => {
            await auth().signOut();
            props.navigation.navigate('welcomeStack', {
              screen: 'loginScreen',
            });
          }}
        />
      </View>
    </NativeBaseProvider>
  );
};

export default Profile;
