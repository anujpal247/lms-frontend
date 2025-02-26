import {
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsLinkedin,
} from "react-icons/bs";

function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <>
      <footer className="relative left-0 bottom-0 h-[20vh] sm:h-[10vh] flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 py-5 sm:px-20">
        <section className="text-lg font-semibold">
          Copyright {year} | All rights reserved
        </section>
        <section className="flex items-center text-2xl gap-5">
          <a
            href=""
            className="hover:text-yellow-500 transition-all ease-in-out duration-300"
          >
            <BsFacebook />
          </a>
          <a
            href=""
            className="hover:text-yellow-500 transition-all ease-in-out duration-300"
          >
            <BsInstagram />
          </a>
          <a
            href=""
            className="hover:text-yellow-500 transition-all ease-in-out duration-300"
          >
            <BsLinkedin />
          </a>
          <a
            href=""
            className="hover:text-yellow-500 transition-all ease-in-out duration-300"
          >
            <BsTwitterX />
          </a>
        </section>
      </footer>
    </>
  );
}

export default Footer;
