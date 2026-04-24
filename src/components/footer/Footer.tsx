import React from 'react';
import { View, Text } from 'react-native';
import footerStyle from './FooterStyle';


const Footer = () => {
  return (
    <View style={footerStyle.footer}>
      <Text style={footerStyle.footerText}>Desenvolvido por HardCoders. {`\n`} Projeto fictício sem fins lucrativos.</Text>
    </View>
  );
};

export default Footer;