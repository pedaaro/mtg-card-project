import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CollectionSearchComponent } from './collection-search/collection-search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CardDisplayComponent } from './card-display/card-display.component';
import { MagicService } from './magic.service';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { CreatureTypeComponent } from './creature-type/creature-type.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionSearchComponent,
    SearchResultsComponent,
    CardDisplayComponent,
    AppLayoutComponent,
    CreatureTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [MagicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
