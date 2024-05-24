import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-about-item',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about-item.component.html',
})
export class AboutItemComponent {
    @Input() header = "adress"
    @Input() info = "Test Adress 123"
    @Input() icon = "A"
}