import {BSON} from 'realm';

export class Task extends Realm.Object<Task> {
  _id!: BSON.ObjectId;
  description!: string;
  title!:string;
  taskId!: string;
  userId!: string;

  static schema: Realm.ObjectSchema = {
    name: 'Task',
    // sync WeatherSensor objects one way from your device
    // to your Atlas database.
    asymmetric: true,
    primaryKey: '_id',
    properties: {
      // This allows us to automatically generate a unique _id for each Item
      _id: {type: 'objectId', default: () => new BSON.ObjectId()},
      // All todo items will default to incomplete
      //isComplete: {type: 'bool', default: false},
      description: 'string',
      title:'string',
      taskId: 'string',
      userId: 'string'
    },
  };
}