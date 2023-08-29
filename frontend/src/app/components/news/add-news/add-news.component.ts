import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { News } from 'src/app/common/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  news: News = new News();
  closeResult!: string;


  constructor(private newsService:NewsService,private modalService:NgbModal) { }


  ngOnInit(): void {
  }


  addNews(news: News) {
    // Save to database
    this.newsService.addNews(news).subscribe({
      next: (data) => {
          if (data.success) {
            alert('News added successfully.');

          }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  //upload base64 image to server
  uploadImage(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.news.imageUrl = reader.result as string;
    };
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason:any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  getDismissReason(reason: any) {
    throw new Error('Category is required.');
  }


}
