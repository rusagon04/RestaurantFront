import { Microservice } from "src/app/Core/Utils/microservice";

export const environment = {
    production: false,
    Services: [
        {
            Microservice: Microservice.Restaurant,
            Url: ""
        },
        {
            Microservice: Microservice.Security,
            Url: ""
        }
    ]
  };