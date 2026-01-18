export interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
  isMe: boolean; // Helps us determine if the bubble goes left or right
}