import React from 'react';
import {
  Image,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './serviceDetail.style';
import CustomButton from '../../components/customButton';
import {NativeBaseProvider} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ServiceDetail = ({route, navigation}) => {
  const service = route.params;

  const image = require('../../assets/images/service-detail.png');

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle={'light-content'} />
        <View style={styles.inner_container}>
          <Image style={styles.image} source={image} />
          <View style={styles.service_info_container}>
            <View style={styles.service_header}>
              <Text style={styles.service_title}>{service.name}</Text>
              <View style={{flexDirection: 'row'}}>
                <Icon name={'star'} size={20} color={'#f0df28'} solid />
                <Text style={styles.point}>{service.worker_id.points}</Text>
              </View>
            </View>
            <View style={styles.username_view}>
              <Icon name={'user'} size={20} color={'#000000'} solid />
              <Text style={styles.stylist_name}>
                {service.worker_id.user_id.name +
                  ' ' +
                  service.worker_id.user_id.lastName}{' '}
              </Text>
              <Text>(Stylist)</Text>
            </View>
            <View style={styles.availability_view}>
              <Icon name={'check'} size={20} color={'#4BB543'} solid />
              <Text style={styles.stylist_availability}>Müsait</Text>
            </View>
          </View>
          <Text style={styles.service_desc_label}>Açıklama</Text>
          <View style={styles.service_desc_container}>
            <Text style={styles.service_desc}>{service.description}</Text>
          </View>
        </View>

        <View style={styles.duration_and_money_view}>
          <View style={styles.duration_view}>
            <Icon name={'clock'} size={30} color={'#2e6fb4'} solid />
            <Text style={styles.duration_price}>{service.duration}</Text>
          </View>
          <View style={styles.duration_view}>
            <Icon name={'money-bill-wave'} size={30} color={'#2e6fb4'} solid />
            <Text style={styles.text_price}>{service.price} TL</Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              console.log('dwqfqw');
              navigation.navigate('mapScreen');
            }}>
            <View style={styles.duration_view}>
              <Icon name={'map-marker-alt'} size={30} color={'#2e6fb4'} solid />
              <Text style={styles.text_price}>{'Konum'}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <CustomButton
          buttonText="Randevu Oluştur"
          onClick={() => {
            navigation.navigate('bookingScreen', {
              serviceId: service._id,
              name: service.name,
              worker_id: service.worker_id,
            });
          }}
        />
      </View>
    </NativeBaseProvider>
  );
};

export default ServiceDetail;
