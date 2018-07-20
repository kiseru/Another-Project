import CreatingEventComponent from '../components/CreatingEventComponent';
import CreatePatternComponent from '../components/CreatePatternComponent';
import EventComponent from '../components/EventComponent';
import EventsComponent from '../components/EventsComponent';
import LogInComponent from '../components/LogInComponent';
import PatternComponent from '../components/PatternComponent';

export default [
  {path: '/events/:id/pattern', component: PatternComponent},
  {path: '/events/:id', component: EventComponent},
  {path: '/events', component: EventsComponent},
  {path: '/organizers/events/new', component: CreatingEventComponent},
  {path: '/organizers/events/:id/pattern/new', component: CreatePatternComponent},
  {path: '/login', component: LogInComponent},
  {path: '/', component: LogInComponent}
];
