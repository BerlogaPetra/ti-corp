import { FormControl, FormGroup } from '@angular/forms';
import { AFBForm } from '../interfaces/afb-form.interface';



export type AfbFormType = FormGroup<{
  [Key in keyof AFBForm]: FormControl<AFBForm[Key]>;
}>;
