import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    appcontainer: {
      flex: 1,
      backgroundColor: '#333333',
      alignItems: 'center',/*itens alinhados no centro, esse vira o eixo em que as coisas serão alinhadas*/
      justifyContent: 'center',/*agora as coisas serão alinhadas apartir do eixo centro, ou seja, irão ou pro centro, cima ou baixo*/
    },

    logoContainer:{
    flexDirection:'column',
    borderColor:'white',
    borderWidth:2,
    justifyContent:'center',
    alignSelf:'center',
    marginBottom:60,
    paddingTop:20,
    paddingHorizontal:30,
    paddingBottom:15,
    backgroundColor:'#4D4D4D'
    },

    inputContainer:{
        width:'80%',
        borderColor:'red',
        flexDirection:"column",
        alignItems:'center',
    }
  });

  export default styles