import Modal from "../../components/Modal";
import examio from "../Home/images/examio_icon.svg";
import line from "../Home/images/line_zero.svg";
import sideimg from "../Home/images/signup_img.png";
import { AiFillCaretLeft } from "react-icons/ai";
import { useState } from "react";
import { BsFillPatchExclamationFill } from "react-icons/bs";

const Signup = () => {
  const [showModal, setShowModal] = useState(false);
  const startModal = () => {
    setShowModal(!showModal);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [error, setError] = useState(false);

  const [firstname, lastname] = name.split(" ");

  const [selectedOption, setSelectedOption] = useState("option1");

  function handleChange(e) {
    e.preventDefault();

    setSelectedOption(e.target.value);
    console.log(selectedOption);
  }

  const examinerURL = "http://api.examio.feranmi.tech/api/examiner/signup";
  const studentURL = "http://api.examio.feranmi.tech/api/student/signup";

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      password.length < 8 ||
      organisation.length === 0 ||
      occupation.length === 0
    ) {
      setError(true);
    } else {
      setShowModal(true);
    }

    let endPointURL;

    if (selectedOption === "option1") {
      endPointURL = studentURL;
    } else {
      endPointURL = examinerURL;
    }

    const response = await fetch(endPointURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        organisation: organisation,
        occupation: occupation,
      }),
    });

    if (response.status > 300) {
      console.log("Email or password already exists");
      alert("Email or password already exists.");
    } else {
      startModal();
      const data = await response.json();
      console.log(data);
    }
  }

  return (
    <div className="flex flex-col md:flex-row py-10">
      {/* ----------- Left Side ------------------ */}
      <div className="hidden md:flex flex-col md:px-20 md:py-10 md:w-1/2">
        <a
          href="/"
          className="flex items-center text-lightColor md:hover:text-buttonColor absolute top-3 left-3 text-md"
        >
          <AiFillCaretLeft />
          Back to Homepage
        </a>
        <a href="/" className="flex items-center gap-3 pb-10">
          <img src={examio} alt="ExamIO icon or logo" />
          <h3 className="text-lg text-lightColor font-black">ExamIO</h3>
        </a>
        <div>
          <img
            src={line}
            alt="start-out underline"
            className="relative top-[6rem] right-5"
          />
          <h1 className="text-[3rem] text-lightColor font-extrabold italic pb-[2rem] pt-[1.8rem] leading-[4rem]">
            Start Out with our user-friendly Testing platform for free...
          </h1>
          <p className="text-lightColor text-[1.5rem] pb-[3rem]">
            Start by letting us know your plans...
          </p>
        </div>
        <img src={sideimg} alt="Signup side pic of a computer" />
      </div>

      {/* ----------- Right Side ------------------ */}
      <div className="border rounded-[20px] border-none bg-lightColor px-[2.5rem] py-[2.1rem] w-[90%] m-auto md:mr-20 md:w-[45%]">
        <h1 className="text-[1.1rem] text-center font-bold pb-5 border-b-4 border-buttonColor flex flex-col gap-[1.5rem]">
          Get Started With ExamIO for free
        </h1>
        <form
          className="flex flex-col gap-[1.5rem]"
          onSubmit={handleSubmit}
          method=""
        >
          <div className="pt-10">
            <label htmlFor="name" className="font-medium inline-block">
              Your Name:
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              id="name"
              placeholder="e.g. John Smith"
              required
            />
          </div>
          {error && name.length <= 0 ? (
            <label className="text-buttonColor font-bold flex">
              <BsFillPatchExclamationFill />
              This field cannot be empty. Please input your name.
            </label>
          ) : (
            ""
          )}

          <div>
            <label htmlFor="email">Email:</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="johnsmith@gmail.com"
              required
            />
          </div>
          {error && email.length < 8 ? (
            <label className="text-buttonColor font-bold flex">
              <BsFillPatchExclamationFill /> Please input a valid email address.
            </label>
          ) : (
            ""
          )}

          <div>
            <label htmlFor="organisation">Organisation/School:</label>
            <input
              onChange={(e) => setOrganisation(e.target.value)}
              type="text"
              name="organisation"
              id="organisation"
              placeholder="e.g. John & Co Inc."
              required
            />
          </div>
          {error && organisation.length <= 0 ? (
            <label className="text-buttonColor font-bold flex">
              <BsFillPatchExclamationFill />
              Please input your company/organisation
            </label>
          ) : (
            ""
          )}

          <div>
            <label htmlFor="Occupation">Occupation</label>
            <input
              onChange={(e) => setOccupation(e.target.value)}
              type="text"
              id="occupation"
              name="occupation"
              placeholder="e.g. Student"
            />
          </div>

          <div>
            <label htmlFor="purpose">What would you like to do?</label>
            <select onChange={handleChange} value={selectedOption}>
              <option value="option1">Take a test/exam on the app</option>
              <option value="option2">Conduct an exam on the app</option>
            </select>
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              required
            />
          </div>
          {error && password < 5 ? (
            <label className="text-buttonColor font-bold">
              Password must contain the following:
              <ul>
                <li>A lowercase letter (a)</li>
                <li>An uppercase letter (A)</li>
                <li>A number (0, 1, 2, 3...)</li>
                <li>A special character (!,@,#,$,%...)</li>
                <li>At least 5 characters</li>
              </ul>
            </label>
          ) : (
            ""
          )}

          <div>
            <label htmlFor="password">Confirm Password:</label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              required
            />
          </div>
          {error && confirmpassword !== password ? (
            <label className="text-buttonColor font-bold flex">
              <BsFillPatchExclamationFill />
              Please confirm that the password match the one you inputted above
            </label>
          ) : (
            ""
          )}
          <button
            typeof="submit"
            disabled={
              name &&
              email &&
              organisation &&
              occupation &&
              password &&
              confirmpassword
                ? false
                : true
            }
            className="px-[1.5rem] py-[0.8rem] bg-buttonColor text-lightColor rounded-[0.5rem] text-lg font-bold md:hover:bg-hoverColor w-[70%] mx-auto"
          >
            Get Started for Free
          </button>
        </form>
      </div>
      <Modal open={showModal} onClose={startModal} />
    </div>
  );
};

export default Signup;
