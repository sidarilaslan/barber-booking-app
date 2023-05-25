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

const Home = () => {
  const [data, setData] = useState([]);
  const [filteredServices, setFilteredServices] = useState(data);
  const [results, error, loading] = useApiRequest({
    url: "http://10.0.2.2:5000/service/getall",
    method: "get"
  });


  const renderService = ({ item }) => (


    <ServiceCard
      imageUrl={item.worker_id.imageUrl}
      serviceName={item.name}
      stylistName={`${item.worker_id.user_id.name} ${item.worker_id.user_id.lastName}`}
      price={item.price}
      points={item.worker_id.points}
      onClickPriceButton={() => {
        console.log("Clicked!");
      }}
    />
  )
  useEffect(() => {
    if (results?.data) {
      setData(results.data);
      setFilteredServices(results.data);
    }
  }, [results?.data]);


  const handleSearch = (query) => {
    const filtered = data.filter((filteredServices) =>
      filteredServices.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  return (
    <NativeBaseProvider>
      <VStack>
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
        <FlatList
          data={filteredServices}
          renderItem={renderService}
        />
      </VStack>
    </NativeBaseProvider>
  );
};

export default Home;
