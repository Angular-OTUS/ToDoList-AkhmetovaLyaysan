import {ChangeDetectionStrategy, Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ToDoListItem} from '../to-do-list-item/to-do-list-item';

export interface ToDo {
  id: number;
  text: string;
}

@Component({
  selector: 'app-to-do-list',
  imports: [FormsModule, ToDoListItem],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToDoList {
  toDoList: ToDo[] = [
    {
      id: 1,
      text: 'Buy a new gaming laptop'
    },
    {
      id: 2,
      text: 'Complete previous task'
    },
    {
      id: 3,
      text: 'Create some angular app'
    }
  ];
  value = '';

  deleteTask(i: number) {
    this.toDoList.splice(i, 1);
  }

  addTask() {
    const index = Math.max(...this.toDoList.map((item: ToDo) => item.id));
    this.toDoList.push({id: index + 1, text: this.value});

    this.value = '';    
  }
}