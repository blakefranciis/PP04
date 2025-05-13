// Import necessary components
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

// Book offers data
const offers = [
  {
    title: 'Harry Potter Series',
    description: 'Get 25% off on the complete collection',
    discount: '25%'
  },
  {
    title: 'Summer Reading Bundle',
    description: 'Buy 2 books, get 1 free from our summer selection',
    discount: 'Buy 2 Get 1'
  },
  {
    title: 'Young Adult Bestsellers',
    description: 'Save 20% on all young adult bestsellers this month',
    discount: '20%'
  },
  {
    title: 'Adventure Collection',
    description: 'Percy Jackson and other adventure titles at dicsountedd prices',
    discount: '30%'
  },
  {
    title: 'Children\'s Books',
    description: 'All Dog Man and other kids\' favorites with exclusive discount',
    discount: '15%'
  },
];

export default function BakeryOffer() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Special Book Offers</Text>

      <View style={styles.card}>
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>25%</Text>
        </View>
        <Text style={styles.title}>Harry Potter Series</Text>
        <Text style={styles.description}>Get 25% off on the complete collection</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>Buy 2 Get 1</Text>
        </View>
        <Text style={styles.title}>Summer Reading Bundle</Text>
        <Text style={styles.description}>Buy 2 books, get 1 free from our summer selection</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>20%</Text>
        </View>
        <Text style={styles.title}>Young Adult Bestsellers</Text>
        <Text style={styles.description}>Save 20% on all young adult bestsellers this month</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>30%</Text>
        </View>
        <Text style={styles.title}>Adventure Collection</Text>
        <Text style={styles.description}>Percy Jackson and other adventure titles at discounted prices</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>15%</Text>
        </View>
        <Text style={styles.title}>Children's Books</Text>
        <Text style={styles.description}>All Dog Man and other kids' favorites with exclusive discount</Text>
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
  discountBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#ff4757',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    zIndex: 1,
  },
  discountText: {
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