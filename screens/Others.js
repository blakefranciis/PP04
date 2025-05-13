// Import necessary components
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

// Bookstore events and additional services data
const bookstoreItems = [
  {
    title: 'Author Meet & Greet',
    description: 'Meet bestselling author Jane Smith on May 20th at 6pm',
    tag: 'EVENT'
  },
  {
    title: 'Book Club',
    description: 'Join our monthly book club! This month: "The Midnight Library"',
    tag: 'CLUB'
  },
  {
    title: 'Children\'s Story Time',
    description: 'Every Saturday at 11am. Bring your little ones for children stories',
    tag: 'EVENT'
  },
  {
    title: 'Reading Accessories',
    description: 'Bookmarks, reading lights, and book stands now available in-store',
    tag: 'PRODUCTS'
  },
  {
    title: 'Book Repair Service',
    description: 'Restore your beloved books with our professional repair service',
    tag: 'SERVICE'
  },
];

export default function BookstoreOthersScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Bookstore Events & Services</Text>

      <View style={styles.card}>
        <View style={styles.tagBadge}><Text style={styles.tagText}>EVENT</Text></View>
        <Text style={styles.title}>Author Meet & Greet</Text>
        <Text style={styles.description}>Meet bestselling author Jane Smith on May 20th at 6pm</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.tagBadge}><Text style={styles.tagText}>CLUB</Text></View>
        <Text style={styles.title}>Book Club</Text>
        <Text style={styles.description}>Join our monthly book club! This month: "The Midnight Library"</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.tagBadge}><Text style={styles.tagText}>EVENT</Text></View>
        <Text style={styles.title}>Children's Story Time</Text>
        <Text style={styles.description}>Every Saturday at 11am. Bring your little ones for children stories</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.tagBadge}><Text style={styles.tagText}>PRODUCTS</Text></View>
        <Text style={styles.title}>Reading Accessories</Text>
        <Text style={styles.description}>Bookmarks, reading lights, and book stands now available in-store</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.tagBadge}><Text style={styles.tagText}>SERVICE</Text></View>
        <Text style={styles.title}>Book Repair Service</Text>
        <Text style={styles.description}>Restore your beloved books with our professional repair service</Text>
      </View>
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
    position: 'relative',
  },
  tagBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#5f27cd',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    zIndex: 1,
  },
  tagText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
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