import { Component, Input } from '@angular/core';
import { MenuItemDto } from 'src/app/Core/Models/MenuItem/menu-item-dto';

@Component({
  selector: 'app-layout-menu',
  templateUrl: './layout-menu.component.html',
  styleUrls: ['./layout-menu.component.scss']
})
export class LayoutMenuComponent {

  private _ListItemMenu: MenuItemDto[] = [];

  @Input("ListItemMenu")
  set ListItemMenu(listItemMenu: MenuItemDto[]){
    this._ListItemMenu = listItemMenu ? listItemMenu : [];
  }

  get ListItemMenu(): MenuItemDto[]{
    return this._ListItemMenu;
  }


}
