import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    container : {
        flex : 1,
        justifyContent : 'center',
        alignContent : 'center'
    },
    Heading:{
        fontWeight: 'bold',
        color: 'white',
        marginTop : 5, 
        fontSize: 20,
      },
      SubHeading:{
        fontWeight: '600',
        color: 'black',
        alignSelf : 'center',
        marginHorizontal : 10,
        marginTop : 5, 
        fontSize: 20,
      },
      text:{
        fontWeight: '400',
        color: 'black',
        marginHorizontal : 10,
        marginTop : 5, 
        fontSize: 18,
      },
      buttonStyle : {
        backgroundColor : 'green',
        marginHorizontal : 10,

      },
      buttonTextStyle:{
        fontWeight: '600',
        color: 'white',
        marginHorizontal : 10,
        fontSize: 16,
      }

 });

 export default styles;