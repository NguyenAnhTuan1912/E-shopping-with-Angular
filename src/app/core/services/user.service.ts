import { Injectable } from "@angular/core";
import UserModel from "src/app/shared/models/UserModel";

@Injectable()
export class UserService {
    user: UserModel;

    getUser(): UserModel {
        return {...this.user};
    }

    setUser(obj: any) {
        this.user = new UserModel({...obj});
    }

    clearUserDataInLocalStorage() {
        localStorage.removeItem("id");
    }
}