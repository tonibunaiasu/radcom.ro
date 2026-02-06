import * as migration_20260204_201015 from './20260204_201015';
import * as migration_20260204_225400 from './20260204_225400';
import * as migration_20260204_225800 from './20260204_225800';

export const migrations = [
  {
    up: migration_20260204_201015.up,
    down: migration_20260204_201015.down,
    name: '20260204_201015'
  },
  {
    up: migration_20260204_225400.up,
    down: migration_20260204_225400.down,
    name: '20260204_225400'
  },
  {
    up: migration_20260204_225800.up,
    down: migration_20260204_225800.down,
    name: '20260204_225800'
  },
];
