import React, { useEffect , useState } from 'react';
import { List, ListItem, Icon, Thumbnail,
  Container, Header, Title, Content, Footer, 
  FooterTab, Button, Left, Right, Body, Text , Badge} from 'native-base';
import Menu from './components/menu';
import FigurePage from './page/figure';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const figures = [
  { id:1, name: "Đường Tam", path: require('./assets/images/duongtam.jpg') },
  { id:2, name: "Tiểu Vũ", path: require("./assets/images/tieuvu.jpg") },
  { id:3, name: "Đới Mộc Bạch", path: require("./assets/images/doimocbach.jpg") },
  { id:4, name: "Chu Trúc Thanh", path: require("./assets/images/chutructhanh.jpg") },
  { id:5, name: "Ninh Vinh Vinh", path: require("./assets/images/ninhvinhvinh.jpg") },
  { id:6, name: "Mã Hồng Tuấn", path: require("./assets/images/mahongtuan.jpg") },
  { id:7, name: "Áo Tư Tạp", path: require("./assets/images/aotutap.jpg") },  
]

const HomeStack = createStackNavigator();


export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onPressMenu =  () => { 
    // setIsOpen(!isOpen);
    console.log('onPressMenu');
   }
   const onSelect =(id) => {
    console.log('onSelect', id)
  }

    return (
      <Container>
        <NavigationContainer>
          {/* <Header>
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
          </Header> */}
            <HomeStack.Navigator>
              <HomeStack.Screen 
                name="Menu" 
                component={Menu} 
                options={{ title: 'Menu'}}
                />
              <HomeStack.Screen 
                name="FigurePage" 
                component={FigurePage} 
                options={{ title: 'Trở về menu' }}
              />
            </HomeStack.Navigator>
          </NavigationContainer>
          <Footer>
          <FooterTab>
            <Button badge vertical>
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
      </Container>
    );
}


const styles = StyleSheet.create({
  list: {
    // position:'absolute', 
    // // backgroundColor:'blue', 
    // width:"100%",
    // margin:0,
    // padding:0,
    // zIndex:99,
    // top:50,
    // left:0,
  },
  listItem: {
    // backgroundColor:"red",
    // backgroundColor: "#cde1f9",
    // margin:0,
    // padding:0,
    // width:"100%",

    // flexDirection:'row',
    // justifyContent:'space-between'
  },
  thumbnailMr: {
    marginRight:15
  }
});

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   const onPressMenu =  () => { 
//     // setIsOpen(!isOpen);
//     console.log('onPressMenu');
//    }
//    const onSelect =(id) => {
//     console.log('onSelect', id)
//   }

//     return (
//       <Container >
        // <Header>
        //   <Left>
        //     <Button transparent
        //       onPress = { onPressMenu }
        //     >
        //       <Icon name='menu' />
        //     </Button>
        //   </Left>
        //   <Body>
        //     <Title>Đấu La Đại Lục</Title>
        //   </Body>
        //   <Right />
        // </Header>
//         <Content>
//             {/* <Menu /> */}
//           <NavigationContainer>
//             <HomeStack.Navigator>
//               <HomeStack.Screen name="Menu" component={Menu} />
//               <HomeStack.Screen name="figurePage" component={figurePage} />
//             </HomeStack.Navigator>
//           </NavigationContainer>
//         </Content>
        // <Footer>
        //   <FooterTab>
        //     <Button badge vertical>
        //       <Badge><Text>2</Text></Badge>
        //       <Icon name="apps" />
        //       <Text>Apps</Text>
        //     </Button>
        //     <Button vertical>
        //       <Icon name="camera" />
        //       <Text>Camera</Text>
        //     </Button>
        //     <Button active badge vertical>
        //       <Badge ><Text>51</Text></Badge>
        //       <Icon active name="navigate" />
        //       <Text>Navigate</Text>
        //     </Button>
        //     <Button vertical>
        //       <Icon name="person" />
        //       <Text>Contact</Text>
        //     </Button>
        //   </FooterTab>
        // </Footer>
//       </Container>
//     );
// }