import { render } from 'react-dom';
import { App } from './App';

export default function Wrapper() {
  return <App />;
}

render(<Wrapper />, document.getElementById('root'));
