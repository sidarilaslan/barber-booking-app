import React from 'react';
import {Image} from 'react-native';
import {Center, Button, Input, Stack, NativeBaseProvider} from 'native-base';
import styles from './phoneControl.style';
const PhoneControl = props => {
  return (
    <NativeBaseProvider>
      <Center>
        <Image source={require('../../assets/images/login-logo.png')} />
        <Stack space={4} maxW="500px">
          <Input
            variant="rounded"
            placeholder="Code"
            w={{
              base: '75%',
              md: '25%',
            }}
          />

          <Button
            colorScheme="success"
            borderRadius={'xl'}
            style={styles.button}>
            Submit
          </Button>
        </Stack>
      </Center>
    </NativeBaseProvider>
  );
};

export default PhoneControl;
