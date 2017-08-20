import { Component, OnInit } from '@angular/core';
import { Usermodel } from '../model/usermodel';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register : Usermodel = new Usermodel();

  public genders = [
      { value: 'F', display: 'Female'},
      { value: 'M', display: 'Male'}
  ];


  public options = [
    {display:'dance', value:'dance', checked:true},
    {display:'walking', value:'walking', checked:false},
    {display:'singing', value:'singing', checked:false}
  ]

  public roles = [
      { value: 'MP', display: 'Madhya Pradesh'},
      { value: 'UP', display: 'Uttar Pradesh'},
      { value: 'AP', display: 'Arunachal Pradesh'}
  ];

  isNameValid;
  isEmailValid;
  isStateValid;
  
  constructor() { }

  ngOnInit() {
    this.register.gender="M";
    this.register.state="MP";
    
    //this.register.hobby[0].checked = true;;
    //this.register.hobby[1]=true;
    //this.register.hobby[2]=true;
    
  }


  insert(){
    let name   = this.register.name;
    let email   = this.register.email;
    let password   = this.register.password;
    let hobby  = this.register.hobby;
    let gender = this.register.gender;
    let state = this.register.state;
    
    // console.log(name);
    // console.log(email);
    // console.log(password);
    //console.log(gender);
    //console.log("StateName - "+state);
    console.log("hobby"+ hobby);

    
    if(name=="" && email=="" && state==""){
      this.isNameValid = "false";
      this.isEmailValid = "false";
      this.isStateValid = "false";
      return false;
    }

    
    if(name==""){
      this.isNameValid = "false";
      return false;
    }
    
    if(email!="" || email==""){
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if(reg.test(email) == false) {
        this.isEmailValid = "false";
        return false;
      }
    }

    
    if(state == ''){
      console.log("StateName - "+state); 
      this.isStateValid = "false";
      return false;
    }

    alert("everything is valid");
    
    
  }

}
