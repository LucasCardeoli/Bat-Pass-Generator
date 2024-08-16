import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import {BatTextinput} from
'../BatTextinput/BatTextinput';
import { styles } from
'./BatbuttonStyle'
import generatePass from '../../services/passwordServices';
import * as Clipboard from 'expo-clipboard'

export function Batbutton() {
const [pass, setPass]= useState('')
  
function handleGenerateButton() {
  let generateToken= generatePass()
  setPass(generateToken)}
function handleCopyButton(){
  Clipboard.setStringAsync(pass)
}
return (
    <>
<BatTextinput pass={pass}/>

<Pressable
onPress={handleGenerateButton}
style={styles.button}
>

  
<Text style={styles.text}>GENERATE</Text>
    </Pressable>
    <Pressable
onPress={handleCopyButton}
style={styles.button}
>
    <Text style={styles.text}>⚡ COPY</Text>
    </Pressable>
    </>
  );
}