export class TextWidgetDto {
  id: string;
  type: 'text';
  order: number;
  settings: { content: string };
}

export class CounterWidgetDto {
  id: string;
  type: 'counter';
  order: number;
  settings: { value: number; step: number };
}

export type WidgetDto = TextWidgetDto | CounterWidgetDto;

export class PutWidgetsDto {
  widgets: WidgetDto[];
}
