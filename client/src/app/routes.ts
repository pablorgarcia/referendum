import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileComponent } from './profile/profile.component';
import { NewQuestionComponent } from './new-question/new-question.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'question/:id', component: QuestionComponent},
  {path: 'profile', component: ProfileComponent},
  // {path: 'auth/signup', component: LoginFormComponent},
  // {path: 'auth/login', component: LoginFormComponent},
  // {path: 'auth/loggedin', component: LoginFormComponent},
  // {path: 'auth/profile', component: ProfileComponent},
  // {path: 'auth/new-question', component: NewQuestionComponent}
];
