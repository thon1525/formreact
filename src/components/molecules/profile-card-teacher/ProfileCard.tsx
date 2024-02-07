import React, { FC } from "react";
import Image from "next/image";
import { Button } from "@/components";
interface CardProfileProps {
  children: React.ReactNode;
  className?: string;
  toptext?: string;
  NameTutorTitle?: string;
  NameSubject?: string;
  RetingTutor?: string;
  Studentsqty?: string;
  PriceTutor?: string;
  align?:string
}

interface ImageCardProps {
  children?: React.ReactNode;
  className?: string;
  ImageSrc?: string;
  alt?: string;
  ImageWidth?: number;
  ImageHeight?: number;
}

const ImageCard: React.FC<ImageCardProps> = ({
  children,
  className,
  ImageSrc,
  alt,
}) => {
  return (
    <Image
      src={`/${ImageSrc}`}
      className={`${className}`}
      alt={`${alt}`}
      width={180}
      height={180}
    />
  );
};

interface HeaderImageProps {
  children: React.ReactNode;
  className?: string;
}

const HeaderImage: React.FC<HeaderImageProps> = ({ children, className }) => {
  return (
    <div
      className={`w-[420px] mt-[-20px] px-9 h-[180px] flex justify-center items-center relative${className}`}
    >
      {children}
      <svg
        className="absolute mt-[135px] ml-[110px]"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.34375 12.5C2.34375 6.89062 6.89062 2.34375 12.5 2.34375C18.1094 2.34375 22.6562 6.89062 22.6562 12.5C22.6562 18.1094 18.1094 22.6562 12.5 22.6562C6.89062 22.6562 2.34375 18.1094 2.34375 12.5ZM16.2604 10.6104C16.3229 10.5271 16.3681 10.4322 16.3934 10.3312C16.4187 10.2302 16.4236 10.1251 16.4077 10.0222C16.3918 9.91934 16.3555 9.82065 16.3009 9.73198C16.2463 9.6433 16.1746 9.56643 16.0899 9.50589C16.0051 9.44534 15.9092 9.40234 15.8076 9.37941C15.706 9.35647 15.6009 9.35408 15.4984 9.37236C15.3959 9.39064 15.2981 9.42922 15.2107 9.48585C15.1233 9.54247 15.0481 9.61599 14.9896 9.70208L11.6188 14.4208L9.92708 12.7292C9.77898 12.5912 9.5831 12.516 9.38071 12.5196C9.17831 12.5232 8.9852 12.6052 8.84206 12.7483C8.69892 12.8914 8.61693 13.0846 8.61336 13.287C8.60979 13.4894 8.68492 13.6852 8.82292 13.8333L11.1667 16.1771C11.2469 16.2572 11.3435 16.3189 11.45 16.358C11.5564 16.397 11.6701 16.4124 11.7831 16.4031C11.8961 16.3937 12.0057 16.3599 12.1043 16.304C12.2029 16.2481 12.2882 16.1714 12.3542 16.0792L16.2604 10.6104Z"
          fill="#008000"
        />
      </svg>
    </div>
  );
};

const ProfileCard: React.FC<CardProfileProps> = ({
  className,
  children,
  toptext,
  NameTutorTitle,
  NameSubject,
  RetingTutor,
  Studentsqty,
  PriceTutor,
  align = "center",
}) => {
  return (
    <div
      className={`w-[420px] h-[420px] bg-while rounded-lg shadow-lg flex flex-col ${className}`}
    >
      <div className="flex  justify-between py-[10px] ">
        <div className="ml-[20px]  flex justify-start ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.87464 1.96552V2.60902C3.09839 2.72002 2.33039 2.85652 1.57139 3.01627C1.42935 3.04637 1.30445 3.13023 1.22281 3.2503C1.14118 3.37038 1.10914 3.51737 1.13339 3.66052C1.32282 4.77354 1.87871 5.79136 2.71276 6.55231C3.54682 7.31326 4.61121 7.77371 5.73689 7.86052C6.33618 8.3503 7.04007 8.6957 7.79414 8.87002C7.72248 9.72129 7.4352 10.5403 6.95939 11.2498H6.40514C5.62814 11.2498 4.99889 11.8798 4.99889 12.656V14.6248H4.43639C3.98884 14.6248 3.55962 14.8026 3.24315 15.119C2.92668 15.4355 2.74889 15.8647 2.74889 16.3123C2.74889 16.6228 3.00089 16.8748 3.31139 16.8748H14.5614C14.7106 16.8748 14.8537 16.8155 14.9591 16.71C15.0646 16.6045 15.1239 16.4615 15.1239 16.3123C15.1239 15.8647 14.9461 15.4355 14.6296 15.119C14.3132 14.8026 13.8839 14.6248 13.4364 14.6248H12.8739V12.656C12.8739 11.879 12.2439 11.2498 11.4676 11.2498H10.9134C10.4378 10.5402 10.1508 9.72123 10.0794 8.87002C10.8335 8.69548 11.5374 8.34982 12.1366 7.85977C13.2625 7.77312 14.327 7.31274 15.1612 6.55178C15.9954 5.79081 16.5514 4.77291 16.7409 3.65977C16.7649 3.51663 16.7327 3.36973 16.6509 3.24981C16.5691 3.12988 16.4442 3.04621 16.3021 3.01627C15.5394 2.85514 14.7714 2.71932 13.9996 2.60902V1.96477C13.9996 1.82758 13.9494 1.69514 13.8585 1.59238C13.7676 1.48961 13.6423 1.4236 13.5061 1.40677C11.9902 1.21806 10.464 1.12363 8.93639 1.12402C7.38914 1.12402 5.86439 1.22002 4.36664 1.40677C4.23063 1.42377 4.10549 1.48985 4.01476 1.5926C3.92403 1.69535 3.87393 1.8277 3.87389 1.96477L3.87464 1.96552ZM3.87464 3.93727C3.87464 4.83427 4.10864 5.67727 4.51739 6.40777C4.01044 6.18044 3.55715 5.84871 3.18715 5.43425C2.81714 5.01978 2.53874 4.53192 2.37014 4.00252C2.86967 3.90559 3.37129 3.81982 3.87464 3.74527V3.93727ZM13.9996 3.93727V3.74527C14.5051 3.82027 15.0069 3.90577 15.5041 4.00252C15.3356 4.53194 15.0572 5.01983 14.6872 5.43429C14.3172 5.84876 13.8639 6.18048 13.3569 6.40777C13.7796 5.65308 14.001 4.80229 13.9996 3.93727Z"
              fill="#B0A229"
            />
          </svg>
          <div className="ml-[5px] text-gray-800 mt-[-1px]">Top</div>
          <div className="ml-[5px] mt-[-1px]">{toptext}</div>
        </div>
        <div className="text-gray-800 mr-[20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M18.3264 3.46084C19.4728 3.59389 20.3125 4.58229 20.3125 5.73644V21.875L12.5 17.9688L4.6875 21.875V5.73644C4.6875 4.58229 5.52717 3.59389 6.67363 3.46084C8.58496 3.23903 10.5292 3.125 12.5 3.125C14.4708 3.125 16.415 3.23903 18.3264 3.46084Z"
              stroke="#0F172A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      {children}
      <div className="flex justify-center">
        <div className="text-gray-800 text-center text-xl font-normal leading-6 tracking-wider px-9 py-2">
          {NameTutorTitle}
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-[#454544] font-thin text-sm	 tracking-wider mt-[-2px]">
          {NameSubject}
        </p>
      </div>
      {/* this price and retting for tututing */}
      <div className="flex justify-between py-6">
        <div className="text-[#454544] ml-[20px]  bg-opacity-80 text-lg font-normal leading-5 tracking-wider">
          Rating
        </div>
        <div className="text-[#454544] bg-opacity-80 text-lg font-normal leading-5 tracking-wider">
          Students
        </div>
        <div className="text-[#454544] mr-[20px]  bg-opacity-80 text-lg font-normal leading-5 tracking-wider">
          Price
        </div>
      </div>
      {/* end this price and retting for tututing */}
      {/* this values data in card  */}
      <div className="flex justify-between mt-[-10px] ml-[10px]">
        <div className="text-[#454544] ml-[20px]  bg-opacity-80 text-sm font-normal leading-5 tracking-wider">
          <div className="flex justify-start">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10.1731 5.487L10.1789 5.50109L10.1942 5.50232L13.7968 5.79165C14.5507 5.85188 14.8564 6.79221 14.2819 7.28441L11.5372 9.63574L11.5256 9.64568L11.5292 9.66053L12.3672 13.1759C12.5427 13.9116 11.7429 14.4925 11.0979 14.0987L8.0132 12.2147L8.00017 12.2068L7.98713 12.2147L4.90247 14.0987C4.25746 14.4925 3.45764 13.9109 3.63315 13.1759L3.63315 13.1759L4.47115 9.66053L4.47469 9.64568L4.4631 9.63574L1.71843 7.28441C1.14398 6.79221 1.44967 5.85188 2.20349 5.79165L2.2035 5.79165L5.80617 5.50232L5.82138 5.50109L5.82725 5.487L7.21525 2.14966C7.50537 1.4522 8.49496 1.4522 8.78508 2.14966L10.1731 5.487Z"
                  fill="#FFFF00"
                  stroke="black"
                  stroke-width="0.05"
                />
              </svg>
            </div>
            <div className="ml-[5px]">{RetingTutor}</div>
          </div>
        </div>
        <div className="text-[#454544] bg-opacity-80 ml-[35px] text-sm font-normal leading-5 tracking-wider">
          {Studentsqty}
        </div>
        <div className="text-[#454544] mr-[20px]  bg-opacity-80 text-sm font-normal leading-5 tracking-wider">
          {PriceTutor}$/hour
        </div>
      </div>
      {/* end values data in card  */}
      {/* state  this button  */}
      <div className="flex justify-center py-7">
        <Button className="w-[130px] h-[35px] flex justify-between items-center rounded-[10px]" colorScheme="outline">
          <p className="text-[#454544] font-thin text-sm	 tracking-wider ml-[8px]">View profile</p>
          <div >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            className="mr-[10px]"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.8536 7.64689C10.9472 7.74064 10.9998 7.86772 10.9998 8.00022C10.9998 8.13272 10.9472 8.25981 10.8536 8.35356L5.85356 13.3536C5.75877 13.4419 5.63341 13.49 5.50388 13.4877C5.37434 13.4854 5.25075 13.4329 5.15914 13.3413C5.06753 13.2497 5.01506 13.1261 5.01277 12.9966C5.01049 12.867 5.05857 12.7417 5.14689 12.6469L9.79356 8.00022L5.14689 3.35356C5.05857 3.25877 5.01049 3.13341 5.01277 3.00387C5.01506 2.87434 5.06753 2.75075 5.15914 2.65914C5.25075 2.56753 5.37434 2.51506 5.50388 2.51277C5.63341 2.51049 5.75877 2.55857 5.85356 2.64689L10.8536 7.64689Z"
              fill="#454544"
            />
          </svg>
          </div>
          
        </Button>
      </div>
      {/* end this button  */}
    </div>
  );
};

export { ProfileCard, ImageCard, HeaderImage };