import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { OnlyDigitsGuard } from "./only-digits.guard";

const routes: Routes = [
  {
    path: "parent",
    component: ParentComponent,
    canActivate: [OnlyDigitsGuard],
    canActivateChild: [OnlyDigitsGuard],
    children: [
      {
        path: "child/:id",
        component: ChildComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
