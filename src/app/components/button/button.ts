import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  title = input();
  disabled = input();

  clicked = output();
}
