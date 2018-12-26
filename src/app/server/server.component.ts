import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
    .online{
        color:white;
    }
    `]

})
export class ServerComponent{

 serverid:number =10;
 status:String='offline';

 getServerStatus(){
     return this.status;
 }

 constructor(){

    this.status=Math.random()>0.5 ?'online':'offline';

 }


 getcolor()
 {
     return this.status==='online'?'green':'red';
 }
}