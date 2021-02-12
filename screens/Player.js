import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-native';
import { ChevronIcon } from '../components/icons/Chevron/index.js';
import { PlayIcon } from '../components/icons/Play/index.js';
import { MoreVertIcon } from '../components/icons/MoreVert/index.js';
import { ReplayIcon } from '../components/icons/Replay/index.js';
import { ForwardIcon } from '../components/icons/Forward/index.js';
import { LinearGradient } from 'expo-linear-gradient';
import SoundPlayer from 'react-native-sound-player'
import { MaterialIcons } from "@expo/vector-icons";

function SoundPlayerRSS() {
  try {
    SoundPlayer.playUrl('https://anchor.fm/s/d7daef8/podcast/play/25585630/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-01-22%2Fc0af88307a82011f3e97b02093ebcdb9.m4a')
    SoundPlayer.play()
  } catch (e) {
    console.warn(`cannot play the sound file`, e)
  }
}
SoundPlayerRSS()

const Background = ({ children }) => {
    return (
      <LinearGradient 
      colors={['#ab8308','#242051']}
      style={{
        flex: 1,
        paddingTop: 50,
      }}>
        {children}
      </LinearGradient>
    );
}

const TopBar = styled.View`
  flex-direction: row;
`;

TopBar.title = styled.Text`
  color: white;
  text-transform: uppercase; 
  `;
TopBar.subtitle = styled.Text` 
  color: white; 
  font-weight: bold;
  `;

TopBar.Left = styled.View`
  flex: 1;
  padding-left: 16px; 
`;
TopBar.Middle = styled.View`
  flex: 3;
  align-items: center;
`;
TopBar.Right = styled.View`
  flex: 1;
  padding-right: 16px;
  align-items: flex-end;
`;

//==================================
//==================================

const ScreenArea = styled.View`
  flex: 1;
  padding-right: 16px;
  padding-left: 16px;
  padding-bottom: 16px;
`;
const CoverArea = styled.View`
  flex: 4;
`;
const PlayerArea = styled.View`
  flex: 2;
  justify-content: flex-end;
`;
CoverArea.Image = styled.Image`
  width: 100%;
  flex: 1;
`;

PlayerArea.Title = styled.Text`
  color: white;
  font-size: 20px;
`;
PlayerArea.Author = styled.Text`
  color: #bbbbbb;
  font-size: 16px
`;
  
const Controls = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
Controls.Play = styled.TouchableOpacity``;
Controls.Replay = styled.TouchableOpacity``;
Controls.Forward = styled.TouchableOpacity``;
Controls.Slider = styled.View`
  flex-basis: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
Controls.Slider.CurrentTime = styled.Text`
  color: #bbbbbb
`;
Controls.Slider.TotalTime = styled.Text`
  color: #bbbbbb
`;

const AudioSlider = styled.Slider`
  flex-basis: 100%;
`;

const iconSize = 100;

export function PlayerScreen() {
  const [segundos, setSegundos] = useState(0);

  return (
    <Background>     
        <TopBar>
          <TopBar.Left>
            <ChevronIcon/> 
          </TopBar.Left>
          <TopBar.Middle>
            <TopBar.title>Tocando Podcast</TopBar.title>
            <TopBar.subtitle>ChupaCast</TopBar.subtitle>
          </TopBar.Middle>
          <TopBar.Right>
            <MoreVertIcon/>
          </TopBar.Right>
        </TopBar>

      <ScreenArea>
        <CoverArea>
        <CoverArea.Image 
        resizeMode='contain'
        source={{
            uri:'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/2163406/2163406-1611352326617-7a458c0715c98.jpg'
        }}
        />
        </CoverArea>

        <PlayerArea>
          <PlayerArea.Title>
            Ep 157, Jacaré Pangua
          </PlayerArea.Title>
          <PlayerArea.Author>
            ChupaCast
          </PlayerArea.Author>
          <Controls>
            
            <Controls.Slider>
              <AudioSlider
                thumbTintColor="#FFFFFF"
                minimumTrackTintColor="#ab8308"
                maximumTrackTintColor="#777777"
                minimumValue={0}maximumValue={100}
                value={segundos}
                onValueChange={(value) => {
                  setSegundos(value);
                }}
              />
              <Controls.Slider.CurrentTime>
               0:{segundos}  
              </Controls.Slider.CurrentTime>
              <Controls.Slider.TotalTime>
               52:07
              </Controls.Slider.TotalTime>
            </Controls.Slider>
            
            <Controls.Replay
              onPress={SoundPlayerRSS}
            >
              <ReplayIcon
                width={(iconSize * 0.64)}
                height={(iconSize * 0.64)}
              />
            </Controls.Replay>
            <Controls.Play>
              <MaterialIcons name="pause" size={45} />
            </Controls.Play>
            <Controls.Forward>
              <ForwardIcon
              width={(iconSize * 0.64)}
              height={(iconSize * 0.64)}
              />
            </Controls.Forward>
          </Controls>
        </PlayerArea>
      </ScreenArea>
    </Background>
  );
}
