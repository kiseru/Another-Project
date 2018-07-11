import EventsComponent from './components/EventsComponent';
import PatternComponent from './components/PatternComponent';

export default [
  {path: '/events', component: EventsComponent},
  {path: '/events/:id/pattern', component: PatternComponent}
];
