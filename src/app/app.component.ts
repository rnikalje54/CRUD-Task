import { Component } from '@angular/core';
import { TableComponent } from "./table/table.component";


@Component({
  selector: 'app-root',
  standalone: true,
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [TableComponent]
})
export class AppComponent {
  title = 'crud-table';
}
