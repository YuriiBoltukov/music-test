import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatTableModule} from '@angular/material/table';

export interface Audio {
  id: string;
  name: string;
  fileName: string;
}

const ELEMENT_DATA: Audio[] = [
  {id: '1', name: 'Hydrogen', fileName: '1.0079'},
  {id: '2', name: 'Helium', fileName: '4.0026', },
  {id: '3', name: 'Lithium', fileName: '6.941',},
  {id: '4', name: 'Beryllium', fileName: '9.0122', },
  {id: '5', name: 'Boron', fileName: '10.811'},
];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight'];
  dataSource = ELEMENT_DATA;
}
