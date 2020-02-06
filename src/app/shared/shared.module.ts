import { NgModule } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    exports: [InputComponent, RadioComponent, RatingComponent,
            FormsModule, ReactiveFormsModule, CommonModule]
})

/**
 * Exports acima: Indica quais os componentes de dentro 
 * do modulo que poderao ser utilizados em outros modulos
 */

export class SharedModule {}