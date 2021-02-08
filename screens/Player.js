import React from 'react';
import styled from 'styled-components';
import { ChevronIcon, MoreVertIcon, PlayIcon } from '../components/icons/index.js';
import { LinearGradient } from 'expo-linear-gradient';


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

const Controls = styled.View``;
Controls.Play = styled.View``;

export function PlayerScreen() {
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
            uri:'https://placehold.it/750x750'
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
            <Controls.Play>
              <PlayIcon
                width={56}
                height={56}
              />
            </Controls.Play>
          </Controls>
        </PlayerArea>
      </ScreenArea>
    </Background>
  );
}
