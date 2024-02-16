import { Body,Controller,Get,Param,Post,Put,Req,Delete, Request } from "@nestjs/common";
import { PurchaseorderService } from "src/services/purchase.service";
import PurchaseOrder from "src/entitices/purcaseorder.entities";
import { CreatePurcaseorderDTO, UpdatePurchaseorderDTO } from "src/pet.dto";

@Controller('purchaseorder')
export class PurchaseOrderController {
    constructor(private readonly purchaseorderService : PurchaseorderService){

    }
   @Get()
   getIndex(@Req() request : Request ) : Promise<PurchaseOrder[]> {
    return this.purchaseorderService.findALL();
   }
   
    @Get(':id')
    getPurchaseorderById(@Param('id') id : number) :Promise<PurchaseOrder> {
       return this.purchaseorderService.findOne(id)
    }
    @Post()
    postCreate(@Body() createPurchaseorderDTO : CreatePurcaseorderDTO): any{
      
      return this.purchaseorderService.create(createPurchaseorderDTO)
    }
  
    @Put(':id')
    updatePurchaseorderById(@Param('id') id :number, @Body() UpdatePurchaseorderDTO : UpdatePurchaseorderDTO) : Promise<PurchaseOrder> {
      return this.purchaseorderService.update(UpdatePurchaseorderDTO)
    }

    @Delete(":id")
    deletePurchaseorderById(@Param('id') id : number) :string {
      this.purchaseorderService.deleteById(id);
      return "OK"
    }
    
  }