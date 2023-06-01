import React, {useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { View } from "react-native";

const Map = () => {
  const [regionState, setRegionState] = useState({
    region: {
      latitude: 38.4905096,
      longitude: 27.7022252,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });

  function onRegionChange(region) {
    setRegionState({region});
    console.log(region);
  }
  return (
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          flex: 1,
        }}
        initialRegion={regionState.region}
        onRegionChange={onRegionChange}>
        <Marker
          coordinate={{
            latitude: 38.4905096,
            longitude: 27.7022252,
          }}
          title={'Manisa Celal Bayar Üniversitesi HFTTF'}
          description={'Teknoloji Fakültesi / Turgutlu'}
        />
      </MapView>
    </View>
  );
};

export default Map;
