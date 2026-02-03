import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { WidgetDto } from './dto/widget.dto';

const DATA_DIR = path.join(process.cwd(), 'data');
const WIDGETS_FILE = path.join(DATA_DIR, 'widgets.json');

const DEFAULT_WIDGETS: WidgetDto[] = [
  { id: 'text-1', type: 'text', order: 0, settings: { content: 'Welcome to the dashboard!' } },
  { id: 'counter-1', type: 'counter', order: 1, settings: { value: 0, step: 1 } },
];

@Injectable()
export class WidgetsService {
  private ensureDataDir() {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  }

  getWidgets(): WidgetDto[] {
    this.ensureDataDir();
    if (!fs.existsSync(WIDGETS_FILE)) {
      return [...DEFAULT_WIDGETS];
    }
    const raw = fs.readFileSync(WIDGETS_FILE, 'utf-8');
    try {
      return JSON.parse(raw);
    } catch {
      return [...DEFAULT_WIDGETS];
    }
  }

  putWidgets(widgets: WidgetDto[]): WidgetDto[] {
    this.ensureDataDir();
    const sorted = [...widgets].sort((a, b) => a.order - b.order);
    fs.writeFileSync(WIDGETS_FILE, JSON.stringify(sorted, null, 2), 'utf-8');
    return sorted;
  }
}
