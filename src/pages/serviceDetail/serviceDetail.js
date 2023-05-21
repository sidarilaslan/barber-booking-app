import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './serviceDetail.style';
import CustomButton from '../../components/customButton';
import {NativeBaseProvider} from 'native-base';

const ServiceDetail = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1621607512022-6aecc4fed814?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDIxfHxiYXJiZXJ8ZW58MHx8fHwxNjg0NDg2MTU3fDA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450';
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={styles.inner_container}>
          <Image
            style={styles.image}
            source={{
              uri: imageUrl,
            }}
          />
          <View style={styles.service_info_container}>
            <View style={styles.service_header}>
              <Text style={styles.service_title}>Saç Sakal ve Saç Yıkama</Text>
              <Text>⭐ 4,5</Text>
            </View>
            <Text style={styles.stylist_name}>Sidar İlaslan</Text>
            <Text style={styles.stylist_availability}>Müsait</Text>
          </View>
          <View style={styles.service_desc_container}>
            <Text style={styles.service_desc}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </Text>
          </View>
        </View>
        <CustomButton buttonText="Randevu Oluştur" onClick={() => {}} />
      </View>
    </NativeBaseProvider>
  );
};

export default ServiceDetail;
