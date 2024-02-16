// SendNotificationService.ts
import { Injectable } from "@nestjs/common";
import { Socket } from 'socket.io'; // ต้องการ import Socket หากใช้ WebSockets

@Injectable({
  
})
export class SendNotificationService {
  // ตัวอย่างสำหรับ WebSockets
  private sockets: Socket[] = [];

  sendOrderConfirmation(user: any): void {
    // ตรวจสอบว่ามี WebSockets ที่เชื่อมต่อหรือไม่
    if (this.sockets.length > 0) {
      // ส่งข้อมูลผู้ใช้หรือแจ้งเตือนไปยัง WebSockets ทุกตัว
      this.sockets.forEach((socket) => {
        socket.emit('orderConfirmation', { user });
      });
    }

    // ส่วนอื่น ๆ ที่คุณต้องการทำหลังจากการสั่งซื้อ
  }

  // เมทอดที่ใช้เพื่อเพิ่มหรือลบ Socket จาก this.sockets
  addSocket(socket: Socket): void {
    this.sockets.push(socket);
  }

  removeSocket(socket: Socket): void {
    const index = this.sockets.indexOf(socket);
    if (index !== -1) {
      this.sockets.splice(index, 1);
    }
  }
}
