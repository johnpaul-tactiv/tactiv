import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';


export class ProjectForm {
  public form: FormGroup;
  public errors: string = null;
  public submitted = false;

  constructor(data) {
    // Initialize the form builder
    this.form = new FormBuilder().group({
      name: new FormControl(null, [Validators.required]),
      desc: new FormControl(null, []),
      domain: new FormControl(null, [])
    });

    if (data) {
      this.form.patchValue(data);
    }
  }

   // check if form field is valid
   valid(f: any) {
    return !(!this.form.get(f).valid && this.form.get(f).touched);
  }

  // check if the form field has an error
  hasError(f: any, e: any) {
    return this.form.get(f).hasError(e) && this.form.get(f).touched;
  }

}
