import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ---------- Section 01 ---------- */}
        <div>
          <p className="mb-2 text-2xl font-bold tracking-tight text-primary">
            Med Buddy
          </p>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Get doctors at your home.
          </p>
        </div>

        {/* ---------- Section 02 ---------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li><Link className="hover:text-primary" to="/">Home</Link></li>
            <li><Link className="hover:text-primary" to="/about">About us</Link></li>
            <li><Link className="hover:text-primary" to="/contact">Contact us</Link></li>
            <li><Link className="hover:text-primary" to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* ---------- Section 03 ---------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <a className="hover:text-primary" href="tel:9988035667">
                9988035667
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="mailto:culabexp@gmail.com">
                culabexp@gmail.com
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary"
                href="https://github.com/villanious1"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
