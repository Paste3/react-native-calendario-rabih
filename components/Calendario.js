import React from 'react';
import { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { Agenda } from 'react-native-calendars';

function Calendario() {
    const [año,setAño] = useState("")
    var anotaciones = {
        "2022-12-04": [{ name: "RABIH4" }],
        "2022-12-05": [{ name: "RABIH5" }],
        "2022-12-06": [{ name: "RABIH6" }],
        "2022-12-07": [{ name: "RABIH7" }],
        "2022-12-08": [{ name: "RABIH8" }]
    }
    function eliminarTarea() {
        console.log(año)
        delete anotaciones[año]
    }
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Agenda
                    selected="2022-12-01"
                    items={anotaciones}
                    onDayPress={day => {
                        console.log(day)
                        setAño(day.dateString)
                    }}
                    renderItem={(item, isFirst) => (
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.itemText}>{item.name}</Text>
                            <TouchableOpacity style={styles.roundButton1} title="Eliminar tarea" onClick={eliminarTarea()}><Text>Eliminar tarea</Text></TouchableOpacity>
                        </TouchableOpacity>
                    )}
                />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'center'
    },
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
    },
    itemText: {
        color: '#888',
        fontSize: 16,
    }, roundButton1: {
        width: 120,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'red',
    }
});

export default Calendario;