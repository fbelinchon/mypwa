import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-registered',
  templateUrl: './userRegistered.page.html',
  styleUrls: ['./userRegistered.page.scss'],
})
export class RegisteredPage implements OnInit {
  public name = "";

  constructor(private activatedRoute :ActivatedRoute, private route: Router) { }
 
  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
  }

  enter(){
    this.route.navigate(['tabs/personas']);
  }

}
