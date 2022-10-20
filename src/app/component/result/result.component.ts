import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  result?: string

  constructor(private router: ActivatedRoute) {  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.result = params['result']
    });
  }

}
