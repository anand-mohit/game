import {Component, OnInit, OnDestroy} from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { Headers, Http } from '@angular/http';
// import './app.component.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private http: Http) { };

  Url = 'http://172.23.238.209:8080/hackathon';
  private headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json',
  'Access-Control-Allow-Origin' : 'http://localhost:4200', 'Access-Control-Allow-Credentials': 'true'});


  title = 'app';
  private timer;
  private sub;
  random:any;
  ticks=0;
  state:any;
  id:any;
  count:number=0;
  time:any;
  private subtimer;
  private subsub;
  temp:any;

  func(number:any):any{
  console.log(number);
  this.state='state'+number;
  this.id=number;
  console.log(this.state);
  

 }



ngOnInit() {

    this.timer = Observable.timer(90000);
    // subscribing to a observable returns a subscription object
    this.sub = this.timer.subscribe(t => this.tickerFunc(t));
    

}

startTimer():void{
  console.log("iejfiejief");
  if(this.subsub)
  this.subsub.unsubscribe();
  this.subtimer = Observable.timer(500,500);
  this.subsub = this.subtimer.subscribe(t =>this.resetfunc());
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
    {
      this.random=(Math.floor((Math.random( ) *10)+1)%4)+1;
      console.log(this.random);
    
      console.log("in Resetfunc");
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

      this.count +=1;
    }
   

    


    this.temp = this.random;

}



resetfunc():void{
  this.random=(Math.floor((Math.random( ) *10)+1)%4)+1;
  console.log(this.random);

  console.log("in Resetfunc");
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
} gitURL

onSubmit(name, email, id, city){
  
  console.log('Submitting json', JSON.stringify({name: name, emailId: email,
    projectId: id, location: city,}));

    const j = JSON.stringify({name: name, emailId: email,
      projectId: id, location: city});
      this.http
      .post('http://172.23.238.209:8080/hackathon', j, {headers: this.headers}).toPromise().catch(this.handleError);

}
private handleError(error: any) {
  console.error('An error occurred', error); // for demo purposes only
}
}

