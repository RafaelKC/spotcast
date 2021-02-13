import React from 'react';
import { PlayerScreen } from './screens/Player';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Home!
      </Text>
      {[1,2,3,4,5].map((item) => {
        return (
          <TouchableOpacity 
            key={item}
            onPress={() => {
              navigation.navigate('PlayerScreen')
            }}
          >
            <Text>
              Podcast: 0{item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function RSSScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>RSS!</Text>
    </View>
  );
}

//=====================================
//=====================================

const PodcastsStack = createStackNavigator();

// function PodcastsTabStack() {
//   return (
//     <PodcastsStack.Navigator>
//       <PodcastsStack.Screen name="HomeScreen" component={HomeScreen} />
//       <PodcastsStack.Screen name="PlayerScreen" component={PlayerScreen} />
//     </PodcastsStack.Navigator>
//   );
// }

const Tab = createBottomTabNavigator();

function PodcastsStackTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
      <Tab.Screen name="RSSScreen" component={RSSScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <PodcastsStack.Navigator>
        <PodcastsStack.Screen name="HomeScreen" component={PodcastsStackTab} />
        <PodcastsStack.Screen name="PlayerScreen" component={PlayerScreen} />
      </PodcastsStack.Navigator>
    </NavigationContainer>
  );
}



// export default function App() {
//   return (
//     <PlayerScreen/>
//   );
// }
