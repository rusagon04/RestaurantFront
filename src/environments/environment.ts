import { Microservice } from "src/app/Core/Utils/microservice";

export const environment = {
    production: false,
    Services: [
        {
            Microservice: Microservice.Restaurant,
            Url: "http://localhost/RestaurantApi/api/"
        },
        {
            Microservice: Microservice.Security,
            Url: "http://localhost/RestaurantSecurity/api/"
        }
    ]
  };