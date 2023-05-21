import React from 'react';
import {Image, View} from 'react-native';
import {Center, Button} from 'native-base';
import styles from './intro.style';
const Intro = props => {
  return (
    <Center>
      <Image source={require('../../assets/images/login-logo.png')} />
      <View>
        <Button
          colorScheme="success"
          borderRadius={'2xl'}
          style={styles.button}>
          Login
        </Button>
        <Button variant="outline" colorScheme="success" borderRadius={'2xl'}>
          Register
        </Button>
      </View>
    </Center>
  );
};

export default Intro;
