import React , { Suspense } from 'react';
import { withRouter } from 'react-router';
import withGrapes from '../hoc/withGrapes';

function Cardn(props) {
  console.log(props);
  const path = require(`../layouts/${props.location.search.substring(1)}.html`);
  const GrapeJsScreen = path ?  withGrapes(path) : withGrapes(<div></div>);
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <section>
         <GrapeJsScreen />
        </section>
      </Suspense>
    </div>
  );
}

const Card = withRouter(Cardn)
export default Card;