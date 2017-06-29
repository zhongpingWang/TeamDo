import { Router, Route, browserHistory,Link,IndexRoute,hashHistory } from 'react-router'



import App from '../src/feed/App'
import A from '../src/feed/A'
import B from '../src/feed/B'
import C from '../src/feed/C'
import NoMatch from '../src/feed/NoMatch'

export default {
  path: '/',
  component: App,
  indexRoute: { component: A },
  childRoutes: [
    { path: 'A', component: A },
    { path: 'B', component: B },
    { path: 'C', component: C },
    { path: '*', component: NoMatch },
  ]
} 