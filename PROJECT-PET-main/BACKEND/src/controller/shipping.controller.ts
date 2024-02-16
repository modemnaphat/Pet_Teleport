import { Controller, Get,Param,Post,Body,Patch } from '@nestjs/common';
import { ShippingService } from 'src/services/shipping.service';
import { NotFoundException } from '@nestjs/common';
import { DeliveryStatus } from 'src/auth/status.enum';

@Controller('pet')
export class StatusController {
  constructor(private readonly shippingStatusService: ShippingService) {}

  @Get()
  getDeliveries() {
    return this.shippingStatusService.getDeliveries();
  }

  @Post()
  addDelivery(@Body() delivery) {
    this.shippingStatusService.addDelivery(delivery);
    return 'Delivery added successfully';
  }

  @Patch(':id/status')
  updateDeliveryStatus(@Param('id') id: string, @Body('status') status: DeliveryStatus) {
    const updated = this.shippingStatusService.updateDeliveryStatus(id, status);
    if (updated) {
      return 'Delivery status updated successfully';
    }
    throw new NotFoundException('Delivery not found');
  }
}

