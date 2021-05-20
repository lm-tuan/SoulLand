import React, { useEffect , useState } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Menu from './components/menu';


export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onPressMenu =  () => { 
    setIsOpen(!isOpen);
    console.log('onPressMenu');
   }
    return (
      <Container style = {{ position:"relative", width:"100%",padding: 0, margin: 0}}>
        {
          isOpen && <Menu />
        }
        <Header>
          <Left>
            <Button transparent
              onPress = { onPressMenu }
            >
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Đấu La Đại Lục</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
}