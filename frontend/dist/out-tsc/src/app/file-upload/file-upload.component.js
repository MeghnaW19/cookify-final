import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HttpRequest, HttpEventType } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, last, map, tap } from 'rxjs/operators';
let FileUploadComponent = class FileUploadComponent {
    constructor(_http) {
        this._http = _http;
        /** Link text */
        this.text = 'Upload';
        /** Name used in form which will be sent in HTTP request. */
        this.param = 'file';
        /** Target URL for file uploading. */
        this.target = 'http://15.206.52.125:8082/api/v1/uploadFile';
        /** File extension that accepted, same as 'accept' of <input type="file" />.
            By the default, it's set to 'image/*'. */
        this.accept = 'image/*';
        /** Allow you to add handler after its completion. Bubble up response text from remote. */
        this.complete = new EventEmitter();
        this.files = [];
    }
    ngOnInit() {
    }
    onClick() {
        const fileUpload = document.getElementById('fileUpload');
        fileUpload.onchange = () => {
            for (let index = 0; index < fileUpload.files.length; index++) {
                const file = fileUpload.files[index];
                this.files.push({ data: file, state: 'in',
                    inProgress: false, progress: 0, canRetry: false, canCancel: true });
            }
            this.uploadFiles();
        };
        fileUpload.click();
    }
    cancelFile(file) {
        file.sub.unsubscribe();
        this.removeFileFromArray(file);
    }
    retryFile(file) {
        this.uploadFile(file);
        file.canRetry = false;
    }
    uploadFile(file) {
        const fd = new FormData();
        fd.append(this.param, file.data);
        const req = new HttpRequest('POST', this.target, fd, {
            reportProgress: true,
            responseType: "text"
        });
        file.inProgress = true;
        file.sub = this._http.request(req).pipe(map(event => {
            switch (event.type) {
                case HttpEventType.UploadProgress:
                    file.progress = Math.round(event.loaded * 100 / event.total);
                    break;
                case HttpEventType.Response:
                    return event;
            }
        }), tap(message => { }), last(), catchError((error) => {
            file.inProgress = false;
            file.canRetry = true;
            console.log(error);
            return of(`${file.data.name} upload failed.`);
        })).subscribe((event) => {
            if (typeof (event) === 'object') {
                this.removeFileFromArray(file);
                this.complete.emit(event.body);
            }
            console.log(event);
        });
    }
    uploadFiles() {
        const fileUpload = document.getElementById('fileUpload');
        fileUpload.value = '';
        this.files.forEach(file => {
            this.uploadFile(file);
        });
    }
    removeFileFromArray(file) {
        const index = this.files.indexOf(file);
        if (index > -1) {
            this.files.splice(index, 1);
        }
    }
};
tslib_1.__decorate([
    Input()
], FileUploadComponent.prototype, "text", void 0);
tslib_1.__decorate([
    Input()
], FileUploadComponent.prototype, "param", void 0);
tslib_1.__decorate([
    Input()
], FileUploadComponent.prototype, "target", void 0);
tslib_1.__decorate([
    Input()
], FileUploadComponent.prototype, "accept", void 0);
tslib_1.__decorate([
    Output()
], FileUploadComponent.prototype, "complete", void 0);
FileUploadComponent = tslib_1.__decorate([
    Component({
        selector: 'app-file-upload',
        templateUrl: './file-upload.component.html',
        styleUrls: ['./file-upload.component.css'], animations: [
            trigger('fadeInOut', [
                state('in', style({ opacity: 100 })),
                transition('* => void', [
                    animate(300, style({ opacity: 0 }))
                ])
            ])
        ]
    })
], FileUploadComponent);
export { FileUploadComponent };
export class FileUploadModel {
}
//# sourceMappingURL=file-upload.component.js.map