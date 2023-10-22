import { Component } from '@angular/core';
import { IconDefinition, IconName, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faHomeLg, faHomeUser, faUserCircle, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { MenuItemDto } from 'src/app/Core/Models/MenuItem/menu-item-dto';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss']
})
export class LayoutPage {

  listItemMenu: MenuItemDto [] = [
    {name:"Inicio", rotue:"/Home", icon: faHomeLg},
    {name:"Clientes", rotue:"/Client", icon: faUserCircle},
    // {name:"Meseros", rotue:"/Waiter"},
    // {name:"Mesas", rotue:"/Tables"},
    // {name:"Platos", rotue:"/Dishe"}
  ];

  get ListItemMenu() : MenuItemDto[] {
    return this.listItemMenu;
  }
  
  get OnOpenPeriod(): IconDefinition {
    return faHomeLg;
  }

}
