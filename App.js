import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CourseList from './components/CourseList';

const schedule = {
  "title": "CS Courses for 2018-2019",
  "courses": [
    {
      "id": "F101",
      "title": "Computer Science: Concepts, Philosophy, and Connections",
      "meets": "MWF 11:00-11:50"
    },
    {
      "id": "F110",
      "title": "Intro Programming for non-majors",
      "meets": "MWF 10:00-10:50"
    },
    {
      "id": "F111",
      "title": "Fundamentals of Computer Programming I",
      "meets": "MWF 13:00-13:50"
    },
    {
      "id": "F211",
      "title": "Fundamentals of Computer Programming II",
      "meets": "TuTh 12:30-13:50"
    }
  ]
};

const App = () => {
  return (
    <View style={styles.container}>
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} />
    </View>
  );
}

const Banner = ({ title }) => (
  <Text style={styles.bannerStyle}>{title}</Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  courseList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerStyle: {
    color: '#888',
    fontSize: 32,
  }
});

export default App;