import React, { useEffect , useState } from 'react';
import { List, ListItem, Icon, Thumbnail,
  Container, Header, Title, Content, Footer, 
  FooterTab, Button, Left, Right, Body, Text , Badge} from 'native-base';
import Menu from './components/menu';
import Navbar from './components/navbar';
import FigurePage from './layouts/figure/propertyTitle';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const HomeStack = createStackNavigator();

export default function App() {

    return (
      <Container>
        <NavigationContainer>
            <HomeStack.Navigator>
              <HomeStack.Screen 
                name="Menu" 
                component={Menu} 
                // options={{ title: 'Menu'}}
                options={({ navigation }) => ({
                  title: '',
                  header: Navbar,
                })}
                />
              <HomeStack.Screen 
                name="FigurePage" 
                component={FigurePage} 
                options={{ title: 'Trở về Menu' }}
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