import { NgModule } from '@angular/core';

import { ErrorHandlerService } from './services/error-handler.service';
import { ProductService } from './services/product.service';
import { LoggerService } from './services/logger.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { PopupService } from './services/pop-up.service';

@NgModule({
	providers: [ErrorHandlerService, ProductService, LoggerService, AuthService, PopupService, AuthGuard],
})
export class CoreModule {}
