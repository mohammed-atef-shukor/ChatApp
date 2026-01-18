import { afterNextRender, Component, effect, ElementRef, inject, Injector, signal, viewChild } from '@angular/core';
import { Message } from '../models/message.model';
import { MessageInputComponent } from "./message-input/message-input.component";
import { MessagesListComponent } from "./messages-list/messages-list.component";
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  imports: [MessageInputComponent, MessagesListComponent, MatToolbar, MatIconModule]
})
export class ChatComponent {
  messages = signal<Message[]>([
    {
      id: '1',
      text: 'Hey there! Did you see the new designs for the dashboard?',
      sender: 'Alice',
      timestamp: new Date(new Date().getTime() - 1000 * 60 * 15), // 15 mins ago
      isMe: false
    },
    {
      id: '2',
      text: 'Not yet. Are they in Figma?',
      sender: 'Me',
      timestamp: new Date(new Date().getTime() - 1000 * 60 * 12), // 12 mins ago
      isMe: true
    },
    {
      id: '3',
      text: 'Yeah! Check the #design channel. I think the dark mode looks incredible.',
      sender: 'Alice',
      timestamp: new Date(new Date().getTime() - 1000 * 60 * 10),
      isMe: false
    },
    {
      id: '4',
      text: 'Wow, you weren\'t kidding. The contrast is perfect. I love how the primary purple pops against that deep charcoal background. 🚀',
      sender: 'Me',
      timestamp: new Date(new Date().getTime() - 1000 * 60 * 8),
      isMe: true
    },
    {
      id: '5',
      text: 'Exactly! By the way, are we still on for the sprint review at 2 PM?',
      sender: 'Alice',
      timestamp: new Date(new Date().getTime() - 1000 * 60 * 5),
      isMe: false
    },
    {
      id: '6',
      text: 'Yes, I\'ll be there.',
      sender: 'Me',
      timestamp: new Date(new Date().getTime() - 1000 * 60 * 2),
      isMe: true
    },
    {
      id: '7',
      text: 'Perfect. I\'ll bring the updated coffee orders too. see ya!',
      sender: 'Alice',
      timestamp: new Date(),
      isMe: false
    }
  ]);
  newMessage = signal<string>('');

  scrollFrame = viewChild.required<ElementRef>('scrollFrame');
  // 1. Capture the injector here (in the injection context)
  private injector = inject(Injector);

  constructor() {
    // 2. The effect stays in the constructor
    effect(() => {
      this.messages(); // Track the signal

      // 3. Pass the captured injector to afterNextRender
      afterNextRender(() => {
        this.scrollToBottom();
      }, { injector: this.injector });
    });
  }

  scrollToBottom() {
    const frame = this.scrollFrame().nativeElement;
    frame.scrollTop = frame.scrollHeight;
  }


  onSendMessage(text: string) {
    const newMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: 'Me',
      timestamp: new Date(),
      isMe: true
    };
    this.messages.update(messages =>
      [...messages, newMessage]
    );
  }
}