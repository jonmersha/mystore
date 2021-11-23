import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';



export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('https://store.besheger.com/retailer');
      const json = await response.json();
      setData(json.details);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ Retailer_id }, index) => Retailer_id}
          renderItem={({ item }) => (

            <Text>{item.first_name}, {item.midle_name},{item.last_name},{item.last_name}</Text>
 
          )}
        />
      )}
    </View>
  );
};