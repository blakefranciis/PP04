// Import necessary components
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet} from 'react-native';

const csuImage = {

  uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Colorado_State_Rams_logo.svg/1200px-Colorado_State_Rams_logo.svg.png',
 
};


// Functional Component
export default function BakeryOverviewScreen() {
  // TODO: Complete the Overview/About screen using components like:
  // ScrollView, Text, Image, and StyleSheet

  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* CSU Logo */}
      <Image source={csuImage} style={styles.logo} />

      {/* Title */}
      <Text style={styles.title}>Colorado State University Bookstore</Text>

      {/* Timings */}
      <Text style={styles.sectionHeader}>Timings:</Text>
      <Text style={styles.text}>Mon–Fri: 8:00 AM – 6:00 PM</Text>
      <Text style={styles.text}>Sat: 10:00 AM – 5:00 PM</Text>
      <Text style={styles.text}>Sunday: Closed</Text>

      {/* Location */}
      <Text style={styles.sectionHeader}>Location:</Text>
      <Text style={styles.text}>
        8032 Campus Delivery,{"\n"}
        Lory Student Center,{"\n"}
        Fort Collins, CO 80523
      </Text>

      {/* About */}
      <Text style={styles.sectionHeader}>About Us:</Text>
      <Text style={styles.text}>
        The CSU Bookstore is your on-campus source for textbooks, school supplies, Ram gear, and technology. We support student success by providing essential resources, and all proceeds stay on campus to benefit Colorado State University programs and initiatives.
      </Text>

      {/* Contact */}
      <Text style={styles.sectionHeader}>Contact:</Text>
      <Text style={styles.text}>Phone: (970) 491-0546</Text>
      <Text style={styles.text}>Email: csu.bookstore@colostate.edu</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
  },
  text: {
    fontSize: 14,
    marginTop: 5,
    lineHeight: 20,
  },
});