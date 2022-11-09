import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.scss']
})
export class LikeDislikeComponent implements OnInit {
@Input() thumsUp!: boolean;
@Input() thumsDown!: boolean;
@Input() thumsCount!: number;

  constructor() { }

  ngOnInit(): void {
  }

  onLike(){
    // console.log("narendra");
    if(this.thumsUp){
      this.thumsUp=!this.thumsUp
      this.thumsDown=false
      this.thumsCount-=1
    }else{
      this.thumsUp=!this.thumsUp
      this.thumsDown=false
      this.thumsCount+=1
    }
  }
  onDislike(){
    // console.log("vaibhav");
    if(this.thumsDown){
      this.thumsDown=!this.thumsDown
      this.thumsUp=false
      this.thumsCount+=1
    }else{
      this.thumsDown=!this.thumsDown
      this.thumsUp=false
      this.thumsCount-=1
    }
  }
}
