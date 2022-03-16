import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, Pressable, ScrollView, Alert, ActivityIndicator } from 'react-native';
import Detail from '../../components/OrderDetail.component';
import useAuth from '../../hooks/useAuth';

//AXIOS
import axios from '../../api/axios';
const INSERT_URL = '/payment/registerbill/';
const PAY_URL = '/payment/doPayment/';

const ConfirmPurchase = ({route}) => {
    const { auth } = useAuth();
    const [detail, setDetail] = useState(null);
    const navigation = useNavigation();
    const [subtotal, setSubTotal] = useState(null);
    const [isv, setIsv] = useState(null);
    const [total, setTotal] = useState(null);

    var datosDelivery = route.params.data;

    const insertBill = async () => {
        datosDelivery.cartId = detail[0].cartId;
        datosDelivery.taxAmount = isv;

        try {
            const response = await axios.post(
                INSERT_URL,
                JSON.stringify(datosDelivery),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: false
                }
            )
            .then(res =>{
                console.log(res);
                goToSuccessfulPurchase();
            })
            .catch(err => {
                console.log(err);
                Alert.alert("Error", "Error al procesar la compra");
            })
        } catch (error) {
            console.log(error);
            Alert.alert("Error","Ocurrio un error al procesar su compra");
        }
    }

    const pay = async () => {
        try {
            var datosPago = {
                emailUser: auth?.user?.email,
                amount: (total*100).toString(),
                tokenId: "tok_bypassPending",
                description: "Pago de compra en Interflora"
            };

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
                insertBill();
            })
            .catch(err => {
                console.log(err);
                Alert.alert("Error al recibir el pago");
            })
        } catch (error) {
            console.log(error);
            Alert.alert("Ocurrio un error al procesar su pago");
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
        setSubTotal(subTotal.toFixed(2));
        setIsv(isv.toFixed(2));
        setTotal(total.toFixed(2));
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
                            <Text>Fecha de entrega: {datosDelivery.deliveryDate}</Text>
                            <Text>Entrega a: {datosDelivery.destinationPersonName}</Text>
                            <Text>Dirección: {datosDelivery.destinationAddress}</Text>
                            <Text>Ciudad: {datosDelivery.city}</Text>
                            <Text>Telefono: {datosDelivery.destinationPersonPhone}</Text>
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
                                onPress={pay}
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