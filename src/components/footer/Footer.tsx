import React from 'react';
import { View, Text } from 'react-native';
import FooterStyle from './FooterStyle';


const Footer = () => {
  return (
    <View style={FooterStyle.footer}>
      <Text style={FooterStyle.footerText}>Desenvolvido por HardCoders. {`\n`} Projeto fictício sem fins lucrativos.</Text>
    </View>
  );
};

export default Footer;