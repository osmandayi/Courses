import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import CourseInput from './components/CourseInput';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [courses, setCourses] = useState([]);


  const startModal = () => {
    setModalIsVisible(true);
  }
  const endModal = () => {
    setModalIsVisible(false);
  }

  const addCourse = (course) => {
    setCourses((currentCourses) => [...currentCourses, { text: course, id: Math.round(Math.random() * 100 + 1) }]);
    endModal();
  }

  console.log("COURSES :", courses);
  return (

    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title='Kurs Ekle' color='red' onPress={startModal} />
        <CourseInput visible={modalIsVisible} onCancel={endModal} onAddCourse={addCourse} setVisible={setModalIsVisible} />
        <View>
          <FlatList data={courses} renderItem={({ item }) => (
            <View style={styles.courseItem}>
              <Text style={styles.courseText}>{item.text}</Text>
            </View>
          )} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  courseItem: {
    backgroundColor: '#888',
    margin: 8,
    borderRadius: 5,
  },
  courseText: {
    padding: 8,
    color: 'white',
  },
});
