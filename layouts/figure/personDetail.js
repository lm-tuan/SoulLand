import React  from 'react';
import { Container, Header, Content, H1, H2, H3, Text } from 'native-base';
import { StyleSheet } from 'react-native';
export default function PersonDetail() {
  return(
    <Container>
    <Content style = {styles.content}>
      <H3 style = {styles.h3Style}>Hình tượng nhân vật</H3>
      <Text style = {styles.text}>Kiếp trước: Hắn là đệ tử ngoại môn Đường gia, thiên tư thông minh, 
          học được một thân võ học ám khí tinh túy của Đường Môn. 
          Cho nên lúc thiết kế kiếp trước Đường Tam, thắt lưng của hắn 
          thiết kế thêm hộ oản tụ tiễn để trang bị ám khí, dùng vũ
           khí tinh vi để biểu hiện ra chỗ đặc biệt của nhân vật. 
           Về phần màu sắc, ban đầu đã quyết định dùng sắc 
           thái màu lam để đại biểu Đường Tam. Dùng thêm một
            chút màu vàng để tô điểm chỗ chi tiết, tinh xảo lại không xốc nổi,
             rất phù hợp cá tính kiếp trước của Đường Tam.
      </Text>
    </Content>
    
  </Container>
    );
}

const styles = StyleSheet.create({
    h3Style: {
        // backgroundColor:"red",
        marginTop:5,
        fontSize:17,
        fontWeight:'bold',
        marginLeft:7
        // borderBottomColor: '#9199a1',
        // borderBottomWidth: 1,
    },
    content: {
        // backgroundColor:"red",
        width:"99%"
    },
    text : {
        fontSize:14,
        marginLeft:7
    }
});

