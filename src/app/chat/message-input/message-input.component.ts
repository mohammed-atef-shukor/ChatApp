import { Component, EventEmitter, output, Output, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule
  ],
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent {
  messageText = signal<string>(''); // Define the variable for [(ngModel)]
  send = output<string>(); // Define the event for the parent
  sendMessage() {
    if (this.messageText().trim()) {

      this.send.emit(this.messageText());
      this.messageText.set('');

    }
  }
}