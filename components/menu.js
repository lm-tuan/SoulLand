
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import {  List, ListItem, Text, Left, Right, Icon, Thumbnail } from 'native-base';
export default function Menu({ navigation }){
  const figures = [
    { id:1, name: "Đường Tam", path: require('../assets/images/duongtam.jpg') },
    { id:2, name: "Tiểu Vũ", path: require("../assets/images/tieuvu.jpg") },
    { id:3, name: "Đới Mộc Bạch", path: require("../assets/images/doimocbach.jpg") },
    { id:4, name: "Chu Trúc Thanh", path: require("../assets/images/chutructhanh.jpg") },
    { id:5, name: "Ninh Vinh Vinh", path: require("../assets/images/ninhvinhvinh.jpg") },
    { id:6, name: "Mã Hồng Tuấn", path: require("../assets/images/mahongtuan.jpg") },
    { id:7, name: "Áo Tư Tạp", path: require("../assets/images/aotutap.jpg") },  
  ]


  const onSelect =(id) => {
    console.log('id', id);
    navigation.navigate('FigurePage')
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

  thumbnailMr: {
    marginRight:15
  }
});
