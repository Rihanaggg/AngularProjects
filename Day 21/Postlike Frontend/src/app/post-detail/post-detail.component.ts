import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postId: number = 0;
  post: any | null = null;
  comments: any[] =[];
  commentForm: { content: string } = { content: '' };

  userSuggestions: User[] = [];
  suggestionsFetched = false;
  showUserSuggestions = false;

  commentFormg: FormGroup = new FormGroup({});

  constructor(private http: HttpClient, private route: ActivatedRoute , private userService: UserService, private fb: FormBuilder) {
    this.commentFormg = this.fb.group({

      commentText: ['', Validators.required]

    });
  }

    getDatabyId(postId: number) {
    return this.http.get(`http://localhost:8080/forum/post/${postId}`);
  }

   getCommentsForPost(postId: number) {
    return this.http.get<Comment[]>(`http://localhost:8080/forum/${postId}/comments`);
  }

  // addComment(postId : number,content :string){
  //   return this.http.post<Comment>(`http://localhost:8080/forum/post/${postId}/comments`,content);
  // }

  addComment(postId: number, commentData: any) {

    const url = `http://localhost:8080/forum/post/${postId}/add-comment`;

    return this.http.post(url, commentData);

  }

  ngOnInit(): void {
    //const idparam = this.route.snapshot.paramMap.get('id');

    this.route.params.subscribe((params) => {

      const postIdParam = params['id'];

      if (postIdParam !== null) {

        this.postId = +postIdParam;
        this.showPost();
        this.showcomments();
      }

    });
  }

  showPost(){
    this.getDatabyId(this.postId).subscribe(
      (data) => {
        this.post = data || null;
      },
      (error) => {
        console.error('Error fetching post data:', error);
      }
    );
  }

  showcomments(){
    this.getCommentsForPost(this.postId).subscribe(
      comments => {
        this.comments = comments;
        console.log(this.comments);
      },
      error => {
        console.error('Error fetching comments:', error);
      }
    );
  }

  addCommentPart(commentValue: string) {

    if (this.postId !== undefined) {

      const newComment = {

        content: commentValue

      };
      this.addComment(this.postId, newComment).subscribe((response: any) => {

        this.getCommentsForPost(this.postId!);

        this.commentForm.content = '';

      });

    } else {

      console.error('Post ID is undefined.');

    }

  }



  fetchUserSuggestions(usernameInitial: string) {

    this.userService.getUsers().subscribe(users => {


      this.userSuggestions = users.filter(user => {

        // Assuming 'name' is the property containing the user's name

        return user.name.toLowerCase().startsWith(usernameInitial.toLowerCase());

      });

      this.suggestionsFetched = true;

      this.showUserSuggestions = this.userSuggestions.length > 0;

    });

  }

  onCommentInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;

    if (inputValue.includes('@')) {
      const usernamePartial = inputValue.split('@').slice(-1)[0].trim();

      if (!this.suggestionsFetched && usernamePartial.length > 0) {
        this.fetchUserSuggestions(usernamePartial);
      } else {
        this.showUserSuggestions = this.userSuggestions.length > 0;
      }
    } else {
      this.showUserSuggestions = false;
    }
  }

  insertSuggestion(user: User) {

    // Insert the selected user suggestion into the comment box

    const commentTextControl = this.commentFormg.get('commentText');

    if (commentTextControl) {

      const commentText = commentTextControl.value;

      const username = user.name;



      // Check if the username is already partially or fully present in the comment text

      if (!commentText.match(/\B@[\w\s]*$/)) {

        // Add the tagged user to the comment box

        commentTextControl.setValue(`${commentText ? commentText + ' ' : ''}@${username} `);

      } else {

        // Replace the last mention if it starts with @

        const updatedCommentText = commentText.replace(/\B@[\w\s]*$/, `@${username} `);

        commentTextControl.setValue(updatedCommentText);

      }

    }
    // Clear the user suggestions and show suggestions if "@" is typed again

    this.userSuggestions = [];

    this.suggestionsFetched = false;

  }


}
