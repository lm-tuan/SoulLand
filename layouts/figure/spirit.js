
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import {  List, ListItem, Text, Left, Right, Icon, Thumbnail } from 'native-base';

import SpiritDetail from '../spiritDetail/spiritDetail';

export default function Sprit( { navigation }){
  const figures = [
    { id:1, name: "Đệ nhất hồn hoàn: Mạn Đà La Xà", path: require('../../assets/images/spirit/honhoan01.jpg') },
    { id:2, name: "Đệ nhị hồn hoàn: Quỷ Đằng", path: require("../../assets/images/spirit/honhoan02.jpg") },
    { id:3, name: "Đệ tam hồn hoàn: Nhân diện ma chu", path: require("../../assets/images/spirit/honhoan03.jpg") },
    { id:4, name: "Đệ tứ hồn hoàn: Địa huyệt ma chu", path: require("../../assets/images/spirit/honhoan04.jpg") },
    { id:5, name: "Đệ ngũ hồn hoàn: Lam Ngân Hoàng", path: require("../../assets/images/spirit/honhoan05.jpg") },
    { id:6, name: "Đệ lục hồn hoàn: Tiểu Vũ hiến tế", path: require("../../assets/images/spirit/honhoan06.jpg") },
    { id:7, name: "Đệ thất hồn hoàn: Thiên Linh Nhất Dạ(Hồn Hoàn thần ban)", path: require("../../assets/images/spirit/honhoan07.jpg") },
    { id:8, name: "Đệ bát hồn hoàn: Tà Ma Hổ Kình Vương", path: require("../../assets/images/spirit/honhoan08.jpg") },  
    { id:9, name: "Đệ cửu hồn hoàn: Sâm Lâm chi vương hiến tế – Đại Minh (Thiên Thanh Ngưu Mãng)", path: require("../../assets/images/spirit/honhoan09.jpg") },
  ]

  const onSelect =(id) => {
    navigation.navigate('SpiritDetail')
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
