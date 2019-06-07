import { ITaskRepository } from "./taskrepository";
import { Task } from "../models/task";

export class InMemoryTaskRepository implements ITaskRepository {

    private __tasks: Task[] = [];
    private __nextId = 1;

    async getAll(): Promise<Task[]>{
        return this.__tasks;
    }

    async get(taskId : number): Promise<Task>{
        const task = this.__tasks.find(t => t.id === taskId );
        return task;
    }

    async create(task : Task): Promise<Task>{
         task.id = this.__nextId;
         this.__nextId++;
         this.__tasks.push(task);

         return task;

    }

    async update(taskId : number, task: Task): Promise<Task>{

        let updatedTask = this.__tasks.filter(t => t.id === taskId)[0];
        updatedTask.name = task.name;
        updatedTask.isComplete = task.isComplete;

        return updatedTask;

    }

    async delete(taskId : number): Promise<Task>{
        const index = this.__tasks.findIndex(t => t.id === taskId);
        const task = this.__tasks[index];
        this.__tasks.splice(index, 1);
    
        return task;
    }
}