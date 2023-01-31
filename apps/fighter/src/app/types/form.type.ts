import { FormGroup, ɵElement } from "@angular/forms";

export type FormType<FormRecord> = FormGroup<{
    [Key in keyof FormRecord]: ɵElement<FormRecord[Key], never>;
  }>;
  