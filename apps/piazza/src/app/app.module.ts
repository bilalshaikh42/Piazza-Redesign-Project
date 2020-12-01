import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CloseButtonComponent } from './close-button/close-button.component';
import { FooterComponent } from './footer/footer.component';
import { OverviewComponent } from './overview/overview.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FullPageComponent } from './full-page/full-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ClassComponent } from './class/class.component';
import { PostComponent } from './post/post.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ColumnComponent } from './column/column.component';
import { MatChipsModule } from '@angular/material/chips';
import { FilterComponent } from './filter/filter.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CloseButtonComponent,
    FooterComponent,
    OverviewComponent,
    HomeComponent,
    FullPageComponent,
    SidebarComponent,
    ClassComponent,
    PostComponent,
    ColumnComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    RouterModule,
    MatCardModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
