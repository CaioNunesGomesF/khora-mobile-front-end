import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    boxTop: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },

    imagemCentral: {

    },
    
    boxMid: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 20,
    },

    TextTop: {
        color: "#1F41BB",
        marginBottom: "5%",
        fontSize: 35,
        fontWeight: "bold",
        width: 300,
        textAlign: "center",
    },

    TextBottom: {
        color: "#000000",
        width: 300,
        fontSize: 14,
        textAlign: "center",
        fontWeight: "regular",
    },

    boxBotton: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        
    },
    buttons: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    loginButton: {
        backgroundColor: '#1F41BB',
        paddingVertical: "4%",
        paddingHorizontal: "15%",
        borderRadius: 10,
        shadowColor: '#1F41BB',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.80,
        shadowRadius: 10,
        elevation: 10,
    },
    registerButton: {
        backgroundColor: '#ffffff',
        paddingVertical: "4%",
        paddingHorizontal: "15%",
    },
    loginButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
    },
    registerButtonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
});