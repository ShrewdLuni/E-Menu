import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'sidebar-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-item.component.html',
})


export class SidebarItemComponent {
  @Input() label = "123"
  @Input() href = "#"
}
