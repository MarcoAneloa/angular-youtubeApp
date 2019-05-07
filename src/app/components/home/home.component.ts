import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  videos: any[] = [];
  videoSel: any;

  constructor(private _yts: YoutubeService) {
    this._yts.getVideos().subscribe(data => {
      this._yts.nextPageToken = data['nextPageToken'];
      for (let video of data['items']) {
        this.videos.push(video['snippet']);
      }
      console.log(this.videos);
    });
  }

  ngOnInit() {
  }

  verVideo(video: any) {
    this.videoSel = video;
    $('#exampleModal').modal('show');
  }

  cerrarModal(){
    this.videoSel = null;
    $('#exampleModal').modal('hide');
  }

  cargarMas(){
    this._yts.getVideos().subscribe(data => {
      this._yts.nextPageToken = data['nextPageToken'];
      let videos:any[]=[];
      for (let video of data['items']) {
        videos.push(video['snippet']);
      }
      this.videos.push.apply(this.videos,videos);
      console.log(videos);
      console.log(this.videos);
    });
  }

}
