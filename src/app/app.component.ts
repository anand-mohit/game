
import {Component, OnInit, OnDestroy} from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
// import './app.component.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  private timer;
  private sub;
  random:any;
  ticks=0;
  state:any;
  id:any;
  count:number=0;
time:any;
  
  temp:any;

  func(number:any):any{
  console.log(number);
  this.state='state'+number;
  this.id=number;
  console.log(this.state);
  this.random=(Math.floor((Math.random( ) *10)+1)%4)+1;
  console.log(this.random);

  }

  ngOnInit() {
    this.timer = Observable.timer(90000);
    // subscribing to a observable returns a subscription object
    this.sub = this.timer.subscribe(t => this.tickerFunc(t));
    }

  tickerFunc(tick){
    console.log(this);
    this.ticks = tick;
    alert("Game Over");
}
ngOnDestroy(){
  console.log("Destroy timer");
  // unsubscribe here
  this.sub.unsubscribe();

}


  change(btn,number:any)
  { 
    if(number==this.temp)
    this.count +=1;


    this.state='b1';
    var property=document.getElementById(this.state);
    property.style.background="grey";
    this.state='b2';
    var property=document.getElementById(this.state);
    property.style.background="grey";
    this.state='b3';
    var property=document.getElementById(this.state);
    property.style.background="grey";
    this.state='b4';
    var property=document.getElementById(this.state);
    property.style.background="grey";
    this.state='b'+this.random;
    var property=document.getElementById(this.state);
    property.style.background="white";
    console.log(this.count);

    this.temp = this.random;
    this.time=new Date().getTime() + 10*1000;
    if(this.count==5)
    alert("Game Over");
      }

}
  
  
