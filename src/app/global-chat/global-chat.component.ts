import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../app-person/interfaces/person';
import { AuthService } from '../auth/services/auth.service';
import { GlobalMessage } from '../global-interfaces/globalMessage';
import { GlobalChatServiceService } from '../shared-services/global-chatService.service';
import { UserServiceService } from '../shared-services/user-service.service';

@Component({
  selector: 'app-global-chat',
  templateUrl: './global-chat.component.html',
  styleUrls: ['./global-chat.component.scss']
})
export class GlobalChatComponent implements OnInit {

  constructor(private chatService: GlobalChatServiceService, private userService:UserServiceService) { }
  msgDto: GlobalMessage = new GlobalMessage();
  msgInboxArray =  [];
  currentUser: Person
  ngOnInit() {
    this.chatService.retrieveMappedObject().subscribe( (receivedObj: GlobalMessage) => { this.addToInbox(receivedObj);});  // calls the service method to get the new messages sent
    this.userService.getCurrentUser().subscribe(res=>{this.currentUser = res});
                                     
  }

  send(): void {
    this.msgDto.user = this.currentUser.fullName;
    this.msgDto.userId = this.currentUser.userId;
    if(this.msgDto) {
      if(this.msgDto.message.length == 0){
        window.alert("Both fields are required.");
        return;
      } else {
        this.chatService.broadcastMessage(this.msgDto);
       //this.resetMsgBox()                   // Send the message via a service
      }
    }
  }

  addToInbox(obj: GlobalMessage) {
    let newObj = obj.user;
    //let newObj = new GlobalMessage();
    //newObj.user = obj.user;
    //newObj.message = obj.message;
    console.log("this is myobj");
    console.log(newObj);
    this.msgInboxArray.push(newObj);
    this.resetMsgBox();
  }

  resetMsgBox(){
    this.msgDto.message = "";


  }


}