import React from 'react';
import {Image} from 'react-native';
import {Center, Button, Input, Stack} from 'native-base';
import styles from './register.style';
const Register = props => {
  return (
    <Center>
      <Image source={require('../../assets/images/login-logo.png')} />
      <Stack space={4} maxW="500px">
        <Input
          variant="rounded"
          placeholder="Name"
          w={{
            base: '75%',
            md: '25%',
          }}
        />
        <Input variant="rounded" placeholder="LastName" />
        <Input variant="rounded" placeholder="Phone Number" />
        <Button colorScheme="success" borderRadius={'xl'} style={styles.button}>
          Register
        </Button>
      </Stack>
    </Center>
  );
};

export default Register;
