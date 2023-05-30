import React, { useState, useEffect } from 'react';
import useApiRequest from '../../hooks/useApiRequest';
import {
  FlatList,
  Input,
  SearchIcon,
  VStack,
  Heading,
  NativeBaseProvider,
} from 'native-base';
import ServiceCard from '../../components/serviceCard';
import { ActivityIndicator, StatusBar } from 'react-native';

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [filteredServices, setFilteredServices] = useState(data);
  const [results, error, loading, useFetch] = useApiRequest();

  const renderService = ({ item }) => (
    <ServiceCard
      imageUrl={item.worker_id.imageUrl}
      serviceName={item.name}
      stylistName={`${item.worker_id.user_id.name} ${item.worker_id.user_id.lastName}`}
      price={item.price}
      points={item.worker_id.points}
      onClickPriceButton={() => {
        navigation.navigate('serviceDetailScreen', item);
      }}
    />
  );
  useEffect(() => {
    useFetch({
      url: 'http://10.0.2.2:5000/service',
      method: 'get'
    });
  }, []);

  useEffect(() => {
    if (results?.data) {
      setData(results.data);
      setFilteredServices(results.data);
    }
  }, [results?.data]);

  const handleSearch = query => {
    const filtered = data.filter(filteredServices =>
      filteredServices.name.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredServices(filtered);
  };

  return (
    <NativeBaseProvider>
      <VStack flex={1} backgroundColor={'#FFFFFF'}>
        <StatusBar backgroundColor="white" barStyle={'dark-content'} />
        <Input
          onChangeText={handleSearch}
          placeholder="Search"
          margin={4}
          fontSize={16}
          variant="filled"
          borderRadius={10}
          backgroundColor="#f1f1f1"
          InputLeftElement={<SearchIcon marginLeft={4} size={6} />}
        />
        <Heading marginLeft={4}>Services</Heading>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList data={filteredServices} renderItem={renderService} />
        )}
      </VStack>
    </NativeBaseProvider>
  );
};

export default Home;
