import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export class MenuItemDto {
  name: string = "";
  rotue: string = "";
  icon: IconDefinition = faCheck;
}
