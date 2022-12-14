import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeComponent } from "./components/home/home.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { LayoutRoutingModule } from "./layout-routing.module";
@NgModule({
    imports: [SharedModule, LayoutRoutingModule],
    declarations: [LayoutComponent, HomeComponent]
})
export class LayoutModule {}