import Image from 'next/image';
import Link from 'next/link';

const DownloadBox = ({
  imgSrc,
  alt,
  browserTitle,
  minimumVersion,
  addMarginTop,
}) => {
  return (
    <div className='w-full md:w-1/3'>
      <div
        className={`flex flex-col py-6 space-y-4 text-center rounded-lg shadow-lg ${addMarginTop}`}
      >
        {/*  Image */}
        <div className='flex justify-center'>
          <Image src={imgSrc} alt={alt} width={64} height={64} />
        </div>
        {/*  Text  */}
        <h5 className='pt-6 text-xl font-bold'>{browserTitle}</h5>
        <p className='text-gray-400'>{minimumVersion}</p>
        {/*  'bg-dots' imported from tailwind.config */}
        <div className='bg-dots bg-repeat-x px-6 pt-6 capitalize'>
          <Link
            className='block w-full py-3 text-white duration-200 border-2 rounded-lg
                   bg-softBlue hover:text-softBlue hover:bg-white hover:border-softBlue'
            href='#'
          >
            Add & Install Extension
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DownloadBox;
