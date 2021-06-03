import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'my-app';
    fetchData: Object = {};
    err: String = "";
    dataFetched: Boolean = false
    constructor(private http: HttpClient) {

    }
    //public subject = "math";
    onSubmit(data) {
        this.http.post("http://localhost:8183/search", data)
            .subscribe((result) => {
                if (typeof result.err !== 'undefined') {
                    this.dataFetched = false;
                    this.err = result.err;
                } else {
                    this.dataFetched = true;
                    this.err = "";
                    this.fetchData = result;
                }
            })
    }
}
