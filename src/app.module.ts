import { Module } from '@nestjs/common';
import { recipiesController } from './recipies/recipies.controller';

@Module({
  imports: [],
  controllers: [recipiesController],
  providers: [],
})
export class AppModule {}
