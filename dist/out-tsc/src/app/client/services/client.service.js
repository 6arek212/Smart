import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as io from 'socket.io-client';
const BACKEND_URL = environment.apiUrl + 'client/';
let ClientService = class ClientService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
        this.requests = [];
        this.requestUpdate = new Subject();
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.removeAllListeners();
        (_b = this.socket) === null || _b === void 0 ? void 0 : _b.disconnect();
    }
    attachRequestsListener() {
        this.socket = io.connect(environment.url, { query: { token: this.auth.getToken() } });
        this.requestsSub();
    }
    requestsSub() {
        this.socket.on('changeData', data => {
            const { operationType } = data;
            const _id = data.documentKey._id;
            let request;
            switch (operationType) {
                //Insert Method
                case 'insert':
                    request = data.fullDocument;
                    this.requests.unshift(request);
                    this.requestUpdate.next([...this.requests]);
                    break;
                //Update Method
                case 'update':
                    const updatedFields = data.updateDescription.updatedFields;
                    request = this.getRequestLocalById(_id);
                    if (request) {
                        const filedNames = Object.keys(updatedFields);
                        const filedValues = Object.values(updatedFields);
                        filedNames.forEach((key, index) => {
                            request[key] = filedValues[index];
                        });
                        console.log('updated');
                    }
                    break;
                case 'delete':
                    request = this.getRequestLocalById(_id);
                    console.log(request);
                    this.requests.splice(this.requests.indexOf(request), 1);
                    this.requestUpdate.next([...this.requests]);
                    break;
            }
        });
    }
    // requestsSub() {
    //    this.socket.fromEvent<any>('changeData').subscribe(data => {
    //     const { operationType } = data
    //     const _id: string = data.documentKey._id
    //     let request
    //     switch (operationType) {
    //       //Insert Method
    //       case 'insert':
    //         request = data.fullDocument
    //         this.requests.unshift(request)
    //         this.requestUpdate.next([...this.requests])
    //         break
    //       //Update Method
    //       case 'update':
    //         const updatedFields = data.updateDescription.updatedFields
    //         request = this.getRequestLocalById(_id)
    //         if (request) {
    //           const filedNames = Object.keys(updatedFields)
    //           const filedValues = Object.values(updatedFields)
    //           filedNames.forEach((key, index) => {
    //             request[key] = filedValues[index]
    //           });
    //           console.log('updated');
    //         }
    //         break
    //       case 'delete':
    //         request = this.getRequestLocalById(_id)
    //         console.log(request);
    //         this.requests.splice(this.requests.indexOf(request),1)
    //         this.requestUpdate.next([...this.requests])
    //         break
    //     }
    //   })
    // }
    // socketSub(){
    //   this.requestsSub()
    // }
    // socketUnSub(){
    //   this.socket.removeAllListeners()
    // }
    getRequestLocalById(id) {
        return this.requests.filter(req => {
            return req._id === id;
        })[0];
    }
    addRequest(request) {
        return this.http.post(BACKEND_URL, request);
    }
    getRequests() {
        this.http.get(BACKEND_URL).subscribe(res => {
            this.requests = res.requests;
            this.requestUpdate.next([...this.requests]);
        });
    }
    getRequestsListener() {
        return this.requestUpdate.asObservable();
    }
    deleteRequest(id) {
        this.http.delete(BACKEND_URL + id).subscribe(res => {
            // const newArray = this.requests.filter(req => {
            //   return req._id !== id
            // })
            // this.requests = newArray
            // this.requestUpdate.next([...this.requests])
        });
    }
    changeRequestStatus(status, id) {
        this.http.put(BACKEND_URL + id, { status }).subscribe(res => {
        });
    }
};
ClientService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ClientService);
export { ClientService };
//# sourceMappingURL=client.service.js.map