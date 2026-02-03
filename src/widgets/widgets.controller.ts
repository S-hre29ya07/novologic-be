import { Body, Controller, Get, Put } from '@nestjs/common';
import { PutWidgetsDto } from './dto/widget.dto';
import { WidgetsService } from './widgets.service';

@Controller('widgets')
export class WidgetsController {
  constructor(private readonly widgetsService: WidgetsService) {}

  @Get()
  getWidgets() {
    return this.widgetsService.getWidgets();
  }

  @Put()
  putWidgets(@Body() body: PutWidgetsDto) {
    return this.widgetsService.putWidgets(body.widgets);
  }
}
