import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'listra_digital';

  @ViewChild('loadMoreButton') loadMoreButton: ElementRef | undefined;

  public data: any;

  updatedValue = 8;
  totalItems = 0;

  public getScreenWidth: any;
  public getScreenHeight: any;

  constructor(private list: DataService) {}

  async ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.data = await this.list.list().subscribe((result) => {
      this.data = result;
      this.totalItems = this.data.resultados.data.length;
    });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  loadMore() {
    this.updatedValue += 8;
    if (this.updatedValue >= this.totalItems) {
      this.updatedValue = this.totalItems;
      this.loadMoreButton?.nativeElement.setAttribute('style', 'display:none');
      return;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.getScreenWidth < 600) {
      let pos =
        (document.documentElement.scrollTop || document.body.scrollTop) +
        document.documentElement.offsetHeight;
      let max = document.documentElement.scrollHeight;

      if (pos == max) {
        this.loadMore();
      }
    }
  }
}
