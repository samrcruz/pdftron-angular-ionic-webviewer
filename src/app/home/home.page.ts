import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import WebViewer from '@pdftron/webviewer';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit{

  @ViewChild('viewer') viewerRef: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    WebViewer({
      path: '../../assets/libs',
      initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
    }, this.viewerRef.nativeElement).then(instance => {

    });
  }

}
