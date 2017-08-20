import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import{ RegisterComponent } from "./register/register.component";

export const router: Routes = [
    { path: "", redirectTo:"register", pathMatch:"full" },
    { path: "register", component:RegisterComponent}
]; 

export const routes: ModuleWithProviders = RouterModule.forRoot(router);