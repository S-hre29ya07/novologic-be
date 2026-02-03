import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { WidgetsModule } from './widgets/widgets.module';

@Module({
  imports: [AuthModule, WidgetsModule],
})
export class AppModule {}
