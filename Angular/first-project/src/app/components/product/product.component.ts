import { Component, Input } from '@angular/core' //импортируем из энгуляр декоратор
import { IProduct } from 'src/app/models/product'

@Component({
    selector: 'app-product', //
    templateUrl: './product.component.html' //путь до шаблона
})
export class ProductComponent {
    @Input() product: IProduct

    details = false
}