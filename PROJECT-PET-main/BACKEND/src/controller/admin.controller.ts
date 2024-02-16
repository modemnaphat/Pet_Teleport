// admin.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete, Req } from '@nestjs/common';
import { AdminService } from 'src/services/admin.service';
import Admin from '../entitices/admin.entities';
import { CreateAdminDTO, UpdateAdminDTO } from '../pet.dto';


@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  postCreat(@Body() createAdminDTO : CreateAdminDTO): Promise<Admin>{
    return this.adminService.creat(createAdminDTO)
  }

  @Get()
  findAll(@Req() req:Request): Promise<Admin[]> {
    return this.adminService.findALL();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @Put(':id')
    updateAdmin(@Param('id') id: number, @Body() updateAdminDTO: UpdateAdminDTO): Promise<Admin | null> {
      return this.adminService.updateAdmin(id, updateAdminDTO);
    }
    @Post()
  
  @Delete(":id")
  deleteuserById(@Param('id') id :number) : string{
    this.adminService.deleteQuryBuilder(id)
    return "OK,It's done."
  }
}
