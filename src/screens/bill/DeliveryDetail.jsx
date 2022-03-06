import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const DeliveryDetail = () => {
    const [selectedCity, setSelectedCity] = useState();
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const navigation = useNavigation();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const goToPayment = () => {
        navigation.navigate("ConfirmPurchase");
    }

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.formContainer}>
                    <View style={styles.containerTitles}>
                        <Text style={styles.title}>Día de entrega</Text>
                    </View>
                    <View>
                        <Pressable
                            style={styles.btn}
                            onPress={showDatepicker}
                        >
                            <Text style={styles.btnText} >Elegir fecha</Text>
                        </Pressable>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                        <Text style={styles.text}>
                            Un florista entregará tus flores de 10h a 19h de lunes a viernes 
                            y de 10h a 14h sábados y domingos.
                        </Text>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>
                                Entrega en la fecha que indiques{"\n"}{"\n"}
                                Tu ramo entregado en mano por un florista de interflora{"\n"}{"\n"}
                                Preparado el mismo día por un florista local{"\n"}{"\n"}
                                Más de 50,000 floristerias en todo el mundo
                            </Text>
                        </View>
                    </View>
                    <View style={styles.containerTitles}>
                        <Text style={styles.title}>¿Para quien va dirigido?</Text>
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre'
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder='Apellido'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Telefono'
                        />
                    </View>
                    <View style={styles.containerTitles}>
                        <Text style={styles.title}>Dirección de entrega</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>
                            Para agilizar la entrega de tu pedido y evitar demoras innecesarias, 
                            es muy importante para nosotros que introduzcas los datos de dirección 
                            de forma correcta, siguiendo las pautas que te indicamos en cada campo.
                        </Text>
                        <TextInput
                            style={styles.inputArea}
                            multiline={true}
                            numberOfLines={5}
                            placeholder='Dirección'
                        />
                        <TextInput
                            style={styles.inputArea}
                            multiline={true}
                            numberOfLines={5}
                            placeholder='Puntos de referencia'
                        />
                        <View style={styles.pickerView}>
                            <Picker
                                selectedValue={selectedCity}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedCity(itemValue)
                                }
                            >
                                <Picker.Item label="Ciudad" value="Ciudad" enabled={false} style={{color: 'gray'}}/>
                                <Picker.Item label="Tegucigalpa" value="TGU" />
                                <Picker.Item label="San Pedro Sula" value="SPS" />
                                <Picker.Item label="Danlí" value="DNL" />
                                <Picker.Item label="La Ceiba" value="LCE" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.containerTitles}>
                        <Text style={styles.title}>Incluye tu dedicatoria</Text>
                    </View>
                    <View>
                        <TextInput
                            style={styles.inputArea}
                            multiline={true}
                            numberOfLines={5}
                            placeholder='Dedicatoria'
                        />
                    </View>
                    <Pressable
                        style={styles.btn}
                        onPress={goToPayment}
                    >
                        <Text style={styles.btnText} >Continuar</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        marginBottom: 20,
        fontSize: 16
    },
    backBtn: {
        backgroundColor: '#dddd',
        borderRadius: 100,
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 64,
        left: 16,
        zIndex: 2
    },
    title: {
        fontSize: 24,
        marginVertical: 15,
    },
    formContainer: {
        width: '100%',
        marginVertical: 16,
        paddingHorizontal: '10%'
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
    pickerView: {
        borderWidth: 1,
        borderColor: '#ababab',
        marginBottom: 24,
        height: 52,
        width: '100%',
        borderRadius: 12,
        paddingLeft: 12,
        justifyContent: 'center'
    },
    inputArea: {
        borderWidth: 1,
        borderColor: '#ababab',
        marginBottom: 24,
        height: 100,
        width: '100%',
        borderRadius: 12,
        paddingLeft: 12,
        paddingTop: 12,
        fontSize: 18,
        textAlignVertical: 'top'
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
    },
    containerTitles: {
        borderBottomColor: '#BFA658',
        borderBottomWidth: 2,
        marginBottom: 20
    },
    infoContainer:{
        borderWidth: 1,
        borderColor: '#BFA658',
        borderRadius: 12,
        padding: 12
    },
    infoText:{
        color: '#BFA658'
    }
});

export default DeliveryDetail;