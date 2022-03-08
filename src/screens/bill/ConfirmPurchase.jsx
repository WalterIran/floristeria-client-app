import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, Pressable, ScrollView, Alert, ActivityIndicator } from 'react-native';
import Detail from '../../components/OrderDetail.component';
import useAuth from '../../hooks/useAuth';

//AXIOS
import axios from '../../api/axios';
const INSERT_URL = '/payment/registerbill/';
const PAY_URL = '/payment/doPayment/';

const ConfirmPurchase = () => {
    const { auth } = useAuth();
    const [detail, setDetail] = useState(null);
    const navigation = useNavigation();
    const [subtotal, setSubTotal] = useState(null);
    const [isv, setIsv] = useState(null);
    const [total, setTotal] = useState(null);

    var datos = {
        userId: auth?.user?.id,
        deliveryDate: '2022-02-28',
        taxAmount: 55.00,
        destinationPersonName: "Maria Dolmos",
        destinationPersonPhone: "982892",
        destinationAddress: "Los Hidalgos",
        destinationAddressDetails: "Casa 8",
        city: "TGU",
        dedicationMsg: "Te quiero",
        cartId: 33
    };

    var datosPago = {
        emailUser: auth?.user?.email,
        amount: "10000",
        tokenId: "tok_bypassPending",
        description: "Pago de compra en Interflora"
    };

    const insertBill = async () => {
        try {
            const response = await axios.post(
                INSERT_URL,
                JSON.stringify(datos),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: false
                }
            )
            .then(res =>{
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        } catch (error) {
            console.log(error);
            Alert.alert("Ocurrio un error al procesar su compra");
        }
    }

    const pay = async () => {
        try {
            const response = await axios.post(
                PAY_URL,
                JSON.stringify(datosPago),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: false
                }
            )
            .then(res =>{
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        } catch (error) {
            console.log(error);
            Alert.alert("Ocurrio un error al procesar su compra");
        }
    }

    const serchCartDetail = async () =>{
        try {
            const data = await axios.get('/shopping-cart/'+auth?.user?.id+'/find-user-cart-details');
            setDetail(data.data);
            calculos(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const calculos = (pDitail) =>{
        let subTotal = 0;

        for(let i = 0; i<pDitail.length; i++){
            subTotal += pDitail[i].price * pDitail[i].quantity;
        }

        let isv = subTotal * 0.15;
        let total = subTotal + isv;
        setSubTotal(Math.round(subTotal,2));
        setIsv(Math.round(isv,2));
        setTotal(Math.round(total));
    }

    useEffect(() =>{
        serchCartDetail();
    }, [])

    const goToSuccessfulPurchase = () => {
        navigation.navigate("SuccessfulPurchase");
    }

    return (
        <>
        {
            detail ? (
                <SafeAreaView style={styles.container}>
                    <ScrollView>
                        <View style={styles.subcontainer}>
                            <View style={styles.containerTitles}>
                                <Text style={styles.title}>Entrega</Text>
                            </View>
                            <Text>Fecha de entrega: {datos.deliveryDate}</Text>
                            <Text>Entrega a: {datos.destinationPersonName}</Text>
                            <Text>Dirección: {datos.destinationAddress}</Text>
                            <Text>Ciudad: {datos.city}</Text>
                            <Text>Telefono: {datos.destinationPersonPhone}</Text>
                            <View style={styles.containerTitles}>
                                <Text style={styles.title}>Tu compra</Text>
                            </View>
                            <View style={{marginVertical: 12}}>
                                {
                                    detail.map((item, index) => {
                                        return (
                                          <Detail key={item.productId} product={item.product.productName} cant={item.quantity} price={item.price} />
                                        );
                                    })
                                }
                            </View>
                            <View style={{marginVertical: 12}}>
                                <View style={styles.totals}>
                                    <Text style={styles.text}>Subtotal:</Text>
                                    <Text style={styles.text}>$ {subtotal}</Text>
                                </View>
                                <View style={styles.totals}>
                                    <Text style={styles.text}>ISV:</Text>
                                    <Text style={styles.text}>$ {isv}</Text>
                                </View>
                                <View style={styles.totals}>
                                    <Text style={styles.text}>TOTAL:</Text>
                                    <Text style={styles.text}>$ {total}</Text>
                                </View>
                            </View>
                            <Pressable
                                style={styles.btn}
                                onPress={goToSuccessfulPurchase}
                            >
                                <Text style={styles.btnText} >Confirmar</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            ): (
                <ActivityIndicator />
              )
        }        
        </>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    subcontainer:{
        backgroundColor: '#CDC4A9',
        margin: 20,
        padding: 20,
        borderRadius: 15
    },
    containerTitles: {
        borderBottomColor: '#505050',
        borderBottomWidth: 2,
        marginBottom: 20
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        color: '#505050'
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
        marginBottom:10
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 24,
    },
    text: {
        fontSize: 18,
    },
    totals: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

export default ConfirmPurchase;