import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuctionCategoryMenuComponent } from './components/auction-category-menu/auction-category-menu.component';
import { AuctionDetailsComponent } from './components/auction-details/auction-details.component';
import { AuctionListComponent } from './components/auction-list/auction-list.component';
import { AuctionSearchComponent } from './components/auction-search/auction-search.component';
import { AuctionService } from './services/auction.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrudformComponent } from './components/crudform/crudform.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from './components/crudform/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { BidstatusComponent } from './components/bidstatus/bidstatus.component';
import { AddAuctionComponent } from './components/add-auction/add-auction.component';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailsComponent } from './components/news/news-details/news-details.component';
import { AddNewsComponent } from './components/news/add-news/add-news.component';
import { Ad4newsComponent } from './components/news/ad4news/ad4news.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuctionspageComponent } from './components/pages/auctionspage/auctionspage.component';
import { AuctiondetailpageComponent } from './components/pages/auctiondetailpage/auctiondetailpage.component';
import { NewsdetailpageComponent } from './components/pages/newsdetailpage/newsdetailpage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { ActiveauctionsComponent } from './components/pages/homepage/activeauctions/activeauctions.component';
import { FinishedauctionsComponent } from './components/pages/homepage/finishedauctions/finishedauctions.component';

@NgModule({
  declarations: [
    AppComponent,
    AuctionCategoryMenuComponent,
    AuctionDetailsComponent,
    AuctionListComponent,
    AuctionSearchComponent,
    CrudformComponent,
    DialogComponent,
    BidstatusComponent,
    AddAuctionComponent,
    NewsComponent,
    NewsDetailsComponent,
    AddNewsComponent,
    Ad4newsComponent,
    AboutComponent,
    ContactComponent,
    AuctionspageComponent,
    AuctiondetailpageComponent,
    NewsdetailpageComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ActiveauctionsComponent,
    FinishedauctionsComponent,
    NewsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    AuctionService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
