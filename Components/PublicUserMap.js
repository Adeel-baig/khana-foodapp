import { React, useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';

function PublicUserMap() {


  const markerPlace = [
    {
      branch_name: "Aliabad",
      latitude: 24.9200172,
      longitude: 67.0612345
    },
    {
      branch_name: "Numaish chowrangi",
      latitude: 24.8732834,
      longitude: 67.0337457
    },
    {
      branch_name: "Saylani house phase 2",
      latitude: 24.8278999,
      longitude: 67.0688257
    },
    {
      branch_name: "Touheed commercial",
      latitude: 24.8073692,
      longitude: 67.0357446
    },
    {
      branch_name: "Sehar Commercial",
      latitude: 24.8138924,
      longitude: 67.0677652
    },
    {
      branch_name: "Jinnah avenue",
      latitude: 24.8949528,
      longitude: 67.1767206
    },
    {
      branch_name: "Johar chowrangi",
      latitude: 24.9132328,
      longitude: 67.1246195
    },
    {
      branch_name: "Johar chowrangi 2",
      latitude: 24.9100704,
      longitude: 67.1208811
    },
    {
      branch_name: "Hill park",
      latitude: 24.8673515,
      longitude: 67.0724497
    }
  ]


  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    console.log(location)
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: 24.925790,
          longitude: 67.089988,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {
          markerPlace.map((item, index) => {
            return (
              <Marker
                coordinate={{ latitude: item.latitude, longitude: item.longitude, }}
              >
                <Callout><Text style={{ fontSize: 12 }}>{item.branch_name}</Text></Callout>
              </Marker>
            )

          })
        }
        <Marker
          coordinate={{ latitude: 24.925790, longitude: 67.089988, }}
          pinColor='green'
        >
          <Callout><Text style={{ fontSize: 12 }}>We</Text></Callout>

        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default PublicUserMap;