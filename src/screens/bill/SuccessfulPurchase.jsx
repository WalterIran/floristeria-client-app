import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Image } from 'react-native';

const SuccessfulPurchase = () => {
    const navigation = useNavigation();

    const goToHome = () => {
        navigation.navigate("Cart");
        navigation.navigate("Home");
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.img} source={require('../../assets/sp.png')} />
            <Text style={styles.text}>Compra exitosa</Text>
            <Pressable style={styles.btn} onPress={goToHome}>
                <Text style={styles.btnText} >Ir a inicio</Text>
            </Pressable>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    img: {
        width: 150,
        height: 150,
        marginBottom: 10,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 24,
        marginBottom: 24
    },
    btn: {
        backgroundColor: '#BFA658',
        fontSize: 24,
        height: 60,
        width: 250,
        justifyContent: 'center',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginBottom:10
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 24,
    },
});

export default SuccessfulPurchase;