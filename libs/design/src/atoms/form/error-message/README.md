# Error message
Error message that works alongside the Form Field component to style and place the error message and its associated form control element appropriately.

## Usage

```
<daff-form-field>
  <input daff-input type="text" placeholder="Email" name="email" />
  <daff-error-message *ngIf="requiredError">This field is required.</daff-error-message>
</daff-form-field>
```
