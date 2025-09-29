import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
        
    buttonLong: {  
        backgroundColor: '#1F41BB',
        borderRadius: 10,
        paddingVertical: "5%", 
        paddingHorizontal: "15%", 
        elevation: 5, 
        width: '80%'
    },

    ButtonLongText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        borderRadius: 10,
    },


    inputWrapper: {
        width: "100%",
        borderRadius: 12,
        backgroundColor: "#fff",
        paddingVertical: 2, // deixa o input "respirar"
        paddingHorizontal: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Android mais perceptível mas não tão dura
        },

        input: {
            height: 60,
            paddingHorizontal: 20,
            borderRadius: 10,
            backgroundColor: "transparent",
            }

    

});
