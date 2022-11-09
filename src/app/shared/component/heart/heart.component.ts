import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.scss']
})
export class HeartComponent implements OnInit {
@Input() isLike !: boolean;
@Input() isCount!: number;

  constructor() { }

  ngOnInit(): void {
  }
  onclick(){
    // console.log("hello");

    if(this.isLike){
      this.isLike=!this.isLike
      this.isCount-= 1
    }else{
      this.isLike=!this.isLike
      this.isCount+= 1
    }
  }
}
