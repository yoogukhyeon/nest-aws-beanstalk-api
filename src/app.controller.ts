import { Controller, Get } from '@nestjs/common';

@Controller('')
export class appController {
  constructor() {}

  @Get()
  home() {
    return 'API';
  }
}
