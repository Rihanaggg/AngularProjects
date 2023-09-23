import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  postId: number = 0;
  post: any | null = null;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

    getDatabyId(postId: number) {
    return this.http.get(`http://localhost:8080/forum/post/${postId}`);
  }

  ngOnInit(): void {
    //const idparam = this.route.snapshot.paramMap.get('id');

    this.route.params.subscribe((params) => {

      const postIdParam = params['id'];

      if (postIdParam !== null) {

        this.postId = +postIdParam;
        this.showPost();
        

      }

    });

    // if (idparam !== null && idparam !== undefined && !isNaN(+idparam)) {
    //   this.postId = + idparam;


    // } else {
    //   console.error('Invalid post ID in the URL:');
    // }


  }

  showPost(){
    this.getDatabyId(this.postId).subscribe(
      (data) => {
        this.post = data || null;
        console.log(this.post);
      },
      (error) => {
        console.error('Error fetching post data:', error);
      }
    );
  }
}
