import React from 'react';
import {Image, View} from 'react-native';
import {Center, Button, Input, Stack} from 'native-base';
import styles from './login.style';
const Login = props => {
  return (
    <Center>
      <Image source={require('../../assets/images/login-logo.png')} />
      <Stack space={4} maxW="500px">
        <Input
          variant="rounded"
          placeholder="Phone Number"
          w={{
            base: '75%',
            md: '25%',
          }}
        />

        <Button colorScheme="success" borderRadius={'xl'} style={styles.button}>
          Submit
        </Button>
      </Stack>
    </Center>
  );
};

export default Login;
