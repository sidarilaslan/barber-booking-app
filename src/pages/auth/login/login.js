import React, { useState, useEffect } from 'react';
import { Image, View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import auth, { firebase } from '@react-native-firebase/auth';
import {
  Center,
  Button,
  Input,
  Stack,
  NativeBaseProvider,
  Spinner,
} from 'native-base';
import { Formik } from 'formik';
import styles from './login.style';
import { setUser } from '../../../redux/reducers/userReducer';
import axios from 'axios';

const Login = props => {
  const navigateToHome = (userRole) => {
    if (userRole == "admin")
      props.navigation.navigate('adminStack', { screen: 'adminHomeScreen' });
    else
      props.navigation.navigate('mainStack', { screen: 'homeStack' });

  }

  const [numberVerification, setnumberVerification] = useState(false);
  const [codeVerification, setcodeVerification] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const dispatch = useDispatch();

  const handleLogin = async values => {
    if (!confirm) {
      setnumberVerification(true);
      await signIn(values.phoneNumber);
      setnumberVerification(false);
    } else {
      setcodeVerification(true);
      const isConfirm = await confirmCode(values.code);
      setcodeVerification(false);
      if (isConfirm) {
        const userData = await fetchUserData(values.phoneNumber);
        dispatch(setUser(userData));
        navigateToHome(userData.role);
      }
    }
  };
  const fetchUserData = async (phoneNumber) => {
    const { data } = await axios.get(`http://10.0.2.2:5000/user?phoneNumber=${phoneNumber}`);
    return data[0];
  }
  const signIn = async (phoneNumber) => {
    await signInWithPhoneNumber(`+90 ${phoneNumber}`);
  }

  const signInWithPhoneNumber = async phoneNumber => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  };

  const confirmCode = async code => {
    try {
      await confirm.confirm(code);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Center>
          <Image source={require('../../../assets/images/login-logo.png')} />
          <Formik
            initialValues={{
              phoneNumber: '',
              code: '',
            }}
            onSubmit={handleLogin}>
            {({ handleChange, handleSubmit, values }) => (
              <Stack space={4} maxW="500px">
                {confirm ? (
                  <>
                    <Input
                      variant="rounded"
                      placeholder="Code"
                      value={values.code}
                      onChangeText={handleChange('code')}
                      w={{
                        base: '75%',
                        md: '25%',
                      }}
                    />
                    <Button
                      colorScheme="success"
                      borderRadius={'xl'}
                      style={styles.button}
                      disabled={codeVerification}
                      onPress={handleSubmit}>
                      {codeVerification ? (
                        <ActivityIndicator size="small" color="#FFFFFF" />
                      ) : (
                        'Gönder'
                      )}
                    </Button>
                  </>
                ) : (
                  <>
                    <Input
                      variant="rounded"
                      placeholder="Telefon Numarası"
                      value={values.phoneNumber}
                      onChangeText={handleChange('phoneNumber')}
                      w={{
                        base: '75%',
                        md: '25%',
                      }}
                    />
                    <Button
                      colorScheme="success"
                      borderRadius={'xl'}
                      style={styles.button}
                      onPress={handleSubmit}
                      disabled={numberVerification}>
                      {numberVerification ? (
                        <ActivityIndicator size="small" color="#FFFFFF" />
                      ) : (
                        'Gönder'
                      )}
                    </Button>
                  </>
                )}
              </Stack>
            )}
          </Formik>
        </Center>
      </View>
    </NativeBaseProvider>
  );
};

export default Login;
