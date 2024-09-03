import Image from 'next/image';
interface Props {
  title:string;
description:string;
bgColor:string;
iconUrl:string;
textColor:string;
}
const CardComponent = ({ title, description, bgColor, iconUrl,textColor }:Props) => {
  return (
    <div className={`rounded-3xl shadow-lg ${bgColor} flex h-full w-full  ${textColor} max-h-[280px]`}>
      
        <div className="w-2/5 mr-4 max-h-80 flex flex-col-reverse">
          <Image className='rounded-bl-3xl'src={iconUrl} alt={title} width={150} height={150} style={{maxWidth:'none'}}  />
        </div>
        <div className='text-pretty px-1 py-6 '>
          <h1 className="text-[24px] leading-[130%] font-[700]  ">{title}</h1>
          <h4 className="mt-0 mr-2 font-sans text-[16px] font-[400] leading-[130%] tracking-[0.00938rem] ">{description}</h4>
        </div>
     
    </div>
  );
};

export default CardComponent;
