import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'food-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-item.component.html',
})
export class FoodItemComponent {
  @Input() name = "Double cheeseburger with bacon jam and french fries"
  @Input() price = "345 ₴"
  @Input() description = "Beef cutlet, cheddar cheese, bacon jam, pickled cucumbers, french fries"
  @Input() weight = "450g"
}