import React from 'react'
import { TaskRealmContext } from './models'
import TaskSync from './components/TaskSync'
import { AppProvider } from '@realm/react';
import {appId, baseUrl} from '../atlasConfig.json';
//import { LogIn } from './screens/Login';
import { StyleSheet, Text, View } from 'react-native';

const {RealmProvider} = TaskRealmContext;  


const App = () => {
  return (
    <AppProvider  id={appId} baseUrl={baseUrl}>
      <RealmProvider>
          <TaskSync />
      </RealmProvider>
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  footerText: {
    fontSize: 12,
    textAlign: 'center',
  },
  footer: {
    padding: 24,
  },
  activityContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default App;