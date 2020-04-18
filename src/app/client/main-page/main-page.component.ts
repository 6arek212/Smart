import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMessageComponent } from '../../utils-components/dialog-message/dialog-message.component';
import { isScrolledIntoView } from '../../utils-components/jqueryUtils'
import * as $ from "jquery";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  show = true

  constructor(private dilaog: MatDialog) {

  }

  ngOnInit(): void {
  }


  showContactInfo() {
    const confirm = () => {
      this.dilaog.closeAll()
    }
    this.dilaog.open(DialogMessageComponent, { data: { buttons: false, title: 'معلومات التواصل', message: ' עומר חוסין : 0522784070 |  טארק חוסין:  0525145565', confirm } })
  }

  smoothScrolling(element) {
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }


  @HostListener('window:scroll', ['$event']) // for window scroll events
  async onScroll() {
    const video = document.getElementById('video') as HTMLVideoElement
    const isInView = isScrolledIntoView(video)

    if (isInView && video.muted) {
      video.controls = true
      video.muted = false
      video.currentTime = 0
      $('#video').animate({ volume: 1}, 500);
    }
    else if (!isInView && !video.muted) {
      $('#video').animate({ volume: 0}, 500);
      video.controls = false
      video.muted = true
    }
  }








}
