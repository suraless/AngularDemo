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
    
                `

})

export class CoursesComponent{

    title="List of courses"
    courseList;// = ["Course1", "Course2", "Course3"];

    constructor(service : CoursesService){ //*S*Depedency Injection
        //this.courseList = ["Course1", "Course2", "Course3", "Course4"];
        //let service = new CoursesService();
        this.courseList = service.getCourses();
    }
}