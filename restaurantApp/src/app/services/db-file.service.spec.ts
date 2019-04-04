import { TestBed } from '@angular/core/testing';

import { DbFileService } from './db-file.service';

describe('DbFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbFileService = TestBed.get(DbFileService);
    expect(service).toBeTruthy();
  });
});
