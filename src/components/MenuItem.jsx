import React from 'react';
import {
    View, 
    Image, 
    StyleSheet,
    Text
} from 'react-native';

export default class MenuItem extends React.Component {
    render() {
        return (
            <View style={styles.menuItem}>
                <Image
                source={this.props.itemImage}
                style={styles.image} />
                <Text style={styles.Text}> Flores Rojas</Text>
                <Text style={styles.descripcion}> Rojo sobre lienzo Blanco</Text>
                <Text style={styles.Precio}> 59.99€</Text>
                </View>
     );
    }
}

const styles = StyleSheet.create({
    menuItem: {
        width: 170,
        height: 200,
        padding: 15,
        margin: 10
        
     
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
    descripcion: {
        textAlign: 'center',
        fontSize: 11

    },
    Precio: {
        textAlign: 'center',
        fontWeight: 'bold'
        
    }
})