import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RegisterPage from './Register';
import { Icon } from 'react-native-elements';
import Branch from './Branch';

function PublicUser() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <RegisterPage/>
    </View>
  );
}

function BranchManager() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Branch/>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Public User" component={PublicUser}
      
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
      <Tab.Screen name="Branch Manager" component={BranchManager} 
        options={{
          headerShown: false,

          tabBarIcon: () => (
              <Icon
                type='font-awesome'
                name='tasks'
                color="#08abf4"
                size={28}
              />
          )
      }}
      />
    </Tab.Navigator>
  );
}

export default function LandingPage() {
  return (
      <MyTabs />
  );
}