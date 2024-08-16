import React from "react"
import {Text, View} from "react-native" /*componentes */
import { StatusBar } from 'expo-status-bar';
import styles from './Style'
import { Batlogo } from "../components/Batlogo/Batlogo";
import { BatTextinput } from "../components/BatTextinput/BatTextinput";
import { Batbutton } from "../components/Batbutton/Batbutton";


export default function Home(){
    return(
       <View style={styles.appcontainer}>
        <View style={styles.logoContainer}>
        <Batlogo/>
        </View>
        <View style={styles.inputContainer}>
            
            <Batbutton/>
        </View>
          <Text style={{color:'white',
            fontWeight:"bold",
            marginTop:10,
          }}>Wayne Tech</Text>


        <StatusBar style="light" />
       </View>
     )
}

