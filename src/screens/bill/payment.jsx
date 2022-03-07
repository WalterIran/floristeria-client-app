import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, ScrollView } from 'react-native';

const Payment = () => {
    const [titular, setTitular] = useState(null);
    const [numTarjeta, setNum] = useState(null);
    const [cvv, setCVV] = useState(null);
    const [mes, setMes] = useState(null);
    const [year, setYear] = useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.containerTitles}>
                    <Text style={styles.title}>Datos de la tarjeta</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='Titular de la tarjeta'
                        onChangeText={setTitular}
                    />
                    <View style={styles.containerRow}>
                        <TextInput 
                            style={[styles.input, {width:'65%'}]}
                            placeholder='Numero de tarjeta'
                            onChangeText={setNum}
                        />
                        <TextInput
                            style={[styles.input, {width:'30%'}]}
                            placeholder='CVV'
                            onChangeText={setCVV}
                        />
                    </View>
                    <View style={styles.containerRow}>
                        <TextInput 
                            style={[styles.input, {width:'47%'}]}
                            placeholder='Mes'
                            onChangeText={setMes}
                        />
                        <TextInput
                            style={[styles.input, {width:'47%'}]}
                            placeholder='Año'
                            onChangeText={setYear}
                        />
                    </View>
                </View>
                <Pressable
                    style={styles.btn}
                >
                    <Text style={styles.btnText} >Continuar</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    formContainer: {
        width: '100%',
        marginVertical: 16,
        paddingHorizontal: '10%',
        justifyContent: 'center'
        
    },
    containerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerTitles: {
        borderBottomColor: '#BFA658',
        borderBottomWidth: 2,
        marginBottom: 20
    },
    title: {
        fontSize: 24,
        marginVertical: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ababab',
        marginBottom: 24,
        height: 52,
        width: '100%',
        borderRadius: 12,
        paddingLeft: 12,
        fontSize: 18,
    },
    btn: {
        backgroundColor: '#BFA658',
        fontSize: 24,
        height: 60,
        width: '100%',
        justifyContent: 'center',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginBottom:30
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 24,
    }
});

export default Payment;