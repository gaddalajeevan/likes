import { EventEmitter, Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  listChangedEvent: EventEmitter<Post[]> = new EventEmitter();
  listOfPosts: Post[] = [
    new Post(
      'VOLLEY BALL',
     'Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology.',
       'https://res.cloudinary.com/dt69odyxb/image/upload/v1682400715/cld-sample-3.jpg',
      'test@test.com',
      new Date(),
       5
     ),
     new Post(
      'Hampi boy',
      'Hampi is an ancient village in the south Indian state of Karnataka. It’s dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the River Tungabhadra is the 7th-century Hindu Virupaksha Temple, near the revived Hampi Bazaar. A carved stone chariot stands in front of the huge Vittala Temple site. Southeast of Hampi, Daroji Bear Sanctuary is home to the Indian sloth bear.',
       'https://res.cloudinary.com/dt69odyxb/image/upload/v1682400698/samples/people/boy-snow-hoodie.jpg',
       'test@test.com',
       new Date(),
       2
    ),
    new Post(
      'RIDING WITH CYCLE',
      'Hampi is an ancient village in the south Indian state of Karnataka. It’s dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the River Tungabhadra is the 7th-century Hindu Virupaksha Temple, near the revived Hampi Bazaar. A carved stone chariot stands in front of the huge Vittala Temple site. Southeast of Hampi, Daroji Bear Sanctuary is home to the Indian sloth bear.',
       'https://res.cloudinary.com/dt69odyxb/image/upload/v1682400697/samples/bike.jpg',
       'test@test.com',
       new Date(),
       2
    ),
    
  ];

  // facility 1
  getPosts() {
    return this.listOfPosts;
  }

  // facilty 2
  deletePost(index: number) {
    this.listOfPosts.splice(index, 1);
  }

  // Facility 3
  addPost(post: Post) {
    if (!this.listOfPosts){
      this.listOfPosts=[]
    }
    this.listOfPosts.push(post);
  }

  // facility 4
  updatePost(index: number, post: Post) {
    this.listOfPosts[index] = post;
  }

  // facility 5
  getPost(index: number) {
    return this.listOfPosts[index];
  }

  // facility 6
  likePost(index: number) {
    this.listOfPosts[index].numberOfLikes += 1;
  }

  // facility 7
  setPosts(listOfPosts: Post[]) {
    this.listOfPosts = listOfPosts;
    this.listChangedEvent.emit(listOfPosts);
  }
}
