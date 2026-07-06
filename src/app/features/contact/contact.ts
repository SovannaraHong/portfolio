import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly form: FormGroup;
  protected submitted = false;
  protected sending = false;
  protected error = '';

  private readonly SERVICE_ID = 'service_13v5ydn';
  private readonly TEMPLATE_ID = 'template_tjslj4p';
  private readonly PUBLIC_KEY = 'o7vdSYnPvksNC8lCe';

  constructor(
    private readonly fb: FormBuilder,
    private readonly cdr: ChangeDetectorRef,
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  protected get name() {
    return this.form.get('name')!;
  }

  protected get email() {
    return this.form.get('email')!;
  }

  protected get message() {
    return this.form.get('message')!;
  }

  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.cdr.markForCheck();
      return;
    }

    this.sending = true;
    this.error = '';
    this.cdr.markForCheck();

    const templateParams = {
      ...this.form.value,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams, this.PUBLIC_KEY)
      .then(() => {
        this.submitted = true;
        this.sending = false;
        this.cdr.markForCheck();
      })
      .catch((err) => {
        console.error('EmailJS FAILED. Status:', err?.status, 'Text:', err?.text);
        this.error = 'Something went wrong. Please try again.';
        this.sending = false;
        this.cdr.markForCheck();
      })
      .finally(() => {
        this.cdr.detectChanges();
      });
  }

  protected sendAnother(): void {
    this.submitted = false;
    this.error = '';
    this.form.reset();
    this.cdr.markForCheck();
  }
}
