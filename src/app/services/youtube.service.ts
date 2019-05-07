import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youTubeUrl:string = 'https://www.googleapis.com/youtube/v3';
  private apiKey:string = 'xxxxxxxxxxx';
  private playListId:string = 'xxxxxxxxxx';
  public nextPageToken="";

  constructor(private http:HttpClient) { }

  getVideos(){
    let url = `${ this.youTubeUrl }/playlistItems`;
    const params = new HttpParams()
    .set( 'part','snippet' )
    .set( 'maxResults','10' )
    .set( 'playlistId',this.playListId )
    .set( 'key',this.apiKey )
    .set('pageToken',this.nextPageToken);

    return this.http.get(url, { params });
  }
}
