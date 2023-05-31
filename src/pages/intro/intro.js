import React, { useState, useEffect } from 'react';
import { Image, View } from 'react-native';
import { Center, Button, NativeBaseProvider } from 'native-base';
import styles from './intro.style';
import Loading from "../../components/loading";
const Intro = props => {
  const navigateToLogin = () => props.navigation.navigate('loginScreen');
  const navigateToRegister = () => props.navigation.navigate('registerScreen');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        {loading ? <Loading /> : (
          <Center>
            <Image source={require('../../assets/images/login-logo.png')} />
            <View>
              <Button
                colorScheme="success"
                borderRadius={'2xl'}
                style={styles.button}
                onPress={navigateToLogin}>
                Login
              </Button>
              <Button
                variant="outline"
                colorScheme="success"
                borderRadius={'2xl'}
                onPress={navigateToRegister}>
                Register
              </Button>
            </View>
          </Center>
        )}
      </View>
    </NativeBaseProvider>
  );
};

export default Intro;
