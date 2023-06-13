import React, {useEffect, useState} from 'react';
import {Image, View, ActivityIndicator} from 'react-native';
import {Center, Button, Input, Stack, NativeBaseProvider} from 'native-base';
import styles from './register.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import useApiRequest from '../../../hooks/useApiRequest';
import {useDispatch} from 'react-redux';
import {setUser} from '../../../redux/reducers/userReducer';

const Register = props => {
  const navigateToHome = () =>
    props.navigation.navigate('mainStack', {screen: 'homeStack'});
  const [results, error, loading, useAxios] = useApiRequest();
  const [numberVerification, setnumberVerification] = useState(false);
  const [codeVerification, setcodeVerification] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const dispatch = useDispatch();

  const handleRegister = async values => {
    if (!confirm) {
      setnumberVerification(true);
      await signInWithPhoneNumber(`+90 ${values.phoneNumber}`);
      setnumberVerification(false);
    } else {
      setcodeVerification(true);
      const isConfirm = await confirmCode(values.code);
      setcodeVerification(false);
      if (isConfirm) {
        await useAxios({
          url: 'http://192.168.1.43:5000/user',
          method: 'post',
          data: {
            name: values.name,
            lastName: values.lastName,
            phoneNumber: values.phoneNumber,
          },
        });

        navigateToHome();
      }
    }
  };

  useEffect(() => {
    if (results?.data) {
      dispatch(setUser(results.data));
    }
  }, [results?.data]);

  const signInWithPhoneNumber = async phoneNumber => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  };

  const confirmCode = async code => {
    try {
      await confirm.confirm(code);
      return true;
    } catch (error) {
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
              name: '',
              lastName: '',
              phoneNumber: '',
            }}
            onSubmit={handleRegister}>
            {({handleChange, handleSubmit, values}) => (
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
                      placeholder="Ad"
                      value={values.name}
                      onChangeText={handleChange('name')}
                      w={{
                        base: '75%',
                        md: '25%',
                      }}
                    />
                    <Input
                      variant="rounded"
                      placeholder="Soyad"
                      value={values.lastName}
                      onChangeText={handleChange('lastName')}
                    />
                    <Input
                      variant="rounded"
                      placeholder="Telefon Numarası"
                      keyboardType="number-pad"
                      value={values.phoneNumber}
                      onChangeText={handleChange('phoneNumber')}
                    />
                    <Button
                      colorScheme="success"
                      borderRadius={'xl'}
                      style={styles.button}
                      onPress={handleSubmit}>
                      {numberVerification ? (
                        <ActivityIndicator size="small" color="#FFFFFF" />
                      ) : (
                        'Kayıt Ol'
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

export default Register;
