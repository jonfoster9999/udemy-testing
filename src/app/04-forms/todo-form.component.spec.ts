import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component'; 


describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should check validity', () => {
    component.form.setValue({
      name: '',
      email: 'test@test.com'
    })
    expect(component.form.get('name').valid).not.toBeTruthy();
  });

  it('should create a form with 2 controls', () => {
    expect(Object.keys(component.form.controls).length).toBe(2);
  });
});