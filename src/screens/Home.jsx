import React from 'react';
import { View, Image, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import MenuItem from '../components/MenuItem';

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#000'}}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', backgroundColor: '#fff' }}>
          <View style={{ width: '100%' }}>
              <View style={{width: '100%', backgroundColor: '#000', height: 75, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../assets/logo-nobg-opt.png')} style={{resizeMode: 'contain', height: '60%'}} />
              </View>
              <Image
                  source={require('../assets/Image2.jpg')}
                  style={{ width: '100%', resizeMode: 'contain', top: -6 }} />

              <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center', color: '#fff', position: 'absolute', right: 0, left: 0, top: 140, bottom: 0 }} >El amor nos conecta</Text>
              <Text style={{ fontSize: 12, fontWeight: '500', textAlign: 'center', color: '#fff', position: 'absolute', right: 0, left: 0, top: 180, bottom: 0 }} >Interflora nos une, díselo con flores</Text>
          </View>

          <View style={{width: '100%', paddingHorizontal: 12, alignItems: 'center', paddingBottom: 24}}>  
            <View style={{width: '100%', height: 3, marginVertical: 32, backgroundColor: "#000", justifyContent:'center', alignItems:'center'}}>
              <View style={{backgroundColor: '#fff', position: 'absolute', top: -12, paddingHorizontal: 8}}>
                <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center'}}>Boda</Text>
              </View>
            </View>

            <View style={styles.menuContainer}>
                <MenuItem itemImage={require('../assets/girasoles.jpg')} />
                <MenuItem itemImage={require('../assets/girasoles.jpg')} />
                <MenuItem itemImage={require('../assets/girasoles.jpg')} />
                <MenuItem itemImage={require('../assets/girasoles.jpg')} />
            </View>

            <View style={{width: '100%', height: 3, marginVertical: 32, backgroundColor: "#000", justifyContent:'center', alignItems:'center'}}>
              <View style={{backgroundColor: '#fff', position: 'absolute', top: -12, paddingHorizontal: 8}}>
                <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center'}}>San Valentín</Text>
              </View>
            </View>

            <View style={styles.menuContainer}>
              <MenuItem itemImage={require('../assets/carruzel1.jpg')} />
              <MenuItem itemImage={require('../assets/carruzel1.jpg')} />
              <MenuItem itemImage={require('../assets/carruzel1.jpg')} />
              <MenuItem itemImage={require('../assets/carruzel1.jpg')} />
            </View>
          </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
