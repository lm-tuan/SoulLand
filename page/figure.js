
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import {  List, ListItem, Text, Left, Right, Icon, Thumbnail } from 'native-base';
export default function Menu(){
  const figures = [
    { id:1, name: "Đường Tam", path: require('../assets/images/duongtam.jpg') },
    { id:2, name: "Tiểu Vũ", path: require("../assets/images/tieuvu.jpg") },
    { id:3, name: "Đới Mộc Bạch", path: require("../assets/images/doimocbach.jpg") },
    { id:4, name: "Chu Trúc Thanh", path: require("../assets/images/chutructhanh.jpg") },
  ]
  const onSelect =(id) => {
    console.log('onSelect', id)
  }
    return (
          <List style = { styles.list}>
            {figures.length > 0 && figures.map(figure => (
              <ListItem noIndent  style = { styles.listItem } onPress = {() => onSelect(figure.id)} key = {figure.id} >
                <Thumbnail small source= {figure.path} style = {styles.thumbnailMr} />
                <Left>
                  <Text>{figure.name}</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            ))
            }
          </List>
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
