import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Pressable } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

const ChangePassword = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }
  return (
    <SafeAreaView style={styles.container}>
        <Pressable onPress={goBack} style={styles.backBtn}>
            <IonIcons name="arrow-back" size={32} color='#777' />
        </Pressable>
        <Image style={styles.imgFloat} source={require('../../assets/interflora.jpg')} />
        <Text style={[styles.text, styles.title]} >
            Cambia tu contraseña
        </Text>
        <Text style={styles.text} >
            Introduce el código enviado al correo e introduce tu nueva contraseña
        </Text>
      <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder='Código de verificación'
          />
          <TextInput
            style={styles.input}
            placeholder='Nueva contraseña'
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder='Confirmar contraseña'
            secureTextEntry={true}
          />
          <Pressable
            style={styles.btn}
          >
              <Text style={styles.btnText} >Guardar</Text>
          </Pressable>
      </View>
      <Pressable style={{width: "80%"}}><Text style={[styles.text, styles.link]} >Reenviar código a mi correo</Text></Pressable>

    </SafeAreaView>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
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
    imgFloat: {
        width: '80%',
        height: 120,
        marginVertical: 24,
        resizeMode: 'contain',
    },
    img: {
        width: '80%',
        height: 120,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 12,
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        width: '80%',
        marginBottom: 16
    },
    link: {
        color: '#0042EC',
        textDecorationLine: "underline",
        width: '100%'
    },
    formContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 30,
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