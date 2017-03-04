import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
// import { flyInOutTrigger } from '../animations/flyInOutTrigger-animation';
// import { hostConfig } from '../animations/flyInOutTrigger-animation';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/filter';
import { Title } from '@angular/platform-browser';
import { MdlSnackbarService } from 'angular2-mdl';
import { AbstractComponent } from '../abstract.component';

const emailValidator = Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');

@Component({
  moduleId: module.id,
  selector: 'empty',
  // host: hostConfig,
  styleUrls: [
    'empty.component.css',
  ],
  // animations: [
  //   flyInOutTrigger
  // ],
  providers: [
  ],
  templateUrl: 'empty.component.html'
})

export class EmptyComponent implements OnInit {
  constructor() { }
  public ngOnInit() { }
}
