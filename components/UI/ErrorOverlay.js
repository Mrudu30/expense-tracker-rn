import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ErrorOverlay({message}){
    return(
        <View style={style.container}>
            <Text style={[style.text,style.title]}>An Error Occured...</Text>
            <Text style={style.text}>{message}</Text>
        </View>
    )
}

export default ErrorOverlay;

const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    text:{
        color:'white',
        textAlign:'center',
        marginBottom:8,
    },
    title:{
        fontSize: 20,
        fontWeight:'bold',
    },
    message:{
        fontSize: 14,
    }
})