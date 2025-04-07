import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
    declarations: [
        // Register Shared modules here ...
        CardComponent
    ],
    exports: [
        // Allows the module to be exported to other components / modules
        CardComponent
    ]

})
export class SharedModule {

}