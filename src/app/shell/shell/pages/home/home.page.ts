import { Component, OnInit } from '@angular/core';
import { RedditService } from 'src/app/services/reddit.service';
import { map } from 'rxjs/operators';
import { isMedia } from '../../../../components/utils/functions';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isMedia = isMedia;

  posts$: any = this.rs
    .getSpecificSub('popular')
    .pipe(map((data: any) => data.data.children));

  constructor(private rs: RedditService) {}

  ngOnInit() {}

  imageError(event: any) {
    event.target.src =
      'https://i.pinimg.com/originals/13/9a/19/139a190b930b8efdecfdd5445cae7754.png';
  }
}
