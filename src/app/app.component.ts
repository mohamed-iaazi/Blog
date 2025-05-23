import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './features/navbar/navbar.component';
import {LoginComponent} from './features/login/login.component';
import {HomeComponent} from './features/home/home.component';
import { PostDetailComponent } from './features/posts/post-detail/post-detail.component';
import {FooterComponent} from './footer/footer.component';
import {CommentComponent} from './comment/comment.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blog';
}
