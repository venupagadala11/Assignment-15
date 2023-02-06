import { Component, DoCheck, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifeCycle';
  str:string="hello everyone";
  sendingData:string=" Default";
  add(input:string)
  {
  this.sendingData=input;
  }
  constructor()
  {
    console.log(this.sendingData)
  }

  ngOnChanges(changes:SimpleChange)
  {
  console.log(' This is ngOnchanges')
  console.log(changes);
}
ngOnInit(){
 console.log('This is ngOnInit')
//  console.log(this.value);
}
ngDoCheck(){
console.log('This is ngDoCheck')
}
ngAfterContentInit(){
console.log('This is ngAfterContentInit ')
}
ngAfterContentChecked(){
console.log('This is ngAfterContentChecked')
}
ngAfterViewInit(){
console.log('This is ngAftervieinit')
}
ngAfterViewChecked(){
console.log('This is ngAfterviewchecked')
}
ngOnDestroy(){
console.log('This is ngondistroy')
}
}

