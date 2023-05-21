import React from 'react';
import {FlatList, Input, SearchIcon, VStack, Heading} from 'native-base';
import ServiceCard from '../../components/serviceCard';

const Home = () => {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      serviceName: 'Saç Sakal Yıkama',
      stylistName: 'Sidar İlaslan',
      price: 40,
      imageUrl:
        'https://miro.medium.com/v2/resize:fit:1400/1*XocQvssh4q9IJmfROJZsvQ.jpeg',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      serviceName: 'Saç Sakal',
      stylistName: 'Suat Zengin',
      price: 35,
      imageUrl: 'https://i.ytimg.com/vi/7dKZXDpdMWU/hqdefault.jpg',
    },
  ];

  return (
    <VStack>
      <Input
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
        data={data}
        renderItem={({item}) => (
          <ServiceCard
            imageUrl={item.imageUrl}
            serviceName={item.serviceName}
            stylistName={item.stylistName}
            price={item.price}
            onClickPriceButton={() => {
              console.log('Clicked!');
            }}
          />
        )}
      />
    </VStack>
  );
};

export default Home;
