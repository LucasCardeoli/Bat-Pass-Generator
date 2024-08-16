import React from 'react';
import {Text, View, Image } from 'react-native';
import { styles } from './Batlogo.Styles'
import batlogo from '../../../assets/The-Batman-Logo.png'

export function Batlogo() {
  return (
    <>
        <Text style={styles.title}>
            BAT PASS GENERATOR
        </Text>
        <Image source = {batlogo}
        style={{resizeMode:'contain',
        height:180 
        }}>

        </Image>
    </>
  );
}