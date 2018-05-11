import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'question/:id', component: QuestionComponent},
  {path: 'auth/signup', component: AppComponent},
  {path: 'auth/login', component: AppComponent},
  {path: 'auth/profile', component: AppComponent},
  {path: 'auth/new-question', component: AppComponent}
];
