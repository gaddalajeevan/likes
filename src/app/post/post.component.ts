import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post?: Post;
  @Input() index: number = 0;

  memberName = 'Sam';
  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.post);
    console.log(this.index);
  }

  onDelete() {
    console.log('onDelete() called!');
    this.postService.deletePost(this.index);
  }

  onEdit() {
    console.log('onEdit() called!');
    this.router.navigate(['/post-edit', this.index]);
  }

  likePost() {
    this.postService.likePost(this.index);
  }
}
