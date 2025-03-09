import { Component } from '@angular/core';
import { IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxRippleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-home',
  imports: [IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IgxAvatarComponent, IgxButtonDirective, IgxRippleDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
