import { NgModule } from '@angular/core';

import { ErrorHandlerService } from './services/error-handler.service';
import { ProductService } from './services/product.service';
import { LoggerService } from './services/logger.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
	providers: [ErrorHandlerService, ProductService, LoggerService, AuthGuard],
})
export class CoreModule {}
