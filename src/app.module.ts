import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile.component';
import { SearchformComponent } from './components/searchform.component';



// Services
import { GithubService } from './services/github.service';

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule],
  declarations: [AppComponent, ProfileComponent, SearchformComponent],
  bootstrap: [AppComponent],
  providers: [GithubService]

})
export class AppModule { }



