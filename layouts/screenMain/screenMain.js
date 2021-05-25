
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default function ScreenMain({navigation}){

    const onPress = () => {
        navigation.navigate('Menu')
        // navigation.navigate('FigurePage')
    }
    return (
            <Content>
            <List>
                <ListItem thumbnail onPress = {onPress}>
                <Left>
                    <Thumbnail square source={require("../../assets/images/duongtam.jpg")} />
                </Left>
                <Body>
                    <Text>Nhân vật</Text>
                    <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                </Body>
                <Right>
                    <Button onPress = {onPress} transparent>
                    <Text>View</Text>
                    </Button>
                </Right>
                </ListItem>
                <ListItem thumbnail onPress = {onPress}>
                <Left>
                    <Thumbnail square source={require("../../assets/images/honhoan.jpg")} />
                </Left>
                <Body>
                    <Text>Phong Hiệu</Text>
                    <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                </Body>
                <Right>
                    <Button onPress = {onPress} transparent>
                    <Text>View</Text>
                    </Button>
                </Right>
                </ListItem>
                <ListItem thumbnail onPress = {onPress}>
                <Left>
                    <Thumbnail square source={require("../../assets/images/honky.jpg")} />
                </Left>
                <Body>
                    <Text>Hồn hoàn</Text>
                    <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                </Body>
                <Right>
                    <Button onPress = {onPress} transparent>
                    <Text>View</Text>
                    </Button>
                </Right>
                </ListItem>
                
            </List>
            </Content>
    );
}

const styles = StyleSheet.create({
  thumbnailMr: {
    marginRight:15
  }
});
