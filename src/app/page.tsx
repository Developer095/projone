import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div id="NavBar" className="px-5 border-b-2">
        <div
          id="nb-elements"
          className="flex flex-row gap-80 justify-center items-center"
        >
          <div className="flex justify-center items-center">
            {/* <img srcSet="/pics/logo.webp" alt="Logo" /> */}
          </div>

          <div
            id="nb-list"
            className="flex text-[#27306a] font-medium justify-center align-middle "
          >
            <ul className="flex flex-row p-5 gap-4">
              <li className="pr-3">Home</li>
              <li className="pr-3">Services</li>
              <li className="pr-3">Blogs</li>
              <li>Careers</li>
            </ul>
          </div>

          <div id="nb-Btn" className="flex  justify-center align-middle ">
            <button className=" bg-[#ffffff] border border-[#5b628e] text-[#5b628e] rounded-md py-2.5 px-3 font-semibold text-xs color-[#ffffff]">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
      {/*                     NAVBAR ENDS------------MAIN PAGE START*/}

      <div
        id="ele-1"
        className="px-5 pt-24 flex flex-col gap-4 justify-center items-center text-5xl font-semibold mb-6"
      >
        <span className="text-[#16205f]">Build seamless UIs and reliable</span>
        <span className="text-[#16205f]">
          backends with
          <span className="text-[#5900ff]"> Fullstack Engineering</span>
        </span>
      </div>

      <div
        id="ele-1 pt-2"
        className="flex justify-center items-center font-normal"
      >
        <p className="mb-8 mt-4 max-w-[500px] text-center md:mt-8 text-[#16205f]">
          Manage every aspect of your project with our full stack development
          expertise.
        </p>
      </div>

      <div id="ele-1 btn" className="flex justify-center items-center">
        <button className="bg-[#6919ff] px-4 py-2 rounded-md font-normal text-white hover:bg-[#864fea]">
          Get Started
        </button>
      </div>

      {/*------------------------------------------ELEMENT 2 START---------------------- */}

      <div
        id="ele-2"
        className="bg-[#f1f5f9] flex items-center justify-center mt-20 pt-20 pb-20 flex-col gap-8"
      >
        <span
          id="ele-2 pt-1"
          className="text-5xl font-semibold text-[#16205f] max-w-[700px] text-center"
        >
          Our Full Stack Development services
        </span>

        <span
          id="ele-2 pt-2"
          className="text-center max-w-[550px] font-normal text-[#16205f]"
        >
          Speed up development, save money, and ensure accuracy by working with
          our expert full stack developers.
        </span>

        <div
          id="ele-2 pt-3"
          className="flex flex-wrap justify-center items-center gap-7 max-w-[1000px]"
        >
          <div
            id="ele-2 pt-3-A"
            className="bg-white flex flex-col gap-3 px-7 py-6 rounded-lg border-2 max-w-[320px] h-[320px]"
          >
            <span className="font-bold  text-[#16205f] text-left max-w-[100px] text-2xl">
              Frontend Engineering
            </span>

            <span className="font-normal text-[#16205f] text-left max-w-[230px]">
              Our full-stack team excels in front-end design, creating
              captivating interfaces using Next JS, React, Angular JS, Sevelte,
              Vue JS and more.
            </span>
          </div>

          <div
            id="ele-2 pt-3-B"
            className="bg-white flex flex-col gap-3 px-7 py-6 rounded-lg border-2 max-w-[320px] h-[320px]"
          >
            <span className="font-bold  text-[#16205f] text-left max-w-[320px] text-2xl">
              Backend Engineering
            </span>

            <span className="font-normal text-[#16205f] text-left max-w-[250px]">
              Our full-stack team excels in back-end development, delivering
              robust and scalable solutions using Node.js, Django, Nest JS,
              Express JS, Python, .NET, Laravel, and more.
            </span>
          </div>

          <div
            id="ele-2 pt-3-C"
            className="bg-white flex flex-col gap-3 px-7 py-6 rounded-lg border-2 max-w-[320px] h-[320px]"
          >
            <span className="font-bold  text-[#16205f] text-left max-w-[320px] text-2xl">
              API Implementation
            </span>

            <span className="font-normal text-[#16205f] text-left max-w-[250px]">
              Our development teams expertly integrate payment systems, social
              networks, geo-services, business tools, email marketing, and more
              seamlessly.
            </span>
          </div>

          <div
            id="ele-2 pt-3-D"
            className="bg-white flex flex-col gap-3 px-7 py-6 rounded-lg border-2 max-w-[320px] h-[320px]"
          >
            <span className="font-bold  text-[#16205f] text-left max-w-[320px] text-2xl">
              Database Layout
            </span>

            <span className="font-normal text-[#16205f] text-left max-w-[250px]">
              We have a team of in-house experts specialized in the latest
              database design and management platforms, including MongoDB,
              MySQL, PostgreSQL, and beyond.
            </span>
          </div>
        </div>
      </div>

      {/*------------------------------------------ELEMENT 3 START---------------------- */}

      <div
        id="ele-3"
        className="bg-white w-screen h-[700px] flex items-center justify-center"
      >
        <div className="from-[#2f1169] via-[#2a1359] to-black">
          <p>Hire Us On Your Preferred Platform</p>

          <div id="ele-3-A"></div>
        </div>
      </div>
    </main>
  );
}
