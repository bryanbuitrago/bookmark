import FeaturesBackgroundPattern from './FeaturesBackgroundPattern';
import FeaturesTabsPanels from './FeaturesTabsPanels';

const FeaturesSection = () => {
  return (
    <section id='features'>
      {/* Container Tabs/Panel */}
      <div className='container relative mx-auto my-6 mb-32 mt-12 px-6'>
        <FeaturesBackgroundPattern />
        <FeaturesTabsPanels />
      </div>
    </section>
  );
};

export default FeaturesSection;
