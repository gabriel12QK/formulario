import { Component } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'pract_form';
  public form!:FormGroup;
   constructor(private _formB:FormBuilder){}
   ngOnInit(){
     this.form=this._formB.group( {
       email:['',  [Validators.required, Validators.email] ],
       pass:['', [Validators.required, Validators.minLength(6),Validators.pattern(/^[a-z]/)]  ]
     });

   }
   send(){
     console.log(this.form.value)
   }
}


