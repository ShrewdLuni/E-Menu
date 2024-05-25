import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AboutItemComponent } from "../../shared/components/about-item/about-item.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [CommonModule, AboutItemComponent]
})
export class HomeComponent {
    @Input() name = "Brooks"
    @Input() adress = "Дніпро, вул. Ширшова, 4"
    @Input() categories = ["For Kids","Breakfast(8:00-12.00)","Kitchen","Coffe","Wine","Bar","Cocktail Take Away","Bakery","Take away"]
    @Input() aboutItems = [{icon: "A",header: "Adress",info: "Дніпро, вул. Ширшова, 4"},{icon: "B",header: "Working hours",info: "08:00 — 22:30"},{icon: "C",header: "Delivery",info: "+1 234 567 890"} ,{icon: "D",header: "Phone",info: "+9 876 543 210"}]
}