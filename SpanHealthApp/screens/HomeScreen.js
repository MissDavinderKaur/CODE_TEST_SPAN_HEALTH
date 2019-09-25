import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
        <View style={styles.getStartedOptionsContainer}>
          <Text style={styles.foodHeading}>Food</Text>
          <View style={styles.getStartedOptions}>
            <View>
              <Image
              source={require('../assets/images/blog.jpg')}
              style={styles.optionImage}
              />
              <Text style={styles.optionText}>Blog</Text>
            </View>
            <View>
              <Image
              source={require('../assets/images/recipes.jpg')}
              style={styles.optionImage}
              />
              <Text style={styles.optionText}>Recipes</Text>
            </View>
          </View>
        </View>

        <View style={styles.blogFeed}>
          <View style={styles.blog}>
            <Image
            source={require('../assets/images/blogImage1.jpg')}
            style={styles.blogImage}
            />
            <Text style={styles.blogText}>How to interpret HbA1c test data</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedOptionsContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  foodHeading: {
    fontSize: 40,
    color: '#8ECFCF',
    textAlign: 'center',
  },
  getStartedOptions: {
    flex: 1,
    flexDirection: 'row'
  },
  optionImage: {
    width: 100,
    height: 100,
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 20,
  },
  optionText: {
    fontSize: 20,
    marginTop: 10,
    color: '#8ECFCF',
    textAlign: 'center',
  },
  blogFeed: {
    alignItems: 'center',
    marginTop: 5,
  },
  blog: {

  },
  blogImage: {
    width: 300,
    resizeMode: 'center',
  },
  blogText: {

  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
});
