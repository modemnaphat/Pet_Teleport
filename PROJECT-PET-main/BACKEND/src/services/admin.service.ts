import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminDTO,UpdateAdminDTO } from "src/pet.dto";
import Admin from "src/entitices/admin.entities";
@Injectable()
export class AdminService {
 
    constructor(
        @InjectRepository(Admin)
        private adminRepository: Repository<Admin>,
    ) {}
 
    async findALL(): Promise<Admin[]> {
        return this.adminRepository.find();
    }
 

    findOne(id: number): Promise<Admin | null> {
        return this.adminRepository.findOne({ where: { id: id } });
      }  
      creat(admin : CreateAdminDTO) : Promise<Admin | null>{
        return this.adminRepository.save(admin);
      }
    
    async updateAdmin(id: number, update: UpdateAdminDTO): Promise<Admin | null> {
        const adminToUpdate = await this.adminRepository.findOne({ where: { id: id } });
        if (!adminToUpdate) {
            throw new NotFoundException('Admin not found');
        }
    
        // ทำการอัปเดตข้อมูล
        adminToUpdate.username = update.username;
        adminToUpdate.email = update.Email;
        adminToUpdate.password = update.password;
        adminToUpdate.phone = update.phone;
    
        // บันทึกข้อมูล
        await this.adminRepository.save(adminToUpdate);
    
        // ส่งข้อมูล Admin ที่ถูกอัปเดตกลับ
        return adminToUpdate;
    }
    
    async deleteQuryBuilder(id: number): Promise<void> {
        const adminToDelete = await this.adminRepository.findOne({ where: { id: id } });
     
        if (!adminToDelete) {
          throw new NotFoundException('Admin not found');
        }
     
        await this.adminRepository.remove(adminToDelete);
        const deletedAdmin = await this.adminRepository.findOne({ where: { id: id } });
     
        if (deletedAdmin) {
          console.log('Admin deleted successfully');
        } else {
          console.log('Admin not found after deletion')
        }
      }
     
    
     
    }