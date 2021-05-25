import React from 'react';
import {  
  Button, 
  Left, 
  Right, 
  Body,
  Header, 
  Title,
  Icon,
  Footer,
  FooterTab,
  Badge,
  Text
}  from 'native-base';
import * as rootNavigation from './../helpers/rootNavigation'; 

export default function FooterComponent(){
    
    const onPressMenu = () => {
        rootNavigation.push("ScreenMain")
    }
    return (
        <Footer>
        <FooterTab>
          <Button badge vertical onPress = {onPressMenu}>
            <Badge><Text>2</Text></Badge>
            <Icon name="apps" />
            <Text>Apps</Text>
          </Button>
          <Button vertical>
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
          <Button active badge vertical>
            <Badge ><Text>51</Text></Badge>
            <Icon active name="navigate" />
            <Text>Navigate</Text>
          </Button>
          <Button vertical>
            <Icon name="person" />
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>    
    )
}