import { DatePipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, NgIf],
  providers: [DatePipe],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  formattedDate: String | null = null;

  constructor(private datePipe: DatePipe) {}

  formatBirthDate(birthdate: string): String | null {
    if (birthdate) {
      this.formattedDate = this.datePipe.transform(birthdate, 'dd MMMM yyyy');
    } else {
      this.formattedDate = '';
    }
    return this.formattedDate;
  }

  signup(form: NgForm) {
    if (form.valid) {
      form.value.dob = this.formatBirthDate(form.value.dob);
      console.log('Form Submitted:', form.value);
      // Additional signup logic here
    }
  }

  @Output() hideChange = new EventEmitter<boolean>();

  isHidden: boolean = false;

  toggleVisibility() {
    this.isHidden = !this.isHidden;
    this.hideChange.emit(this.isHidden);
  }
}
