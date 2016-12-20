import { provideRouter, RouterConfig } from '@angular/router'
import { RacesComponent } from './components/races.component'
import { ScoreboardComponent } from './components/scoreboard.component'
import { AboutComponent } from './components/about.component'

export const routes: RouterConfig = [
  { path: '', component: AboutComponent },
  { path: 'schedule', component: RacesComponent },
  { path: 'scoreboard', component: ScoreboardComponent }
]

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]