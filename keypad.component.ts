import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {

      $('.num').click(function () {
          var num = $(this);
          var text = $.trim(num.find('.txt').clone().children().remove().end().text());
          var telNumber = $('#telNumber');
          $(telNumber).val(telNumber.val() + text);
      });

     

    
    


  
  });

 } 
 

}
