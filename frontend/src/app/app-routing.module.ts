import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddAuctionComponent } from './components/add-auction/add-auction.component';
import { AuctionDetailsComponent } from './components/auction-details/auction-details.component';
import { AuctionListComponent } from './components/auction-list/auction-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddNewsComponent } from './components/news/add-news/add-news.component';
import { NewsDetailsComponent } from './components/news/news-details/news-details.component';
import { NewsComponent } from './components/news/news.component';
import { AuctionspageComponent } from './components/pages/auctionspage/auctionspage.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';

const routes: Routes = [
  {path: 'auctions/detail/:id', component: AuctionDetailsComponent},
  {path: 'search/:keyword', component: AuctionListComponent},
  {path: 'category/:id', component: AuctionListComponent},
  {path: 'category', component: AuctionListComponent},
  {path: 'auctions', component: AuctionspageComponent},
  {path: 'auctions/:query', component: AuctionspageComponent},
  {path: "news", component: NewsComponent},
  {path: "news/:id", component: NewsDetailsComponent},
  {path: "addNews", component: AddNewsComponent},
  {path: 'about', component: AboutComponent},
  {path:'contact',component:ContactComponent},
  //add a route for add auction form
  {path: 'addAuction', component: AddAuctionComponent},
  // {path: '', redirectTo: '/auctions', pathMatch: 'full'},
  {path: '', component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
