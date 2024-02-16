// SendNotificationController.ts
import { Body, Controller, Post } from '@nestjs/common';
import { SendNotificationService } from 'src/services/sendnotification';
import { CreateSendNotificationDto } from 'src/pet.dto';
@Controller('SendNotification')
export default class SendNotificationController {
  constructor(private readonly sendNotificationService: SendNotificationService) {}

  @Post('orderConfirmation')
  async orderConfirmation(@Body() CreateSendNotificationDto: CreateSendNotificationDto): Promise<string> {
    // ทำการประมวลผลคำสั่งซื้อ และส่งข้อมูลผู้ใช้ไปยัง frontend
    const user = CreateSendNotificationDto.user; // สมมติว่ามีข้อมูลผู้ใช้ใน createSendNotification

    // ทำการแจ้งเตือนไปยัง frontend
    await this.sendNotificationService.sendOrderConfirmation(user);

    return 'Order confirmation sent successfully';
  }
  
}
