import { Counters } from '../../components/features/Counters/Counters';
import { CreateCounter } from '../../components/features/Counters/CreateCounter';

export const Homepage = () => {
  return (
    <div>
        <CreateCounter />
        <Counters />
    </div>
  );
};
