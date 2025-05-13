// Import necessary components
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';

const books = [
  {
    title: 'Harry Potter',
    image: { uri: 'https://covers.openlibrary.org/b/id/7984916-L.jpg' }
  },
  {
    title: 'Diary of a Wimpy Kid',
    image: { uri: 'https://m.media-amazon.com/images/I/81R2N4PRuUL._AC_UF1000,1000_QL80_.jpg' }
  },
  {
    title: 'The Hunger Games',
    image: { uri: 'https://m.media-amazon.com/images/I/61I24wOsn8L.jpg' }
  },
  {
    title: 'Percy Jackson',
    image: { uri: 'https://m.media-amazon.com/images/I/81Q54mEEcBL._AC_UF1000,1000_QL80_.jpg' }
  },
  {
    title: 'Dog Man',
    image: { uri: 'https://m.media-amazon.com/images/I/8118RTT81LL.jpg' }
  },
];

// Functional Component
export default function PlaceOrderScreen() {
  // TODO: Use useState to track item quantities
  // TODO: Use Button to increase/decrease counts
  // TODO: Use Alert to display the final order
  // TODO: Use Image, Text, and ScrollView to organize UI
  const [counts, setCounts] = useState(Array(books.length).fill(0));
  // increment count if user clicks plus
  const increment = (index) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
  };

  // decrease if user clicks -
  const decrement = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 0) newCounts[index]--;
    setCounts(newCounts);
  };

  // place order for user
  const placeOrder = () => {
    const summary = books
      .map((book, i) => `${book.title}: ${counts[i]}`)
      .filter(item => !item.endsWith(': 0'))
      .join('\n');

    Alert.alert('Order Summary', summary || 'No books selected.');
  };

  // resets counter to 0 if user clicks reset
  const resetOrder = () => {
    setCounts(Array(books.length).fill(0));
  };
  


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Place Your Book Order</Text>

      {books.map((book, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.title}>{book.title}</Text>
          <Image source={book.image} style={styles.image} />
          <View style={styles.counterContainer}>
            <TouchableOpacity onPress={() => decrement(index)}>
              <Text style={styles.counterButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.count}>{counts[index]}</Text>
            <TouchableOpacity onPress={() => increment(index)}>
              <Text style={styles.counterButton}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity onPress={placeOrder}>
        <Text style={styles.placeOrder}>Place Order</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={resetOrder}>
        <Text style={styles.reset}>Reset</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  item: {
    alignItems: 'center',
    marginBottom: 25,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  image: {
    width: 90,
    height: 130,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    fontSize: 24,
    paddingHorizontal: 15,
    color: '#007AFF',
  },
  count: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  placeOrder: {
    color: 'green',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  reset: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});