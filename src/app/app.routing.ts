import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfExpComponent } from './prof-exp/prof-exp.component';
import { SkillsComponent } from './skills/skills.component';
import { PageNotFoundComponent } from './PageNotFoundComponent';
const appRoutes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'exp', component: ProfExpComponent },
  { path: 'skills', component: SkillsComponent },    
  { path: 'contact', component: ContactComponent }, 
  { path: '**', component: PageNotFoundComponent } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
     // { useHash: true }
      // { enableTracing: true }  // This is for debugging only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
