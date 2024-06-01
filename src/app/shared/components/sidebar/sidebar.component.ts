import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import {MatDividerModule} from '@angular/material/divider'
import { SidebarItemComponent } from "../sidebar-item/sidebar-item.component";

@Component({
  selector: 'sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  imports: [CommonModule, SidebarItemComponent,MatDividerModule]
})
export class SidebarComponent {
  @Input() sidebarItems = [{label: "Analytics", href:"analytics"},{label: "Menu", href:"menu"},{label: "Orders", href:"orders"}]
}