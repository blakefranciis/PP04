// Import necessary components
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image} from 'react-native';
// Functional Component

const books = [
  {
    title: 'Harry Potter',
    description: 'A young wizard’s journey at Hogwarts.',
    image: { uri: 'https://covers.openlibrary.org/b/id/7984916-L.jpg' }
  },
  {
    title: 'Diary of a Wimpy Kid',
    description: 'Greg Heffley’s middle school adventures.',
    image: { uri: 'https://m.media-amazon.com/images/I/81R2N4PRuUL._AC_UF1000,1000_QL80_.jpg' }
  },
  {
    title: 'The Hunger Games',
    description: 'Katniss Everdeen fights to survive in a deadly game.',
    image: { uri: 'https://m.media-amazon.com/images/I/61I24wOsn8L.jpg' }
  },
  {
    title: 'Percy Jackson',
    description: 'A modern demigod’s mythological adventures.',
    image: { uri: 'https://m.media-amazon.com/images/I/81Q54mEEcBL._AC_UF1000,1000_QL80_.jpg' }
  },
  {
    title: 'Dog Man',
    description: 'Part dog, part man, all hero in this comic adventure.',
    image: { uri: 'https://m.media-amazon.com/images/I/8118RTT81LL.jpg' }
  },
];


export default function BakeryMenuScreen() {
  // TODO: Create a menu screen using components like:
  // ScrollView, Image, Text, and StyleSheet

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Popular Book Titles</Text>
      {books.map((book, index) => (
        <View key={index} style={styles.card}>
          <Image source={book.image} style={styles.image} />
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.description}>{book.description}</Text>
        </View>
      ))}
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fddde6',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 140,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
});