import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CollapsibleExample from './componentes/Navbar';
import UncontrolledExample from './componentes/Carousel';
import Columna1 from './componentes/column1';
import ObjetivoE from './componentes/ObjetivoE';
import Explicacion from './componentes/Explicacion';
import Fundamentacion from './componentes/Fundamentacion';

import Video from './componentes/ytvideo';
import Obj from './componentes/Spline';

function App() {
  return (
    <div className="App">
    <CollapsibleExample />
    <ObjetivoE />
    <Obj />
    <Columna1 />
    <Explicacion />
    <UncontrolledExample />
    <Fundamentacion />
    <Video />
    </div>
  );
}

export default App;
