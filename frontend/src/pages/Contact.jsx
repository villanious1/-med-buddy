import { assets } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500 uppercase">
        <p>
          Contact <span className="text-gray-700 font-medium">Us</span>
        </p>
      </div>

      <div className="my-10 mb-28 flex flex-col items-center gap-10 text-sm md:flex-row md:justify-center">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt="Connect with doctors online through Med Buddy"
        />
        <div className="flex flex-col items-start justify-center gap-5">
          <p className="font-semibold text-lg text-gray-600 uppercase">
            Healthcare, connected online
          </p>
          <p className="max-w-lg leading-6 text-gray-500">
            Find a specialist and request an appointment online without
            travelling to an office just to book. Doctors can manage their
            availability and appointments through the platform, helping reduce
            back-and-forth and save time.
          </p>
          <Link
            to="/doctors"
            className="border border-primary px-8 py-4 text-sm text-primary transition-all duration-500 hover:bg-primary hover:text-white"
          >
            Browse doctors
          </Link>
          <p className="font-semibold text-lg text-gray-600 uppercase">
            Online support
          </p>
          <p className="text-gray-500">
            For help with the project or your account, contact us by phone or
            email. Med Buddy does not have a walk-in office.
          </p>
          <p className="text-gray-500">
            Phone:{" "}
            <a className="hover:text-primary" href="tel:9988035667">
              9988035667
            </a>
            <br />
            Email:{" "}
            <a
              className="hover:text-primary"
              href="mailto:culabexp@gmail.com"
            >
              culabexp@gmail.com
            </a>
          </p>
          <a
            href="https://github.com/villanious1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            View our GitHub profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
