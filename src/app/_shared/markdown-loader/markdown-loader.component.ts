import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'museum-markdown-loader',
  templateUrl: './markdown-loader.component.html',
  styleUrls: ['./markdown-loader.component.scss']
})
export class MarkdownLoaderComponent implements OnInit {

  @Input() src: string;
  @Input() autoload = false;

  preload = true;
  error = false;
  fetch = false;

  constructor() { }

  fetchMarkdown() {
    this.fetch = true;
  }

  onLoad() {
    this.preload = false;
  }

  onError(error) {
    this.error = true;
    console.error(error);
  }



  ngOnInit() {
    if (this.autoload) {
      this.fetchMarkdown();
    }
  }

}
