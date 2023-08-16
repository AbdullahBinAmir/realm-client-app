import { Button, Text, View } from 'react-native'
import React from 'react'
import { TaskRealmContext } from '../models';
import { Task } from '../models/Task';
import { BSON } from 'realm';

const {useRealm,useQuery} = TaskRealmContext;  
// const itemSubscriptionName = 'tasks';
// const ownItemsSubscriptionName = 'ownTasks'; 
const TaskSync = () => {
    const realm = useRealm();
    const tasks = useQuery(Task).sorted('_id');

    const syncToRealm = (description: string, title: string, taskId: number, userId: string)=>{
        const result = realm.write(() => {
            return new Task(realm, {description, title, taskId, userId});
         }).toJSON()
         console.log(result)
    }

    const readTask = (id: BSON.ObjectId) => {
        // if the realm exists, get the Item with a particular _id and delete it
        const item = realm.objectForPrimaryKey(Task, id); // search for a realm object with a primary key that is an objectId
        if (item) {
          console.log(item)  
        } 
      }

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text style={{fontSize:24,fontWeight:'bold',marginBottom:30}}>This Realm Test App</Text>
    <Button title='Press to Write Realm' onPress={()=>syncToRealm('my db','sync','1','123')} />
    <Button title='Press to Read Realm' onPress={()=>readTask(tasks[0]._id)} />
  </View>
  )
}

export default TaskSync