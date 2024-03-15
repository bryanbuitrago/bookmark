import NewsletterContent from './NewsletterContent';
import NewsletterForm from './NewsletterForm';

const NewsletterSection = () => {
  return (
    <section id='newsletter' className='bg-softBlue'>
      {/* Content & Form Container */}
      <div className='max-w-lg mx-auto py-24'>
        <NewsletterContent />
        <NewsletterForm />
      </div>
    </section>
  );
};

export default NewsletterSection;
