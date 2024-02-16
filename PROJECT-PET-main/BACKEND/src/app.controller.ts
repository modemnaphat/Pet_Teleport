import { Controller, Get ,Query } from'@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { SearchService } from './services/search.service';
import Pet from './entitices/pet.entities';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private configService: ConfigService ,private readonly searchService: SearchService ) {}

  @Get('environment')
  getEnv():any {
    const example_variable = this.configService.get<string>('EXAMPLE_VARIABLE')

    return example_variable
  }
  @Get()
  getHello(): string {
     return this.appService.getHello();
  }

  @Get('status')
  getStatus() : string {
    return this.appService.getStatus();
  }
  
  @Get()
  search(@Query('query') query: string): Promise<Pet[]> {
    return this.searchService.search(query).then(result => result);
  }
}
