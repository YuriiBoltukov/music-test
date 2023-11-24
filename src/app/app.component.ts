import {ChangeDetectionStrategy, Component, signal, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {MatTableModule} from '@angular/material/table';

export interface Audio {
  id: string;
  name: string;
  fileName: string;
  path: string;
}

const ELEMENT_DATA: Audio[] = [
  {id: '1', name: 'Дрозд', fileName: 'drozd.mp3', path: 'assets/audio/drozd.mp3'},
  {id: '2', name: 'Лес', fileName: 'forest.mp3', path: 'assets/audio/forest.mp3'},
  {id: '3', name: 'Жаворонок', fileName: 'javoronok.mp3', path: 'assets/audio/javoronok.mp3'},
  {id: '4', name: 'Славка', fileName: 'slavka.mp3', path: 'assets/audio/slavka.mp3'},
  {id: '5', name: 'Соловей', fileName: 'solovey.mp3', path: 'assets/audio/solovey.mp3'},
];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  audioSource: WritableSignal<Audio["path"] | null> = signal(null);
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight'];
  dataSource = ELEMENT_DATA;

  openPlayer(audio: Audio) {
    this.audioSource.set(audio.path);
  }
}
