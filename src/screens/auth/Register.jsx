import { StyleSheet, Text, View, ScrollView, Image, TextInput, Pressable, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Errors from '../../components/Errors';

//AXIOS
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';
const REGISTER_URL = '/users/register-customer'

const Register = () => {
    const { setAuth } = useAuth();
    const navigation = useNavigation();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const goBack = () => {
        navigation.goBack();
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formValue) => {
            setLoading(true);
            try {
                const response = await axios.post(REGISTER_URL,
                    JSON.stringify(formValue),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    }
                );
                const user = response?.data;
                await storeData(user);
                const res = await getData();
                setAuth({...res});
            } catch (error) {
                if(!error?.response) {
                    setErrors({Servidor: 'Error en el servidor'})
                }else if(error.response?.status === 401) {
                    setErrors({Inautorizado: 'Correo o contraseña incorrecta'});
                }
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
    });

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <KeyboardAvoidingView behavior='position' style={{backgroundColor: '#fff',justifyContent: 'center',width: '100%'}}>
            <Pressable onPress={goBack} style={styles.backBtn}>
                <IonIcons name="arrow-back" size={32} color='#777' />
            </Pressable>
            <Image style={styles.img} source={require('../../assets/interflora.jpg')} />
            <Text style={styles.title} >
                Crea una cuenta
            </Text>
            <View style={styles.formContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between',width: '100%'}}>
                    <TextInput
                        style={[styles.input, {flex: 1, marginRight: 6}]}
                        placeholder='Nombre'
                        value={formik.values.userName}
                        onChangeText={(text) => formik.setFieldValue('userName', text)}
                    />
                    <TextInput
                        style={[styles.input, {flex: 1}]}
                        placeholder='Apellido'
                        value={formik.values.userLastname}
                        onChangeText={(text) => formik.setFieldValue('userLastname', text)}
                    />

                </View>
                <TextInput
                    style={styles.input}
                    placeholder='Correo'
                    autoCapitalize='none'
                    value={formik.values.email}
                    onChangeText={(text) => formik.setFieldValue('email', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Contraseña'
                    secureTextEntry={true}
                    autoCapitalize='none'
                    value={formik.values.password}
                    onChangeText={(text) => formik.setFieldValue('password', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Confirmar Contraseña'
                    secureTextEntry={true}
                    autoCapitalize='none'
                    value={formik.values.repeatPassword}
                    onChangeText={(text) => formik.setFieldValue('repeatPassword', text)}
                />
                <Errors errors={formik.errors} title='Errores de campos' />
                <Errors errors={errors} title='Mensajes del servidor' />
                <Pressable
                    style={styles.btn}
                    onPress={formik.handleSubmit}
                >
                    <Text style={styles.btnText} >Crear cuenta</Text>
                    {loading && <ActivityIndicator size='small' color="#fff"/>}
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default Register;

const initialValues = {
    userName: '',
    userLastname: '',
    email: '',
    password: '',
    repeatPassword: '',
}

function validationSchema(){
    return {
        userName: Yup.string().required("Campo requerido"),
        userLastname: Yup.string().required("Campo requerido"),
        email: Yup.string().required("Campo requerido").email("Correo inválido"),
        password: Yup.string().required("Campo requerido"),
        repeatPassword: Yup.string().oneOf([Yup.ref('password'), null],'Confirmar contraseña debe ser igual a contraseña'),
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    backBtn: {
        backgroundColor: '#dddd',
        borderRadius: 100,
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 16,
        left: 16,
        zIndex: 2
    },
    img: {
        width: '80%',
        height: 120,
        marginVertical: 24,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 24,
    },
    formContainer: {
        width: '100%',
        alignItems: 'center',
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
        fontSize: 24
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
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 24,
    }
});