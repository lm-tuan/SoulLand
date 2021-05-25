import React , { useRef, useState } from 'react';
import { Container, Header, Content, H1, H2, H3, Text } from 'native-base';
import { StyleSheet, View } from 'react-native';
//Import React Native Video to play video
import Video from 'react-native-video';

//Media Controls to control Play/Pause/Seek and full screen
import
  MediaControls, {PLAYER_STATES}
from 'react-native-media-controls';

export default function SpiritDetail() {
    const videoPlayer = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [paused, setPaused] = useState(false);
    const [
        playerState, setPlayerState
    ] = useState(PLAYER_STATES.PLAYING);
    const [screenType, setScreenType] = useState('content');

    const onSeek = (seek) => {
        //Handler for change in seekbar
        videoPlayer.current.seek(seek);
    };

    const onPaused = (playerState) => {
        //Handler for Video Pause
        setPaused(!paused);
        setPlayerState(playerState);
    };

    const onReplay = () => {
        //Handler for Replay
        setPlayerState(PLAYER_STATES.PLAYING);
        videoPlayer.current.seek(0);
    };

    const onProgress = (data) => {
        // Video Player will progress continue even if it ends
        if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
        setCurrentTime(data.currentTime);
        }
    };

    const onLoad = (data) => {
        setDuration(data.duration);
        setIsLoading(false);
    };

    const onLoadStart = (data) => setIsLoading(true);

    const onEnd = () => setPlayerState(PLAYER_STATES.ENDED);

    const onError = () => alert('Oh! ', error);

    const exitFullScreen = () => {
        alert('Exit full screen');
    };

    const enterFullScreen = () => {};

    const onFullScreen = () => {
        setIsFullScreen(isFullScreen);
        if (screenType == 'content') setScreenType('cover');
        else setScreenType('content');
    };

    const renderToolbar = () => (
        <View>
        <Text style={styles.toolbar}> toolbar </Text>
        </View>
    );

  const onSeeking = (currentTime) => setCurrentTime(currentTime);
   
    return(
        <Container>
            <Content style = {styles.content}>
            <H3 style = {styles.h3Style}>Đệ nhất hồn hoàn: Mạn Đà La Xà </H3>
            <Text style = {styles.text}>
            Tu vi gần bốn trăm năm. Lam ngân thảo sau khi rót vào Mạn đà la xà hồn hoàn trở nên cứng cỏi hơn, 
            còn kèm theo nhất định độc tính của Màn đà la xà.
            </Text>
            </Content>
        <H3 style = {styles.h3VideoStyle}>Video hồn hoàn Mạn Đà La Xà </H3>
        <View style = {styles.videoContent}>
            <Video
                onEnd={onEnd}
                onLoad={onLoad}
                onLoadStart={onLoadStart}
                onProgress={onProgress}
                paused={paused}
                ref={videoPlayer}
                resizeMode={screenType}
                onFullScreen={isFullScreen}
                source={{
                uri:
                    'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
                }}
                style={styles.mediaPlayer}
                volume={10}
            />
            <MediaControls
                duration={duration}
                isLoading={isLoading}
                mainColor="#333"
                onFullScreen={onFullScreen}
                onPaused={onPaused}
                onReplay={onReplay}
                onSeek={onSeek}
                onSeeking={onSeeking}
                playerState={playerState}
                progress={currentTime}
                toolbar={renderToolbar()}
            />
        </View>
        <View style = {{ flex: 2}}>
        </View>

        
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
    h3VideoStyle:{
        marginTop:5,
        fontSize:17,
        fontWeight:'bold',
        marginLeft:7,
        
    },
    content: {
        // backgroundColor:"red",
        width:"99%"
    },
    text : {
        fontSize:14,
        marginLeft:7
    },
    toolbar: {
        marginTop: 30,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
      },
      mediaPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'black',
        justifyContent: 'center',
      },
      videoContent:{
          flex:2,
          width:"90%",
          marginLeft:5,
          borderWidth: 1,
          borderColor: "thistle",
          borderRadius: 50,
      }
});
