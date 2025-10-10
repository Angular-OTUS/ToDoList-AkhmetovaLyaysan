import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ToDoListItem} from '../to-do-list-item/to-do-list-item';
import {Button} from '@components/button/button';
import {ShowIf} from '@directives/show-if';

export interface ToDo {
  id: number;
  text: string;
  description: string;
}

@Component({
  selector: 'app-to-do-list',
  imports: [FormsModule, ToDoListItem, Button, ShowIf],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoList implements OnInit {
  toDoList: ToDo[] = [
    {
      id: 1,
      text: 'Buy a new gaming laptop',
      description: 'Description: Buy a new gaming laptop'
    },
    {
      id: 2,
      text: 'Complete previous task',
      description: 'Descripton: Complete previous task'
    },
    {
      id: 3,
      text: 'Create some angular app',
      description: 'Description: Create some angular app'
    },
  ];
  value = '';
  description = '';

  selectedItemId: number | null = null;

  isLoading = true;
  cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
      this.cdr.markForCheck();
    }, 500);
  }

  deleteTask(i: number) {
    this.toDoList.splice(i, 1);
  }

  addTask() {
    const index = Math.max(...this.toDoList.map((item: ToDo) => item.id));
    this.toDoList.push({id: index + 1, text: this.value, description: this.description});

    this.value = '';
  }

  get selectedTodoDescription(): string | undefined {
    return this.toDoList.find(item => item.id === this.selectedItemId)?.description;
  }
}
