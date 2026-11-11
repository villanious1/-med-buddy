import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <main className="min-h-[60vh] py-10 text-gray-600">
      <h1 className="mb-6 text-center text-2xl font-medium text-gray-800">
        Privacy Policy
      </h1>
      <div className="mx-auto max-w-3xl space-y-5 text-sm leading-7">
        <p>
          Med Buddy is a college project and demonstration appointment-booking
          app. Please do not enter real medical, financial, or other sensitive
          personal information.
        </p>
        <p>
          Information entered into the app, such as your name, email, profile
          details, and appointment selections, may be stored by its configured
          backend so the demo features can work. Account passwords are
          protected using password hashing.
        </p>
        <p>
          This project is provided for demonstration purposes and does not
          replace professional medical services. For questions about the
          project, contact{" "}
          <a
            className="text-primary hover:underline"
            href="mailto:culabexp@gmail.com"
          >
            culabexp@gmail.com
          </a>{" "}
          or call{" "}
          <a className="text-primary hover:underline" href="tel:9988035667">
            9988035667
          </a>
          .
        </p>
        <Link className="inline-block text-primary hover:underline" to="/">
          Return home
        </Link>
      </div>
    </main>
  );
};

export default Privacy;
