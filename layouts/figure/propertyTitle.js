import React from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Content, Thumbnail } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import PersonDetail from './personDetail';
import Spirit from './spirit';
import SpiritDetail from '../spiritDetail/spiritDetail';
const SpiritStack = createStackNavigator();

export default function propertyTitle() {
  
    return (
        <Container >
          <Header style = {styles.header}>
              <Thumbnail  small source={require("../../assets/images/duongtam.jpg")} />
              <Text style = {styles.text}>Thiên Thủ Đấu La Đường Tam</Text>
          </Header>
          <Tabs>
            <Tab heading={ <TabHeading>
              {/* <Icon name="camera" /> */}
              <Thumbnail style = {styles.thumbnail}   small source={require("../../assets/images/chitiet.jpg")} />
              <Text style = {styles.textAtribute} >Bản thân</Text></TabHeading>}>
               <PersonDetail/>
            </Tab>
            <Tab heading={ <TabHeading>
              <Thumbnail  style = {styles.thumbnail} small source={require("../../assets/images/honhoan.jpg")} />  
                <Text style = {styles.textAtribute}>Hồn Hoàn</Text></TabHeading>}>
                {/* <NavigationContainer> */}
                <SpiritStack.Navigator>
                  <SpiritStack.Screen 
                    name="Spirit" 
                    component={Spirit} 
                    headerMode = "none"
                    // options={{ title: 'Trở về Mục Hồn Hoàn'}}
                    options={() => ({
                      // title: 'Trở về Mục Hồn Hoàn',
                      header: () => (<></>),
                    })}
                    />
                  <SpiritStack.Screen 
                    name="SpiritDetail" 
                    component={SpiritDetail} 
                    options={{ title: 'Trở về Mục Hồn Hoàn' }}
                    
                  />
                </SpiritStack.Navigator>
              {/* </NavigationContainer> */}
                {/* <Spirit /> */}
            </Tab>
            <Tab heading={ <TabHeading>
                <Thumbnail style = {styles.thumbnail}  small source={require("../../assets/images/honcot.jpg")} />  
                <Text style = {styles.textAtribute}>Hồn cốt</Text></TabHeading>}>
            </Tab>
            <Tab heading={ <TabHeading>
                <Thumbnail  style = {styles.thumbnail} small source={require("../../assets/images/honky.jpg")} />  
                <Text style = {styles.textAtribute}>Hồn kỹ</Text></TabHeading>}>
            </Tab>
          </Tabs>
      </Container>
    );
}


const styles = StyleSheet.create({
  header: { 
    flexDirection:"row",
    justifyContent:"flex-start",
    backgroundColor:"#f9f5f5", 
    paddingTop:10
  },
  text:{
    marginTop:5, 
    marginLeft: 10,
    fontSize:16,
    fontWeight:"bold",
    fontFamily: "Cochin"
  },
  textAtribute:{
    fontSize:9,
    fontWeight:'bold',
    textTransform:"uppercase"
  
  },
  thumbnail:{
    width:30,
    height:30
  }

});
