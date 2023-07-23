import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Moment } from 'src/app/Moment';

import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.scss']
})
export class MomentComponent {
  moment?: Moment;
  baseApiUrl = environment.baseApiUrl;

  faTimes = faTimes;
  faEdit = faEdit;

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private messageService: MessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe(item => this.moment = item.data);
  }

  async removeHandler(id: number) {
    await this.momentService.removeMoment(id).subscribe();

    this.messageService.add("Momento exluído com sucesso!");

    this.router.navigate(['/']);
  }

}
