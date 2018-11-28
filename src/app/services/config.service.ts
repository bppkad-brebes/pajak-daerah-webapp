import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public urlSimdaService = "http://localhost:3737";
  public urlPbbBiller = "http://localhost:3738";

  constructor() { }
}
