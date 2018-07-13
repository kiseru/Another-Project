import CreatePatternComponent from './components/CreatePatternComponent';
import EventComponent from './components/EventComponent';
import EventsComponent from './components/EventsComponent';
import PatternComponent from './components/PatternComponent';

export default [
  {path: '/events/:id/pattern/new', component: CreatePatternComponent},
  {path: '/events/:id/pattern', component: PatternComponent},
  {path: '/events/:id', component: EventComponent},
  {path: '/events', component: EventsComponent}
];
