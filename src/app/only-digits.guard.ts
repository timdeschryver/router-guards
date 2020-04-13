import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { log } from "./utils";

@Injectable({
  providedIn: "root",
})
export class OnlyDigitsGuard implements CanActivate, CanActivateChild {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let childId = null;
    let child = state.root.children[0];
    while (!childId && child) {
      childId = child.params.id;
      child = child.children[0];
    }

    log("[OnlyDigitsGuard]", "canActivate", next.params.id, childId);
    return true;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    log("[OnlyDigitsGuard]", "canActivateChild", next.params.id);
    return /^\d+$/.test(next.params.id);
  }
}
