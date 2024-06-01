import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SidebarComponent } from "../../shared/components/sidebar/sidebar.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    imports: [CommonModule, SidebarComponent]
})
export class DashboardComponent {}