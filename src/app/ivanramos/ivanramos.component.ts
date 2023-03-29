import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../core/servicios/postservice.service';

@Component({
  selector: 'app-ivanramos',
  templateUrl: './ivanramos.component.html',
  styleUrls: ['./ivanramos.component.css']
})
export class IvanramosComponent implements OnInit{

  posts:any;
  constructor(public postService:PostserviceService){

    
  }
  ngOnInit(): void {
    this.listarPosts();    
  }
  
  
    listarPosts()
      {
        this.postService.listarPosts().subscribe(data=>{
          this.posts = data;
        })
      }
  }


