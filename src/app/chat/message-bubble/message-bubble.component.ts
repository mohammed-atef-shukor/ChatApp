import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- Import this
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-message-bubble',
  standalone: true, // Assuming you are using standalone
  imports: [CommonModule], // <--- Add CommonModule here
  templateUrl: './message-bubble.component.html',
  styleUrls: ['./message-bubble.component.css']
})
export class MessageBubbleComponent {
  @Input() message!: Message;
}