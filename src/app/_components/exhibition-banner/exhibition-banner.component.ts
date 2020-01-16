import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { fadeValueChange } from './exhibition-banner.animation';
import { vimeoConfigList } from './vimeoConfig';

@Component({
  selector: 'museum-exhibition-banner',
  templateUrl: './exhibition-banner.component.html',
  styleUrls: ['./exhibition-banner.component.scss'],
  animations: [fadeValueChange]
})
export class ExhibitionBannerComponent implements OnInit, OnDestroy {

  private subjects = [
    'Seven clicks',
    'Stockholm-font.stl',
    'Amphoji',
    'Mise - en - Scene',
  ];

  private videos = vimeoConfigList;
  private adTimeout;
  private subjectInterval;

  exhibitionHeaderSubject: string;

  private loadNextSubject() {
    const idx = this.subjects.findIndex(s => s === this.exhibitionHeaderSubject);
    const next = idx === this.subjects.length - 1 ? 0 : idx + 1;
    this.exhibitionHeaderSubject = this.subjects[next];
  }

  private loadAd() {
    const top = 5 + Math.random() * 20;
    const left = 5 + Math.random() * 60;
    // tslint:disable-next-line: no-bitwise
    const chosenAd = this.videos[~~(Math.random() * this.videos.length)];
    const videoDuration = chosenAd.duration * 1000;
    const nextAdTiming = videoDuration - 1500 - Math.random() * 7500;
    const newIframe = document.createElement('iframe');

    const width = window.innerWidth / 2560 * 640;
    const height = width / (320 / 569);

    // tslint:disable-next-line: max-line-length
    newIframe.setAttribute('src', `https://player.vimeo.com/video/${chosenAd.videoID}??api=1&background=1&autoplay=1&loop=1&autopause=0&muted=1`);
    newIframe.setAttribute('frameborder', '0');
    // tslint:disable-next-line: max-line-length
    newIframe.setAttribute('style', `top: ${top}vh;left: ${left}vw;position: fixed;width: ${width}px;height: ${height}px;pointer-events: none;`);
    this.elRef.nativeElement.appendChild(newIframe);
    this.adTimeout = setTimeout(() => this.loadAd(), nextAdTiming);

    setTimeout(() => newIframe.parentElement.removeChild(newIframe), videoDuration);

  }

  constructor(private elRef: ElementRef) { }

  initSequences() {
    this.loadNextSubject();
    this.subjectInterval = setInterval(() => this.loadNextSubject(), 10000);
    setTimeout(() => this.loadAd(), 5000);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    clearInterval(this.subjectInterval);
    clearTimeout(this.adTimeout);
  }

}
