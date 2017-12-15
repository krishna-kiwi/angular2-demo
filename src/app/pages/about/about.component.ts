import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	
  	$(document).ready(function(){
		 $('.parallax').parallax();
     	 $('.get-start-button').click(function(){
     	 	
          $('.overlay').fadeIn();
     	 	  $('#modal1').fadeIn();
     	 })	


       $('.overlay').click(function(){
         $(this).fadeOut();
         $('#modal1').fadeOut();
       })


	});	
  }
  

}
