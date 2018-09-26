import { IndexedDBConfig, IndexedDBTable, IndexedDBTableKey, IndexedDBTableIndex } from '@app/core/storage/indexedDB-config';

export class DatabaseConfig implements IndexedDBConfig {
  dbName = 'slow cooker';
  dbVersion = 1;
  tables = [new IngredientTable()];
}

export class IngredientTable implements IndexedDBTable {
  name = 'ingredient';
  key = new IngredientKey();
  // indexes = [new IngredientIndex()];
}

export class IngredientKey implements IndexedDBTableKey {
  path = 'name';
}

// export class IngredientIndex implements IndexedDBTableIndex {
//   name = 'ingredient';
//   unique = false;
// }
