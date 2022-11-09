import { Component } from '@angular/core';
import { isLike, thumsUpDown } from './shared/model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'likeDislike';
  obj:isLike ={
    isLike:false,
    likeCount:123
  }

  obj1:thumsUpDown ={
    thumsUp: false,
    thumsDown: false,
    thumsCount: 123
  }
}
