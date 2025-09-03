import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  imports: [],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToDoList {

}
