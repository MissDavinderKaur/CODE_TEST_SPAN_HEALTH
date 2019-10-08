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
            <Text style={styles.blogText}>Interpreting HbA1c test data</Text>
          </View>
          <View style={styles.blog}>
            <Image
            source={require('../assets/images/blogImage2.jpg')}
            style={styles.blogImage}
            />
            <Text style={styles.blogText}>Find the right fasting regime</Text>
          </View>
          <View style={styles.blog}>
            <Image
            source={require('../assets/images/blogImage3.jpg')}
            style={styles.blogImage}
            />
            <Text style={styles.blogText}>Supercharging your body</Text>
          </View>
          <View style={styles.blog}>
            <Image
            source={require('../assets/images/blogImage4.jpg')}
            style={styles.blogImage}
            />
            <Text style={styles.blogText}>How to build healthy habits</Text>
          </View>
          <View style={styles.blog}>
            <Image
            source={require('../assets/images/blogImage5.jpg')}
            style={styles.blogImage}
            />
            <Text style={styles.blogText}>Intermittent fasting</Text>
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
    width: '100%',
    padding: 10
  },
  blog: {
    marginTop: 20,
    width: '90%',
    height: 150,
  },
  blogImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  blogText: {
    color: '#8ECFCF',
    color: 'black',
    fontSize: 15,
    fontWeight: '300',
    marginTop: -15,
    backgroundColor: 'rgba(248, 249, 249, 0.9)'
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
