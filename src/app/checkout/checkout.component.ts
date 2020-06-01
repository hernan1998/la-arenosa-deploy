import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  // Variables
  evento: String = '';

  constructor(private _route: ActivatedRoute, private router: Router) {
    this._route.params.subscribe((params) => {
      this.evento = params['id'];
      console.log(this.evento);
    });
  }

  ngOnInit(): void {}

  okevent() {
    this.router.navigate(['/home']);
  }
}
