import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('recipies')
export class recipiesController {
  @Get('')
  getRecipies(): any {
    return 'test';
  }

  @Get('/:ID')
  getRecipie(): any {
    return 'test recipies';
  }

  @Post('')
  postRecipie(): any {
    return 'Recipie Created!!';
  }

  @Put('/:ID')
  putRecipie(): any {
    return 'Recipie updated';
  }
}
