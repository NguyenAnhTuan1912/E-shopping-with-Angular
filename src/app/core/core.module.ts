import { NgModule } from '@angular/core';

import { ErrorHandlerService } from './services/error-handler.service';
import { ProductService } from './services/product.service';
import { LoggerService } from './services/logger.service';

@NgModule({
  providers: [ErrorHandlerService, ProductService, LoggerService],
})
export class CoreModule {}
