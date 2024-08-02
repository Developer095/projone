import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div
        id="NavBar"
        className="flex flex-row justify-center my-4 gap-4 bg-blue-800 items-center h-20 border-b-2 border-black"
      >
        <div className="bg-green-900 flex  justify-center align-middle ">
          <p>hi</p>
        </div>

        <div
          id="nb-list"
          className="bg-green-500 flex  justify-center align-middle "
        >
          <ul className="flex flex-row p-4">
            <li className="pr-3">Home</li>
            <li className="pr-3">Services</li>
            <li className="pr-3">Blogs</li>
            <li className="pr-3">Careers</li>
          </ul>
        </div>

        <div
          id="nb-Btn"
          className="bg-green-100 flex  justify-center align-middle "
        >
          <button className="border-2 border-[#5b628e] color-[#5b628e]">
            CONTACT US
          </button>
        </div>
      </div>
    </main>
  );
}
