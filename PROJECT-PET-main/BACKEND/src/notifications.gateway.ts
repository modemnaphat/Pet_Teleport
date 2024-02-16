import { WebSocketGateway,WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage,OnGatewayInit } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class NotificationsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() server: Server;

  afterInit(server: Server) {
    // ทำอะไรก็ตามที่คุณต้องการหลังจาก Gateway ถูกเริ่มต้น
  }

  handleConnection(client: any, ...args: any[]) {
    // ทำอะไรก็ตามที่คุณต้องการเมื่อมีการเชื่อมต่อ
  }

  handleDisconnect(client: any) {
    // ทำอะไรก็ตามที่คุณต้องการเมื่อมีการตัดการเชื่อมต่อ
  }

  @SubscribeMessage('sendMessage') // Event handler สำหรับการรับข้อความ
  handleMessage(client: Socket, payload: any): void {
    // ทำอะไรก็ตามที่ต้องการเมื่อได้รับข้อความ
    console.log('Received message:', payload);

    // ส่งข้อความกลับไปยัง client
    this.server.to(client.id).emit('sendMessage', `Hello, ${payload}`);
  }

  sendNotification(orderDetails: any) {
    // ส่งข้อมูลการแจ้งเตือนไปยังทุก client
    this.server.emit('orderNotification', orderDetails);
  }
}