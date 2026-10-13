import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MemberModel } from '../../models/member';
import { MemberService } from '../../services/member-service';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './member.html',
  styleUrl: './member.css',
})
export class Member implements OnInit {
  constructor(private MS: MemberService) {}

  title: string = 'Liste des membres';

  displayedColumns: string[] = [
    'id',
    'cin',
    'name',
    'type',
    'created',
    'actions'
  ];

  dataSource = signal<MemberModel[]>([]);

  ngOnInit() {
    this.MS.GetAllMembers().subscribe({
      next: (response) => this.dataSource.set(response),
      error: (err) => console.error('Erreur de chargement des membres :', err)
    });
  }

  deleteMember(id: string) {
    if (!confirm('Voulez-vous vraiment supprimer ce membre ?')) return;

    this.MS.deleteMember(id).subscribe({
      next: () => {
        this.dataSource.update((list) =>
          list.filter((m) => m.id !== id)
        );
      },
      error: (err) => console.error('Erreur de suppression :', err)
    });
  }
}