export interface StringMap {
  [key: string]: string;
}

export interface StringBoolMap {
  [key: string]: boolean;
}

export enum RequestMethod {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export interface AppResponse<T> {
  message: T;
  type: "success" | "error";
}

export interface LoginForm {
  phone: string;
  password: string;
}
