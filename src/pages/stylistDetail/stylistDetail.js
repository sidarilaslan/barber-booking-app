import React from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import styles from './stylistDetail.style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Divider, NativeBaseProvider} from 'native-base';

const StylistDetail = ({route}) => {
  const stylist = route.params;

  console.log(stylist.availabilty);
  function checkAvailability() {
    if (stylist.availabilty) {
      return 'Müsait';
    }
    return 'Müsait Değil';
  }

  function setIconByAvailability() {
    if (stylist.availabilty) {
      return {
        iconName: 'check',
        color: '#4BB543',
      };
    }
    return {
      iconName: 'times',
      color: '#da3232',
    };
  }
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle={'dark-content'} />
        <View style={styles.header}>
          <Image
            source={{
              uri: stylist.imageUrl,
            }}
            style={styles.image}
          />
          <Text style={styles.stylist_name}>
            {stylist.user_id.name + ' ' + stylist.user_id.lastName}
          </Text>
          <Text style={styles.stylist_label}>Stylist</Text>
          <View style={styles.rating_container}>
            <Icon name={'star'} size={20} color={'#f0df28'} solid />
            <Text style={styles.point}>{stylist.points}</Text>
          </View>
        </View>
        <Divider style={{marginVertical: 8}} />
        <View style={styles.stylist_availability}>
          <Icon
            name={setIconByAvailability().iconName}
            size={20}
            color={setIconByAvailability().color}
            solid
          />
          <Text style={styles.stylist_availability}>{checkAvailability()}</Text>
        </View>
        <View style={styles.phone_number_container}>
          <Icon name={'phone'} size={16} color={'black'} solid />
          <Text style={styles.phone_number}>{stylist.user_id.phoneNumber}</Text>
        </View>

        <Divider style={{marginVertical: 8}} />
        <Text style={styles.about_label}>Hakkında</Text>

        <View style={styles.biography_container}>
          <Text style={styles.biography}>{stylist.biography}</Text>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

export default StylistDetail;
