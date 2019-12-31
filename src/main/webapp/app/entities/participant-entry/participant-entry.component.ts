import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IParticipantEntry } from 'app/shared/model/participant-entry.model';
import { ParticipantEntryService } from './participant-entry.service';
import { ParticipantEntryDeleteDialogComponent } from './participant-entry-delete-dialog.component';

@Component({
  selector: 'jhi-participant-entry',
  templateUrl: './participant-entry.component.html'
})
export class ParticipantEntryComponent implements OnInit, OnDestroy {
  participantEntries?: IParticipantEntry[];
  eventSubscriber?: Subscription;
  currentSearch: string;

  constructor(
    protected participantEntryService: ParticipantEntryService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal,
    protected activatedRoute: ActivatedRoute
  ) {
    this.currentSearch =
      this.activatedRoute.snapshot && this.activatedRoute.snapshot.queryParams['search']
        ? this.activatedRoute.snapshot.queryParams['search']
        : '';
  }

  loadAll(): void {
    if (this.currentSearch) {
      this.participantEntryService
        .search({
          query: this.currentSearch
        })
        .subscribe((res: HttpResponse<IParticipantEntry[]>) => (this.participantEntries = res.body ? res.body : []));
      return;
    }
    this.participantEntryService.query().subscribe((res: HttpResponse<IParticipantEntry[]>) => {
      this.participantEntries = res.body ? res.body : [];
      this.currentSearch = '';
    });
  }

  search(query: string): void {
    this.currentSearch = query;
    this.loadAll();
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInParticipantEntries();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IParticipantEntry): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInParticipantEntries(): void {
    this.eventSubscriber = this.eventManager.subscribe('participantEntryListModification', () => this.loadAll());
  }

  delete(participantEntry: IParticipantEntry): void {
    const modalRef = this.modalService.open(ParticipantEntryDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.participantEntry = participantEntry;
  }
}
