import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { routes } from './routes';
import { SessionService } from './services/session.service';
import { QuestionService } from './services/question.service';
import { AnswerService } from './services/answer.service';
import { LocationService } from './services/location.service';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { QuestionComponent } from './question/question.component';
import { HomeComponent } from './home/home.component';
import { ChartsModule } from 'ng2-charts';
import { PipePipe } from './pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    QuestionComponent,
    HomeComponent,
    PipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ChartsModule
  ],
  providers: [
    SessionService,
    QuestionService,
    AnswerService,
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
