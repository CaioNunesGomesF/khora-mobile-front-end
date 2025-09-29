import { StyleSheet, Dimensions } from "react-native";

// Obtém a largura da tela para uso em proporções
const { width: screenWidth } = Dimensions.get('window');

// Criando o estilo master do app 🏗️
export const style = StyleSheet.create({

    // Container principal que segura tudo na tela ✨
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        // 'fontFamily' no container não é padrão em RN, mas mantido.
        fontFamily: 'arial', 
    },

    // --- Box Top (Imagem) ---
    boxTop: {
        marginTop: '8%', // Mantido responsivo por %
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', // Garante que a imagem se ajuste bem
    },

    // Imagem central: Usando porcentagem da largura da tela (mais responsivo)
    imagemCentral: {
        width: screenWidth * 0.75, // Ajusta para 75% da largura da tela
        height: screenWidth * 0.75, // Altura igual à largura (quadrada)
        resizeMode: 'contain',
    },

    // --- Box Mid (Textos) ---
    boxMid: {
        marginTop: "5%", // Aumentei o respiro para não grudar na imagem
        marginBottom: '5%', // Espaço antes dos botões (responsivo por %)
        alignItems: 'center',
        paddingHorizontal: '5%', // Respiro lateral responsivo
        width: '100%', // Ocupa toda a largura disponível
    },

    // Texto principal: Mantido fixo (ideal para títulos)
    TextTop: {
        color: "#1F41BB",
        marginBottom: 10,
        fontSize: 35, 
        fontWeight: "bold",
        textAlign: "center",
        width: '90%', // Garante que o texto não toque nas bordas
    },

    // Texto secundário: Agora usa porcentagem para a largura
    TextBottom: {
        marginTop: "8%", // Mantido responsivo por %
        color: "#1b1919ff",
        fontSize: 14,
        textAlign: "center",
        width: '80%', // Substitui a largura fixa (300) por 80%
    },

    // --- Box Botton (Botões) ---
    boxBotton: {
        marginBottom: '8%', // Distância da base da tela (responsivo por %)
        width: '100%',
        alignItems: 'center',
        marginTop: "10%",
    },

    // Container dos botões: Essencial para alinhamento lado a lado
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Alterei de 'space-around' para 'space-between' para melhor controle com o 80%
        width: '80%', // Mantido responsivo
    },
    
    // Botões: Removemos os estilos de botão fixos, pois o CustomButton
    // deve ser usado e já traz seus próprios estilos (width/height/padding).
    // Deixei aqui apenas como referência, mas eles não serão mais usados
    // se você usar o CustomButton.
    
    // loginButton e registerButton (REMOVIDOS/IGNORADOS se CustomButton for usado)
    
    // loginButtonText e registerButtonText (REMOVIDOS/IGNORADOS se CustomButton for usado)
});