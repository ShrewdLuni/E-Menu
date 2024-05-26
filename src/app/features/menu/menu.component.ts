import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FoodItemComponent } from "../../shared/components/food-item/food-item.component";

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    imports: [CommonModule, FoodItemComponent]
})
export class MenuComponent {
    @Input() categories = ["For Kids","Breakfast(8:00-12.00)","Kitchen","Coffe","Wine","Bar","Cocktail Take Away","Bakery","Take away"]
    @Input() foodItems = [
        {name:"Double cheeseburger with bacon jam and french fries", price:"345 ₴", description:"Beef cutlet, cheddar cheese, bacon jam, pickled cucumbers, french fries", weight:"450g"},
        {name:"Alaska burger with salmon and tuna", price:"365 ₴", description:"Fish cutlet, spicy sauce and truffle aioli, pico de gayo salsa, cilantro", weight:"550g"}
    ]
}