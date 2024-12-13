import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'oldAngular';

  themeMode: string = "Dark";

  constructor(private userService: UserService) {
    this.userService.currentMode$.next(this.themeMode);
  }

  changeMode() {
    this.themeMode = this.themeMode == "Dark" ? 'Normal':'Dark';
   
   this.userService.currentMode$.next(this.themeMode);
   this.userService.currentThemeBehvaiout.next(this.themeMode);
    //localStorage.setItem('currentTheme',this.themeMode)
  }

  
}
