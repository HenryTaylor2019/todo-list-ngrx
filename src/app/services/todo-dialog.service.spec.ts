import { TestBed } from '@angular/core/testing';

import { TodoDialogService } from './todo-dialog.service';

describe('DialogServiceService', () => {
  let service: TodoDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
