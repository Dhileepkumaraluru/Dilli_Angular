import { Component } from '@angular/core';
import { TestService } from 'src/app/services/test.service'

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  feedbackslist:any;
  constructor(private ts:TestService){

    this.ts.getfeedback().subscribe({
      next:(data:any)=>this.feedbackslist=data,
      error:()=>this.feedbackslist=[]
    }

    )
  }

}
