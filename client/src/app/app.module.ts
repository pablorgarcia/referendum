import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { routes } from './routes';
import { SessionService } from './services/session.service';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { QuestionComponent } from './question/question.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { QuestionService } from './services/question.service';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './home/home.component';
import { AnswerService } from './services/answer.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    QuestionComponent,
    NewQuestionComponent,
    HomeComponent
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
    AnswerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
