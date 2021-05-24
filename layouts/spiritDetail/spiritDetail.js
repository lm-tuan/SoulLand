import React  from 'react';
import { Container, Header, Content, H1, H2, H3, Text } from 'native-base';
import { StyleSheet } from 'react-native';
export default function SpiritDetail() {
  return(
    <Container>
    <Content style = {styles.content}>
      <H3 style = {styles.h3Style}>Đệ nhất hồn hoàn: Mạn Đà La Xà </H3>
      <Text style = {styles.text}>
      Tu vi gần bốn trăm năm. Lam ngân thảo sau khi rót vào Mạn đà la xà hồn hoàn trở nên cứng cỏi hơn, 
      còn kèm theo nhất định độc tính của Màn đà la xà.
      </Text>
    </Content>
    
  </Container>
    );
}

const styles = StyleSheet.create({
    h3Style: {
        // backgroundColor:"red",
        marginTop:5,
        fontSize:17,
        fontWeight:'bold',
        marginLeft:7
        // borderBottomColor: '#9199a1',
        // borderBottomWidth: 1,
    },
    content: {
        // backgroundColor:"red",
        width:"99%"
    },
    text : {
        fontSize:14,
        marginLeft:7
    }
});

