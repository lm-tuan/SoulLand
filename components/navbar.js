import React from 'react';
import {  
  Button, 
  Left, 
  Right, 
  Body,
  Header, 
  Title,
  Icon,
}  from 'native-base';

export default function Navbar(){
    
    const onPressMenu = () => {
        console.log('onPressMenu');
    }
    return (
        <Header>
            <Left>
                <Button transparent onPress = { onPressMenu }>
                    <Icon name='menu' />
                </Button>
            </Left>
            <Body>
                <Title >Đấu La Đại Lục</Title>
            </Body>
            <Right />
         </Header>
    )
}