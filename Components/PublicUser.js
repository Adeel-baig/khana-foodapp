import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import PublicUserDashboard from './PublicUserDashboard';
import PublicUserMap from './PublicUserMap';
import UserStatus from './UserStatus';

function UserDashboard() {
  return (
    <View >
      <PublicUserDashboard/>
    </View>
  );
}
function Status() {
  return (
    <View >
      <UserStatus/>
    </View>
  );
}

function userMap() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <PublicUserMap/>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name=" User Dashboard" component={UserDashboard}
      
          options={{
            headerShown: false,

            tabBarIcon: () => (
                <Icon
                    type='font-awesome'
                    name='user'
                    color="#08abf4"
                    size={28}
                />
            )
        }}
      />
      <Tab.Screen name="Map" component={userMap} 
        options={{

          headerShown: false,

          tabBarIcon: () => (
              <Icon
                type='font-awesome'
                  name='globe'
                  color="#08abf4"
                  size={28}
              />
          )
      }}
      />
      <Tab.Screen name="Status" component={Status} 
        options={{

          headerShown: false,

          tabBarIcon: () => (
              <Icon
                  type='font-awesome'
                  name='pause-circle'
                  color="#08abf4"
                  size={28}
              />
          )
      }}
      />
    </Tab.Navigator>
  );
}

export default function PublicUser() {
  return (
      <MyTabs />
  );
}