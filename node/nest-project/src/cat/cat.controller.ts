import { Controller, Get } from '@nestjs/common';
import { Cat } from '../cat';

@Controller('cat')
export class CatController {
  @Get()
  getAllTheCats(): Cat[] {
    return [new Cat()];
  }
}
