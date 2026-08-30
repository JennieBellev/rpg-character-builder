import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-class-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './class-detail.component.html',
  styleUrl: './class-detail.component.css'
})
export class ClassDetailComponent implements OnInit {
  classId: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.classId = this.route.snapshot.paramMap.get('id');
  }
}
