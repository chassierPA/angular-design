import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

interface thumbnails {
  url: string,
  title: string,
  desc: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  _thumbnails: thumbnails[] = [{
    url: "assets/engine1.jpg",
    title: "DESIGN AEROSPACE",
    desc: "Best design"
  },
  {
    url: "assets/astronomy-cosmos-exploration-700015.jpg",
    title: "SPACE ENGINEERING",
    desc: "Safe and productive"
  },
  {
    url: "assets/aircraft-airplane-aviation-1936.jpg",
    title: "R&D PROPULSION",
    desc: "Great"
  }]

  _customers: thumbnails[] = [
    {
      url: "assets/icon1.png",
      title: "VOLVE",
      desc: "Lorem Ipsum",
    },
    {
      url: "assets/icon2.png",
      title: "ITAKA",
      desc: "Lorem Ipsum",
    },
    {
      url: "assets/icon3.png",
      title: "HACHES",
      desc: "Lorem Ipsum",
    },
    {
      url: "assets/icon4.png",
      title: "HÉRA",
      desc: "Lorem Ipsum",
    },
  ]

  //form
  _frm: FormGroup;
  _submited: boolean = false;
  constructor() { }

  ngOnInit() {


    this._frm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      name: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    })
  }

  getBG(index: number): any {
    let myStyles = {
      'background-image': "url('" + this._thumbnails[index].url + "')",
      'background-repeat': "no-repeat",
      'background-size': "cover",
    };
    return myStyles;
  }

  CheckValidation(input: string): boolean {
    if (this._frm.controls[input].invalid && (this._frm.controls[input].dirty || this._frm.controls[input].touched)) {
      if (this._frm.controls[input].errors.required) {
        return true;
      }
    } else if (this._submited == true && this._frm.controls[input].invalid) {
      return true;
    }
    return false;
  }

  FrmSubmit() {
    this._submited = true;
    if (this._frm.valid) {
      console.log("Form is Valid");
      console.log("Name: " + this._frm.controls['name'].value);
      console.log("Email: " + this._frm.controls['email'].value);
      console.log("Subject: " + this._frm.controls['subject'].value);
      console.log("Message: " + this._frm.controls['message'].value);
    }
  }
}