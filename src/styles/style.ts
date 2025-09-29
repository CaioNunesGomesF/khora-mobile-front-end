import { StyleSheet } from "react-native";

// Criando o estilo master do app 🏗️
export const style = StyleSheet.create({

    // Container principal que segura tudo na tela ✨
    container: {
        flex: 1, // ocupa toda a tela
        backgroundColor: '#ffffff', // fundo branquinho puro
        alignItems: 'center', // centraliza horizontalmente
        justifyContent: 'center', // centraliza verticalmente
        fontFamily: 'arial', // fonte clássica de herói 🖋️
    },

    // Box do topo: aqui mora a imagem de boas-vindas 🏔️
    boxTop: {
        marginTop: '8%', // dá aquele respiro do topo da tela
        justifyContent: 'center', // centraliza verticalmente a imagem
        alignItems: 'center', // centraliza horizontalmente a imagem
    },

    // Imagem central, tipo tapete vermelho 🎬
    imagemCentral: {
        width: 300,
        height: 300,
        resizeMode: 'contain', // mantém proporção original
    },

    // Box do meio: casa dos textos motivacionais 🥦
    boxMid: {
        marginTop: "1%", // pequeno respiro do topo do box
        marginBottom: 20, // espaço antes da parte de baixo
        alignItems: 'center', // centraliza os textos
        paddingHorizontal: 20, // um pouco de respiro lateral
    },

    // Texto principal, tipo grito de herói 💪
    TextTop: {
        color: "#1F41BB", // azul de herói
        marginBottom: 10, // respiro para o próximo texto
        fontSize: 35, // grande, para impressionar
        fontWeight: "bold", // força total
        textAlign: "center", // centralizado
    },

    // Texto secundário, explicativo tipo pergaminho antigo 📜
    TextBottom: {
        marginTop: "10%", // espaço do texto principal
        color: "#1b1919ff", // cor sóbria
        fontSize: 14, // menorzinho
        textAlign: "center", // centralizado
        width: 300, // largura fixa para não quebrar layout
    },

    // Box dos botões na parte de baixo 🧙‍♂️
    boxBotton: {
        marginBottom: 40, // distância da base da tela
        width: '100%', // ocupa toda largura
        alignItems: 'center', // centraliza os botões
        marginTop: "10%", // espaço do meio da tela
    },

    // Container dos botões, coloca eles lado a lado ⚔️
    buttons: {
        flexDirection: 'row', // linha horizontal
        justifyContent: 'space-around', // espalha com espaço igual
        width: '80%', // largura do container dos botões
    },

    // Botão de Login, azul de herói 🛡️
    loginButton: {  
        backgroundColor: '#1F41BB',
        paddingVertical: "5%", // altura do botão
        paddingHorizontal: "15%", // largura do botão
        borderRadius: 10, // cantos arredondados
        elevation: 5, // sombra ninja
    },

    // Botão de Register, neutro e pronto pra aventuras 🏰
    registerButton: {
        backgroundColor: '#ffffff',
        paddingVertical: "5%",
        paddingHorizontal: "15%",
        borderRadius: 10,
    },

    // Texto do botão Login, branco como a luz da vitória 🌟
    loginButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
    },

    // Texto do botão Register, preto básico, tipo sombra 🖤
    registerButtonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    }
});
