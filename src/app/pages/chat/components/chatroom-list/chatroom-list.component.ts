import { Component, OnInit } from '@angular/core';
import { ChatroomService } from './../../../../services/chatroom.service';
import { AuthService } from './../../../../services/auth.service';
@Component({
  selector: 'app-chatroom-list',
  templateUrl: './chatroom-list.component.html',
  styleUrls: ['./chatroom-list.component.scss']
})
export class ChatroomListComponent implements OnInit {
  constructor(
    public chatroomService: ChatroomService,
    public auth: AuthService
  ) {}

  ngOnInit() {
  }

}
