import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Moment } from 'src/app/Moment';

import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.scss']
})
export class EditMomentComponent {
  moment!: Moment;
  btnText: string = 'Editar';

  constructor(
    private momentservice: MomentService,
    private route: ActivatedRoute,
  ) {};

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.momentservice.getMoment(id).subscribe(item => {
      this.moment = item.data;
    });
  }

}
