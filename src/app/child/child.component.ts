import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent implements OnInit {
  id$ = this.route.params.pipe(map((p) => p.id));

  constructor(private route: ActivatedRoute) {
    console.log("[child]", "constructing ...");
  }

  ngOnInit(): void {}
}
