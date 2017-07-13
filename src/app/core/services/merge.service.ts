import { Injectable } from '@angular/core';
import { FileModel } from '../models/file-model';

@Injectable()
export class MergeService {

  constructor() { }

  mergeSingleFile(fileModel: FileModel) {}

  mergeMultipleFiles(fileModel: FileModel) {}

  mergeSkipSingleFile(fileModel: FileModel) {}

  mergeSkipMultipleFiles(fileModel: FileModel) {}
}
