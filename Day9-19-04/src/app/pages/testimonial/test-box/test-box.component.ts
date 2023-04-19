import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-test-box',
  templateUrl: './test-box.component.html',
  styleUrls: ['./test-box.component.css']
})
export class TestBoxComponent {
  
  @Input() feedbacks:any;

}
