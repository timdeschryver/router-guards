import { Component, OnInit } from "@angular/core";
import { log } from "../utils";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"],
})
export class ParentComponent implements OnInit {
  constructor() {
    log("[parent]", "constructing ...");
  }

  ngOnInit(): void {}
}
