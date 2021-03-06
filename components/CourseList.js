import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Course from './Course';

const CourseList = ({ courses }) => (
    <View style={styles.courseList}>
        {courses.map(course => <Course key={course.id} course={course} />)}
    </View>
);

const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default CourseList;