import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms';


export class LoginForm {
    public form: FormGroup;
    public errors: string = null;

    constructor(data) {
        // Initialize the form builder
        this.form = new FormBuilder().group({
            email    : new FormControl(null, [Validators.required, Validators.email]),
            password : new FormControl(null, [Validators.required])
        });
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

export class UserForm {
    public form: FormGroup;
    public errors: string = null;
    public submitted = false;

    constructor(data) {
        this.form = new FormBuilder().group({
            first_name: new FormControl(null, [Validators.required]),
            last_name: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            image: new FormControl(null, [])
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
