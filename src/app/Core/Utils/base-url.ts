import { environment } from "src/environments/environment";

export const BaseUrl = (microservice: string): string => {
    const url = environment.Services.find((service) => {
        return service.Microservice === microservice;
    }) || null

    if(url){
        return url.Url; 
    }else{
        return "";
    }
}