import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer=false;
  serverCreationStatus="no server was created";
  servername="testingserver";
  username="";
  servercreated=false;
  servers=['server1','server2'];

  constructor() { 
    setTimeout(()=>{
    this.allowNewServer=true;
    },2000)
  }

  ngOnInit() {
  }

  onServerCreation()
  {
    this.servers.push(this.servername);
    this.servercreated=true;
    this.serverCreationStatus="server is created and the name is"+ this.servername;
  }

  onReset(){
    this.username="";
  }
}
