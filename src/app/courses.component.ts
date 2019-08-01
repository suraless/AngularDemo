import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

//*S*Decorator
@Component({

    selector:'coursesSelector',//*S*Anywhere we will have this selector used, belwo HTML code will be referred there.
    template: `
                <h2> {{ "Title :" +  title}} </h2>
                <ul>
                    <li *ngFor="let courseObj of courseList" >
                        {{ courseObj }}
                    </li>
                </ul>                                
                <table>
                    <tr>
                        <td>
                        //*S* -Dynamic Class binding - Dynamically add class(Class binding) based on value of some variable.
                            <button class = "btn btn-primary" [class.active] = "isActive">Save</button>
                        </td>
                    </tr>
                    <tr>
                        <td>                
                        //*S* - Dynamic Style binding
                            <button [style.backgroundColor] ="isActive ? 'red' : 'blue'" >Save1</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        //*S* - Dynamic Event binding, button click, mouse over
                            <button (click)="onSave()" class="btn btn-primary" >ClickEvent</button>
                        </td>
                    </tr>
                </table>

                `

})

export class CoursesComponent{

    title="List of courses"
    courseList;// = ["Course1", "Course2", "Course3"];
    isActive = false;

    constructor(service : CoursesService){ //*S*Depedency Injection
        //this.courseList = ["Course1", "Course2", "Course3", "Course4"];
        //let service = new CoursesService();
        this.courseList = service.getCourses();
    }

    onSave(){
        console.log("Button Was Clicked");
        alert("test");
    }
}