import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBubbleComponent } from '../message-bubble/message-bubble.component';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  imports: [CommonModule, MessageBubbleComponent],
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent {
  messages = input.required<Message[]>();
}