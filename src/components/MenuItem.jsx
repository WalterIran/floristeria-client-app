import React from 'react';
import {
    View, 
    Image, 
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { formatter } from '../utils/formatter';
import { useNavigation } from '@react-navigation/native';


const MenuItem = ({itemImage, title, description, price, discount, productId}) => {
    const navigation = useNavigation();

    const goTo = (id) => {
        navigation.navigate('ProductScreen', {productId});
        
    }
    
    const priceStyle = {
        fontWeight: '700',
        color: discount > 0 ? '#aaa' :'#333',
        textDecorationLine: discount > 0 ? 'line-through' : 'none'
    }

    return (
        <TouchableOpacity style={{width: '100%'}} onPress={() => goTo(productId)}>
        <View style={styles.menuItem}>
            <Image
                source={{uri:itemImage}}
                style={styles.image}
            />
            <Text style={styles.Text}> {title}</Text>
            <Text style={styles.description} > {description}</Text>
            <View style={styles.priceSection}> 
                {discount > 0 && (
                        <>
                        <Text style={styles.discount}>{formatter.format(discount)}</Text>
                        <Text> - </Text>
                    </>
                )}
                <Text style={priceStyle}> {formatter.format(price)}</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
}

export default MenuItem;

const styles = StyleSheet.create({
    menuItem: {
        width: 170,
        height: 200,
        marginVertical: 10,
        marginHorizontal: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: '80%',
        opacity: 0.8,
        borderColor: '#fff',
        borderWidth: 3
    },
    Text: {
        textAlign: 'center',
        color: '#CEC045'

    },
    description: {
        textAlign: 'center',
        fontSize: 11

    },
    price: {
        textAlign: 'center',
        fontWeight: 'bold'
        
    },
    priceSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
})