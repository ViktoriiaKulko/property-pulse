import Link from 'next/link';

const InfoBox = ({
  bgColor = 'bg-gray-100',
  buttonInfo,
  children,
  heading,
  textColor = 'text-gray-800',
}) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className="mt-2 mb-4">{children}</p>

      <Link
        href={buttonInfo.link}
        className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;
