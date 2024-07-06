import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { Oxygen } from "next/font/google";

const oxygen = Oxygen({
  weight: ["300", "400", "700"],
  display: "swap",
  subsets: ["latin"],
});

const NewFooter = () => {
  return (
    <div className="w-full sm:h-[33rem] h-[35rem] bg-black flex flex-col justify-between items-center  px-4 md:px-12 pt-8">
      <div
        className={`${oxygen.className}  sm:px-0 px-2 flex  sm:flex-row flex-col h-[29rem] w-full md:gap-4 sm:gap-[13rem]  gap-3 text-[#E9E9E9] sm:mt-5 mt-2`}
      >
        <div className="h-full w-full md:w-1/3 flex sm:flex-col gap-6   md:gap-10 md:p-4">
          <div className="flex flex-col w-1/2 justify-center md:gap-4 gap-2">
            <h4 className="font-semibold lg:text-3xl md:text-2xl">Contact Support</h4>
            <p className="lg:text-2xl md:text-lg text-sm text-[#E9E9E9]">+91 1234567890</p>
          </div>
          <div className="flex flex-col w-1/2 justify-center md:gap-2 gap-1">
            <h4 className="font-semibold lg:text-3xl md:text-2xl">Email Support</h4>
            <p className="lg:text-2xl md:text-lg text-sm text-[#E9E9E9]">support@stickerhive.com</p>
          </div>
          <div className="mt-10 sm:flex hidden">
          <p className="lg:text-2xl md:text-xl text-[#E9E9E9]">Made with  🤍  in India, Sticker Hive @2024</p>
          </div>
        </div>
        <div className="h-full w-full md:w-1/3 sm:gap-6 gap-6 flex flex-col md:p-4">
          <h4 className="font-semibold lg:text-3xl md:text-2xl">For Customers</h4>
          <div className={`${oxygen.className} flex sm:flex-col flex-wrap sm:justify-center sm:gap-0 gap-2`}>
            <Link href={"/terms-and-conditions"} className="flex items-center">
              <p className="lg:text-2xl md:text-xl text-sm text-[#E9E9E9]">Terms and Conditions</p>
            </Link>
            <Link href={"/aboutus"} className="flex items-center">
              <p className="lg:text-2xl md:text-xl text-sm text-[#E9E9E9]">About Us</p>
            </Link>
            <Link href={"/"} className="flex items-center">
              <p className="lg:text-2xl md:text-xl text-sm text-[#E9E9E9]">Carrers</p>
            </Link>
            <Link href={"/contactUs"} className="flex items-center">
              <p className="lg:text-2xl md:text-xl text-sm text-[#E9E9E9]">Contact Us</p>
            </Link>
            <Link href={"/FAQ"} className="flex items-center">
              <p className="lg:text-2xl md:text-xl text-sm text-[#E9E9E9]">FAQ</p>
            </Link>
            <Link href={"/"} className="flex items-center">
              <p className="lg:text-2xl md:text-xl text-sm text-[#E9E9E9]">Privacy Policy</p>
            </Link>
          </div>
        </div>
        <div
          className={`h-full w-full md:w-1/3   flex flex-col sm:gap-10  gap-6 sm:w-[17.75rem] md:p-4`}
        >
          <h4 className="font-semibold lg:text-3xl md:text-2xl">Follow Us On</h4>
          <div className="flex sm:flex-col sm:justify-center justify-normal sm:gap-0 gap-3">
            <Link href={""} className="flex sm:gap-4 gap-1 items-center">
              <FaFacebook className="sm:size-6 size-4" />{" "}
              <p className="lg:text-2xl md:text-xl text-sm text-[#E9E9E9]">FaceBook</p>
            </Link>
            <Link href={""} className="flex items-center sm:gap-4 gap-1">
              <FaTwitter className="sm:size-6 size-4" />{" "}
              <p className="lg:text-2xl md:text-xl text-sm text-[#E9E9E9]">Twitter</p>
            </Link>
            <Link href={"https://www.linkedin.com/"} className="flex items-center sm:gap-4 gap-1">
              <FaLinkedinIn className="sm:size-6 size-4" />{" "}
              <p className="lg:text-2xl md:text-xl text-sm text-[#E9E9E9]">LinkedIn</p>
            </Link>
            <Link href={"https://www.instagram.com/"} className="flex items-center sm:gap-4 gap-1">
              <FaInstagram className="sm:size-6 size-4" />{" "}
              <p className="lg:text-2xl md:text-xl text-sm text-[#E9E9E9]">Instagram</p>
            </Link>
          </div>
        </div>
        <div className="flex sm:hidden justify-center">
          <p className="lg:text-2xl md:text-xl text-[#E9E9E9] text-center">Made with  🤍  in India, Sticker Hive @2024</p>
        </div>
      </div>
     
    </div>
  );
};

export default NewFooter;
