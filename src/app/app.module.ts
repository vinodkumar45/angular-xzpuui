import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LibraryCardComponent } from './cards/library-card/library-card.component';
import { GroupsComponent } from './cards/groups/groups.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'groups', component: GroupsComponent },
      { path: 'library-card', component: LibraryCardComponent },
    ]),
  ],
  declarations: [AppComponent, GroupsComponent, LibraryCardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
