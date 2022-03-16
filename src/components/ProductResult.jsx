import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { formatter } from '../utils/formatter';

const ProductResult = ({img, title, desc, price, productId, discount}) => {
    const navigation = useNavigation();

    const goTo = (id) => {
        navigation.navigate('ProductScreen', {productId})
    }

    const priceStyle = {
        fontWeight: '700',
        color: discount > 0 ? '#aaa' :'#333',
        textDecorationLine: discount > 0 ? 'line-through' : 'none'
    }

  return (
      <TouchableOpacity style={{width: '100%'}} onPress={() => goTo(productId)}>
        <View style={styles.productContainer}>
            <View style={styles.imgContainer}>
                <Image source={{uri: img}} style={styles.img} />
            </View>
            <View style={styles.descContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
                <View style={styles.priceSection}>
                    {discount > 0 && (
                        <>
                            <Text style={styles.discount}>{formatter.format(discount)}</Text>
                            <Text> - </Text>
                        </>
                    )}
                    <Text style={priceStyle}>{formatter.format(price)}</Text>
                </View>
            </View>
        </View>
      </TouchableOpacity>
  )
}

export default ProductResult

const styles = StyleSheet.create({
    productContainer: {
        flexDirection: 'row',
        borderBottomColor: "#888",
        borderBottomWidth: 1.5,
        paddingVertical: 10,
    },
    imgContainer: {
        width: 135,
        height: 135,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 12,
        overflow: 'hidden',
    },
    img: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    },
    descContainer: {
        flex: 1,
        paddingHorizontal: 8,
        justifyContent: 'space-evenly'
    },
    title: {
        fontWeight: 'bold',
        color: '#BFA658',
        fontSize: 18,
    },
    desc: {
        color: "#666"
    },
    priceSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    discount: {
        fontWeight: '700',
        color: '#333',
    },
});