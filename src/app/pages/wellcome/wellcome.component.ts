import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-wellcome',
  standalone: true,
  imports: [NzButtonModule, NzTypographyModule, RouterLink],
  templateUrl: './wellcome.component.html',
  styleUrl: './wellcome.component.css'
})
export class WellcomeComponent {

}
