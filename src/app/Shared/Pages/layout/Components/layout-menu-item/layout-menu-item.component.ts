import { Component, Input } from '@angular/core';
import { MenuItemDto } from 'src/app/Core/Models/MenuItem/menu-item-dto';

@Component({
  selector: 'app-layout-menu-item',
  templateUrl: './layout-menu-item.component.html',
  styleUrls: ['./layout-menu-item.component.scss']
})
export class LayoutMenuItemComponent {

  private _MenuItem: MenuItemDto = new MenuItemDto();

  @Input("MenuItem")
  set MenuItem(menuItem: MenuItemDto){
    this._MenuItem = menuItem ? menuItem : new MenuItemDto();
  }

  get MenuItem() : MenuItemDto {
    return this._MenuItem;
  }

}
