import { Alert, Button, Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function CourseInput({ visible, onCancel, onAddCourse }) {
    const [enteredCourseText, setEnteredCourseText] = useState("");

    const addCourseHandler = () => {
        onAddCourse(enteredCourseText);
        setEnteredCourseText("");
    }

    return (
        <Modal
            animationType="slide"
            visible={visible}>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require("../assets/images/cblogo.png")} />
                <TextInput style={styles.textInput} onChangeText={setEnteredCourseText} placeholder='Yeni Kurs Ekle !' />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='İptal Et' color='red' onPress={onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Ekle' color='blue' onPress={addCourseHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#888',
        padding: 15,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 20,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        backgroundColor: 'pink',
        borderColor: 'pink',
        padding: 10,
        borderRadius: 10,
        width: "100%",
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 15,
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
})