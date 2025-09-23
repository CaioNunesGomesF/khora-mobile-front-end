import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { style } from './style';
import imagemLogin from '../../assets/login.png';

export default function Login() {
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={imagemLogin} style={style.imagemCentral} />
      </View>
      <View style={style.boxMid}>
        <Text style={style.TextTop}>Sua saúde em primeiro lugar</Text>
        <Text style={style.TextBottom}>Explore todos os recursos de saúde pensados para você e suas necessidades.</Text>
      </View>
      <View style={style.boxBotton}>
        <View style={style.buttons}>
          <TouchableOpacity style={style.loginButton} onPress={() => console.log('Botão Login pressionado!')}>
            <Text style={style.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.registerButton} onPress={() => console.log('Botão Register pressionado!')}>
            <Text style={style.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}