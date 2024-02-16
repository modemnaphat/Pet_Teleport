import { Injectable } from '@nestjs/common';
import { DeliveryStatus } from 'src/auth/status.enum';
@Injectable()
export class ShippingService {
    private deliveries = [];
  getDeliveries() {
    // Your logic to fetch product status from database or external system
    // For example, return a hardcoded status for demonstration
    return this.deliveries;
  }

  addDelivery(delivery: any) {
    this.deliveries.push(delivery);
  }
  updateDeliveryStatus(id: string, status: DeliveryStatus) {
    const delivery = this.deliveries.find((d) => d.id === id);
    if (delivery) {
        delivery.status = status;
        return true;
    }
    return false;
}

}