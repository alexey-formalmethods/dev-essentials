import { Routes } from '@angular/router';
import { WellcomeComponent } from './pages/wellcome/wellcome.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

export const routes: Routes = [
	{
		title: "home",
		component: WellcomeComponent,
		path: ""
	},
	{
		title: "privacy-policy",
		component: PrivacyPolicyComponent,
		path: "pages/privacy-policy"
	}
];
