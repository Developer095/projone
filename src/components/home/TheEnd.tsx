import Image from "next/image";
import React from "react";
import logo from "../../../image/logo.webp";
import PhoneIcon from "../../../image/call_3876088.png";
import TextPic from "../../../image/chat_10311367.png";
import FB from "../../../image/facebook_2168281.png";
import Insta from "../../../image/instagram_733614.png";
import YT from "../../../image/youtube.png";

const TheEnd = () => {
  return (
    <div className="px-56 py-20 border-t">
      <div className="grid grid-cols-4 Justify-center gap-8">
        <div id="Col-1" className="flex flex-col justify-start">
          <ul>
            <li>
              <Image src={logo} className="w-[150px] h-[35px] " alt="LOGO" />
            </li>
            <li className="pt-4">
              <p className="text-[#3f477b] font-medium">
                Empowering businesses with innovative technology solutions.
              </p>
            </li>
            <li className="py-2">
              <span className="flex flex-row items-center gap-3">
                <Image
                  src={PhoneIcon}
                  className="w-[15px] h-[15px] mr-1 filter-[invert(39%) sepia(18%) saturate(281%) hue-rotate(210deg) brightness(95%) contrast(89%)]"
                  alt="Call"
                />
                <p className="text-[#3f477b] font-medium">+923244444316</p>
              </span>
            </li>
            <li className="py-2">
              <span className="flex felx-row items-center gap-3 ">
                <Image
                  src={TextPic}
                  alt="Text"
                  className="h-[15px] mr-1 w-[15px]"
                />
                <p className="text-[#3f477b] font-medium">
                  codesprintsite@gmail.com
                </p>
              </span>
            </li>
          </ul>
        </div>

        <div id="Col-2" className="ml-6">
          <ul className="flex flex-col justify-start">
            <li className="text-[#16205f] font-bold pl-1">Company</li>
            <li className="text-[#3f477b] p-1">Privacy Policy</li>
            <li className="text-[#3f477b] p-1">Terms & Conditions</li>
            <li className="text-[#3f477b] p-1">Contact Us</li>
            <li className="text-[#3f477b] p-1">Blogs</li>
            <li className="text-[#3f477b] p-1">Careers</li>
          </ul>
        </div>

        <div id="Col-3">
          <ul className="flex flex-col justify-start">
            <li className="text-[#16205f] font-bold pl-1">Services</li>
            <li className="text-[#3f477b] p-1">Full Stack</li>
            <li className="text-[#3f477b] p-1">Frontend</li>
            <li className="text-[#3f477b] p-1">Backend</li>
            <li className="text-[#3f477b] p-1">Mobile App</li>
            <li className="text-[#3f477b] p-1">UI / UX</li>
            <li className="text-[#3f477b] p-1">QA</li>
            <li className="text-[#3f477b] p-1">Devops</li>
          </ul>
        </div>

        <div id="Col-4" className="flex flex-col">
          <div>
            <p className="text-[#16205f] font-bold">Head Office Address</p>
            <p className="text-[#3f477b] py-4">
              LDA Avenue 1, Block B, House no. 153, Lahore, Punjab PK
            </p>
          </div>
          <div>
            <p className="text-[#16205f] font-bold">Branch Office</p>
            <p className="text-[#3f477b] py-4">
              McLeod Road, Lakshmi Chowk, Saleem Chamber, Second Floor, Office
              no. 11, Lahore, Punjab PK
            </p>
          </div>
        </div>
        <div id="Col-5">
          <ul className="flex flex-col justify-start">
            <li className="text-[#16205f] font-bold pl-1">Follow Us</li>
            <li>
              <span className="flex flex-row pt-2 gap-2">
                <Image
                  src={FB}
                  className="w-[20px] h-[20px] filter invert-[12%] sepia-[31%] saturate-[3000%] hue-rotate-[225deg] brightness-[95%] contrast-[90%]"
                  alt="FB"
                />
                <Image src={Insta} className="w-[20px] h-[20px] " alt="Insta" />
                <Image src={YT} className="w-[20px] h-[20px] " alt="Youtube" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TheEnd;
