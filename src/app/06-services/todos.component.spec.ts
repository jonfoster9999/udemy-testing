import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from the server', () => {
    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([ [1, 2, 3] ])
    })

    component.ngOnInit();

    expect(component.todos).toEqual([1, 2, 3]);
  });

  it('should call the server', () => {
    let spy = spyOn(service, 'add').and.callFake(t => {
      return Observable.empty();
    })

    component.add();
    
    expect(spy).toHaveBeenCalled();
  })

  it('should add the new todo returned from server', () => {
    let todo = [{id: 1}]
    spyOn(service, 'add')
      .and.returnValue(Observable.from(todo))

    component.add();
    expect(component.todos).toContain(todo[0]); 
  })
  it('Assign the error message to the message property', () => {
    let msg = "Bad Request"
    let todo = [{id: 1}]
    spyOn(service, 'add')
      .and.returnValue(Observable.throw(new Error(msg)))

    component.add();
    expect(component.message.message).toContain(msg); 
  })
  
  it('should delete', () => {
    spyOn(window, 'confirm').and.returnValue(true); 
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    component.delete(1); 

    expect(spy).toHaveBeenCalledWith(1);
  })
  
  it('should not delete if user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false); 
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    component.delete(1); 

    expect(spy).not.toHaveBeenCalledWith(1);
  })


  
  
});