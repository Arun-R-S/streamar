import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  webURL!:any;
  urlSafe!: string;
  constructor(private route:Router,private http: HttpClient) { }
  ngOnInit(): void {

    //console.log(this.urlExists(this.webURL));
    this.fetchDataFromURL();
    //console.log(this.webURL.url);
    //console.log(this.webURL.isAllow);

  }
  fetchDataFromURL() {
    const url = environment.url; // Replace with your URL
    this.http.get(url+"?timestamp="+new Date().getTime()).subscribe((data: any) => {
      //console.log(data); // Handle the JSON data here
      this.webURL= data;
      this.redirect();
    }, (error: any) => {
      console.error('Error:', error); // Handle any error that occurred
      //console.error('Error:', error); // Handle any error that occurred
      this.webURL = ({url:"",isAllow:false})
      this.UrlError();
    });
    //return ({url:"",isAllow:false})
    //this.redirect();
  }
  UrlError(){
    this.route.navigate(['/error-404']);
  }
  redirect(){
    const isReachable = require('is-reachable');
    (async () => {
      if(this.webURL.isAllow==true){
        console.log("Yes");
        if(await (isReachable(this.webURL.url) ))
        {
          document.getElementById('mainScreen')?.setAttribute('src',this.webURL.url);
        }
        else{
          this.route.navigate(['/serverShutdown']);
        }
      }
      else{
        this.route.navigate(['/serverShutdown']);
      }
    })();
  }
}
