import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';


const styles = StyleSheet.create({

    container : {
        flex : 1,
        backgroundColor : 'white'
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
      },
      Heading:{
        fontWeight: 'bold',
        color: 'white',
        marginTop : 5, 
        fontSize: 20,
      },
      CardStyle : {
        width : widthPercentageToDP(85),
        borderRadius : 20
      },
      text: {
        fontWeight: '400',
        color: 'black',
        fontSize: 16,
      },
      NoDatatext:{
          margin : 10,
        fontWeight: '400',
        color: 'black',
        fontSize: 16,
      },
      underlayRight: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft : 20,
        justifyContent: 'flex-start',
      },
      underlayLeft: {
        flex: 1,
        backgroundColor: 'white',
        paddingRight : 20,
        justifyContent: 'flex-end',
      },

 });

 export default styles;