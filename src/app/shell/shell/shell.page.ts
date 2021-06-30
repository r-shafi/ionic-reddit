import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { isMedia } from 'src/app/components/utils/functions';
import { RedditService } from 'src/app/services/reddit.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.page.html',
  styleUrls: ['./shell.page.scss'],
})
export class ShellPage implements OnInit {
  subs$ = this.rs.defaultSubs().pipe(map((data: any) => data.data.children));
  isMedia = isMedia;
  after: string;
  posts: any;

  constructor(private menuControl: MenuController, private rs: RedditService) {}

  async openMenu() {
    await this.menuControl.open();
  }

  // posts$: Observable<any> = this.rs.getSpecificSub('popular').pipe(
  //   map((data: any) => {
  //     this.after = data.data.after;
  //     return data.data.children;
  //   })
  // );

  initialFetch(sub: string) {
    this.rs.getSpecificSub(sub).subscribe((data: any) => {
      this.after = data.data.after;
      this.posts = data.data.children;
    });
  }

  ngOnInit() {
    this.initialFetch('r/popular');
  }

  imageError(event: any) {
    event.target.src =
      'https://i.pinimg.com/originals/13/9a/19/139a190b930b8efdecfdd5445cae7754.png';
  }

  // fetchNewData(event) {
  //   this.posts$ = forkJoin({
  //     prev: this.posts$,
  //     next: this.rs.loadMore('popular', this.after).pipe(
  //       map((data: any) => {
  //         this.after = data.data.after;
  //         return data.data.children;
  //       })
  //     ),
  //   }).pipe(
  //     map(({ prev, next }) => {
  //       event.target.complete();
  //       return [...prev, ...next];
  //     })
  //   );
  // }

  fetchNewData(event: any) {
    this.rs.loadMore('popular', this.after).subscribe((data: any) => {
      this.after = data.data.after;
      this.posts = [...this.posts, ...data.data.children];
      event.target.complete();
    });
  }

  navigateSub(sub: string) {
    this.initialFetch(sub);
    this.menuControl.close();
  }

  search(e: any) {
    if (e.detail.value) {
      this.subs$ = this.rs
        .autocomplete(e.detail.value)
        .pipe(map((data: any) => data.data.children));
    }
  }
}
