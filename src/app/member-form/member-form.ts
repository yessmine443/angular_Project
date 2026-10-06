import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MemberService } from '../../services/member-service';

@Component({
  selector: 'app-member-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './member-form.html',
  styleUrl: './member-form.css',
})
export class MemberForm implements OnInit {
  constructor(
    private MS: MemberService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  currentID?: string;

  // Formulaire créé tout de suite (vide) pour éviter une erreur de template
  // pendant que le membre est chargé en mode update.
memberForm = new FormGroup({
  cin: new FormControl('', { nonNullable: true }),
  name: new FormControl('', { nonNullable: true }),
  type: new FormControl('', { nonNullable: true }),
  created: new FormControl('', { nonNullable: true }),
});

  ngOnInit() {
    // id présent dans la route => mode UPDATE, sinon mode CREATE
    this.currentID = this.route.snapshot.params['id'];

    if (this.currentID) {
      this.MS.getMemberById(this.currentID).subscribe((member) => {
        this.memberForm.patchValue({
          cin: member.cin,
          name: member.name,
          type: member.type,
          created: member.created,
        });
      });
    }
  }

  onSubmit() {
    const value = this.memberForm.getRawValue();
    if (this.currentID) {
      this.MS.updateMember(this.currentID, value).subscribe(() => {
        this.router.navigate(['/members']);
      });
    } else {
      this.MS.addMember(value).subscribe(() => {
        this.router.navigate(['/members']);
      });
    }
  }
}