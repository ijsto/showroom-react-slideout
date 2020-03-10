import Jumbo from '../components/dataDisplay/Jumbo';
import SlideOutDemo from '../components/layout/SlideOut';

export default () => {
  return (
    <div style={{ maxWidth: '90%', margin: '0 auto' }}>
      <Jumbo>
        <h1>React-SlideOut</h1>
      </Jumbo>

      <SlideOutDemo />
    </div>
  );
};
