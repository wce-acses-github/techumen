import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import qrimage from "../../images/puzzleVaultqr.jpg";
import puzzlevaultImage from "../../images/puzzleVaultImage.svg";
import calenderLogo from "../../images/calenderLogo.svg";
import clockLogo from "../../images/clockLogo.svg";
import contactLogo from "../../images/contactLogo.svg";
import moneyLogo from "../../images/moneyLogo.svg";
import gobackBtn from "../../images/goBackBtn.svg";
import rulebookLogo from "../../images/rulebook.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function PuzzleVault() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Convert year of study to a number for both leader and member
      const getYearOfStudy = (year) => {
        switch (year) {
          case "1st":
            return 1;
          case "2nd":
            return 2;
          case "3rd":
            return 3;
          case "4th":
            return 4;
          default:
            return null;
        }
      };

      console.log(data);
      // Create a FormData object to hold form data and files
      const formData = new FormData();
      formData.append("leaderName", data.leaderName);
      formData.append("leaderCollegeName", data.collegeName);
      formData.append("idCardPhoto", data.leaderIdCardPhoto[0]);
      formData.append("leaderEmail", data.email);
      formData.append("leaderContactNum", data.contactNum);

      formData.append("teamName", data.teamName);

      // Member information
      formData.append("member1_Name", data.member1_Name);
      formData.append("member1_CollegeName", data.member1_CollegeName);
      formData.append("member1_ContactNum", data.member1_ContactNum);
      formData.append("member2_Name", data.member2_Name);
      formData.append("member2_CollegeName", data.member2_CollegeName);
      formData.append("member2_ContactNum", data.member2_ContactNum);
      formData.append("member3_Name", data.member3_Name);
      formData.append("member3_CollegeName", data.member3_CollegeName);
      formData.append("member3_ContactNum", data.member3_ContactNum);

      // Transaction fields
      formData.append("transactionId", data.transactionId);
      formData.append("transactionPhoto", data.transactionPhoto[0]); // Only the first file if multiple selected

      console.log(formData);
      // Perform the POST request to the API
      const response = await fetch(
        "https://techumen.onrender.com/api/v1/techumen/puzzlevault",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast.success("Registration Successful");
    } catch (error) {
      toast.error("Registration Unsuccessful, Please try again later");
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <ToastContainer />
      <div className="event-page-main-div w-full max-w-3xl mx-auto my-10 p-6 bg-gray-50 rounded-lg shadow-lg relative">
        {/* Go Back Button */}
        <button
          className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group mb-6"
          type="button"
          onClick={() => navigate("/")}
        >
          <div className="bg-blue-500 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
            <img src={gobackBtn} alt="goBack" />
          </div>
          <p className="translate-x-2 tajawal-font">Go Back</p>
        </button>

        {/* Title */}
        <h1 className="rowdy-font text-3xl font-bold text-center mb-2 text-black">
          Puzzle Vault
        </h1>
        <p className="rowdy-font text-center text-lg mb-6 text-gray-700">
          Crack the Puzzle, Uncover the Mystery
        </p>

        {/* event info */}
        <div className="event-page-intro grid grid-rows-2 mb-2 sm:grid-cols-2 sm:grid-rows-1">
          <div className="event-page-intro-left flex justify-center items-center">
            <img
              src={puzzlevaultImage}
              alt="webnatic-logo"
              className="w-[250px] h-[250px] rounded-full object-cover"
            />
          </div>
          <div className="event-page-intro-right flex flex-col justify-center text-gray-700">
            <p className="text-lg tajawal-font">
              <span> Dive into the event everyone’s talking about!</span>{" "}
              <br></br> A thrilling mystery-solving challenge where you’ll face
              intricate puzzles and riddles, racing against time to unlock the
              ultimate prize. Do you have what it takes to crack the vault?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 p-4 acme-font sm:grid-cols-2 sm:grid-rows-1">
          {/* Card for Date of Event */}
          <div className="relative rounded-lg bg-slate-900 p-4">
            <div className="flex items-center mb-2">
              <img src={calenderLogo} alt="Calendar" className="w-6 h-6 mr-2" />
              <h3 className="text-xl font-bold text-white">Date of Event</h3>
            </div>
            <p className="text-gray-300">13th October, 2024</p>
          </div>

          {/* Card for Timing of Event */}
          <div className="relative rounded-lg bg-slate-900 p-4">
            <div className="flex items-center mb-2">
              <img src={clockLogo} alt="Clock" className="w-6 h-6 mr-2" />
              <h3 className="text-xl font-bold text-white">Timing of Event</h3>
            </div>
            <p className="text-gray-300">11AM - 5PM</p>
          </div>

          {/* Card for Entry Fee */}
          <div className="relative rounded-lg bg-slate-900 p-4">
            <div className="flex items-center mb-2">
              <img src={moneyLogo} alt="Money" className="w-6 h-6 mr-2" />
              <h3 className="text-xl font-bold text-white">Entry Fee</h3>
            </div>
            <p className="text-gray-300">₹299 (With Refreshment)</p>
          </div>

          {/* Card for Contact Information */}
          <div className="relative rounded-lg bg-slate-900 p-4">
            <div className="flex items-center mb-2">
              <img src={contactLogo} alt="Contact" className="w-6 h-6 mr-2" />
              <h3 className="text-xl font-bold text-white">
                Contact for any Query
              </h3>
            </div>
            <p className="text-gray-300">Afnan Sayyad : +918459039945</p>
            <p className="text-gray-300">Yash Savalkar : +917972404363 </p>
          </div>
        </div>

        {/* RULEBOOK Section */}
        <div className="mb-6 mt-4 flex flex-col items-center gap-4 md:flex-row">
          {" "}
          {/* Change to flex-col for mobile and flex-row for md */}
          <h2 className="text-l font-semibold text-black playwrite-de-grund-font text-center">
            Discover all the essential information for the event right here
          </h2>
          <button
            className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-r from-[#6a11cb] to-[#2575fc] active:scale-95"
            type="button"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1GKTxv2MDrmdIEN9mR1DVQzJ0e2Be2lDG/view?usp=drivesdk",
                "_blank"
              )
            }
          >
            <span className="w-full h-full flex items-center gap-2 px-8 py-3 text-white rounded-[14px] bg-gradient-to-r from-[#6a11cb] to-[#2575fc]">
              <img src={rulebookLogo} alt="rulebookLogo" />
              RULEBOOK
            </span>
          </button>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-center mb-4 text-black acme-font">
            Register for PuzzleVault
            <strong>
              Due to many requests we have remove the criteria for team of 4.
              Now team can consist of members ranging from 2 to 4.
            </strong>
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 fredoka-font"
          >
            {/* Leader Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 text-md font-bold mb-2"
              >
                Leader Name:
              </label>
              <input
                className="text-sm text-black custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                type="text"
                placeholder="Enter your name"
                {...register("leaderName", {
                  required: "Leader Name is required",
                })}
              />
              {errors.leaderName && <p>{errors.leaderName.message}</p>}
            </div>

            {/* College Name and ID Card Photo */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              {/* College Name */}
              <div className="flex-1">
                <label
                  htmlFor="collegeName"
                  className="block text-gray-700 text-md font-bold mb-2"
                >
                  College Name:
                </label>
                <input
                  id="collegeName"
                  className="text-sm text-black custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                  type="text"
                  placeholder="Enter your college name"
                  {...register("collegeName", {
                    required: "College Name is required",
                  })}
                />
                {errors.collegeName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.collegeName.message}
                  </p>
                )}
              </div>

              {/* ID Card Photo */}
              <div className="flex-1 mt-4">
                {" "}
                {/* Increased margin top for mobile spacing */}
                <label
                  htmlFor="idCardPhoto"
                  className="block text-gray-700 text-md font-bold mb-2"
                >
                  Upload ID Card Photo of Leader:
                </label>
                <input
                  id="idCardPhoto"
                  type="file"
                  {...register("leaderIdCardPhoto")}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {errors.idCardPhoto && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.idCardPhoto.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-6">
              {/* Leader Email and Contact Number */}
              <div className="flex flex-col md:flex-row md:space-x-4">
                {/* Email */}
                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-md font-bold mb-2"
                  >
                    Email:
                  </label>
                  <input
                    id="email"
                    className="text-sm text-black custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Contact Number */}
                <div className="flex-1">
                  <label
                    htmlFor="contactNum"
                    className="block text-gray-700 text-md font-bold mb-2"
                  >
                    Contact Number:
                  </label>
                  <input
                    id="contactNum"
                    className="text-sm text-black custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    type="text"
                    placeholder="Enter your contact number"
                    {...register("contactNum", {
                      required: "Contact number is required",
                    })}
                  />
                  {errors.contactNum && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.contactNum.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Team Name */}

              <div>
                <label
                  htmlFor="teamName"
                  className="block text-gray-700 text-md font-bold mb-2"
                >
                  Team Name:
                </label>
                <input
                  type="text"
                  className="text-sm text-black custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                  placeholder="Enter your Team Name"
                  {...register("teamName", {
                    required: "Team Name is required",
                  })}
                />
                {errors.teamName && <p>{errors.teamName.message}</p>}
              </div>
              {/* Member 1 */}
              <div>
                <label
                  htmlFor="member1"
                  className="block text-gray-700 text-md font-bold mb-2"
                >
                  Member 1 Name:
                </label>
                <input
                  type="text"
                  className="text-sm text-black custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                  placeholder="Enter Name"
                  {...register("member1_Name", {
                    required: "Member 1 Name is required",
                  })}
                />
                {errors.member1_Name && <p>{errors.member1_Name.message}</p>}
              </div>

              <div className="flex flex-col md:flex-row md:space-x-4">
                {/* Member 1 College Name */}
                <div className="flex-1 mb-4 md:mb-0">
                  {" "}
                  {/* Added bottom margin for mobile spacing */}
                  <label
                    htmlFor="member1_CollegeName"
                    className="block text-gray-700 text-md font-bold mb-2"
                  >
                    Member 1 College Name:
                  </label>
                  <input
                    type="text"
                    className="text-sm text-black custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder="Enter College Name of Member 1"
                    {...register("member1_CollegeName", {
                      required: "Member 1 College Name is required",
                    })}
                  />
                  {errors.member1_CollegeName && (
                    <p>{errors.member1_CollegeName.message}</p>
                  )}
                </div>

                {/* Member 1 Contact Number */}
                <div className="flex-1 mb-4 md:mb-0">
                  {" "}
                  {/* Added bottom margin for mobile spacing */}
                  <label
                    htmlFor="member1_ContactNum"
                    className="block text-gray-700 text-md font-bold mb-2"
                  >
                    Member 1 Contact Number:
                  </label>
                  <input
                    type="text"
                    className="text-sm text-black custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder="Enter Contact Number of Member 1"
                    {...register("member1_ContactNum")}
                  />
                  {errors.member1_ContactNum && (
                    <p>{errors.member1_ContactNum.message}</p>
                  )}
                </div>
              </div>

              {/* Repeat for Member 2 */}
              <div>
                <label
                  htmlFor="member2_Name"
                  className="block text-gray-700 text-md font-bold mb-2"
                >
                  Member 2 Name:
                </label>
                <input
                  type="text"
                  className="text-sm text-black custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                  placeholder="Enter Name"
                  {...register("member2_Name")}
                />
                {errors.member2_Name && <p>{errors.member2_Name.message}</p>}
              </div>

              <div className="flex flex-col md:flex-row md:space-x-4">
                {/* Member 2 College Name */}
                <div className="flex-1 mb-4 md:mb-0">
                  {" "}
                  {/* Added bottom margin for mobile spacing */}
                  <label
                    htmlFor="member2_CollegeName"
                    className="block text-gray-700 text-md font-bold mb-2"
                  >
                    Member 2 College Name:
                  </label>
                  <input
                    type="text"
                    className="text-sm text-black custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder="Enter College Name of Member 2"
                    {...register("member2_CollegeName")}
                  />
                  {errors.member2_CollegeName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.member2_CollegeName.message}
                    </p>
                  )}
                </div>

                {/* Member 2 Contact Number */}
                <div className="flex-1 mb-4 md:mb-0">
                  {" "}
                  {/* Added bottom margin for mobile spacing */}
                  <label
                    htmlFor="member2_ContactNum"
                    className="block text-gray-700 text-md font-bold mb-2"
                  >
                    Member 2 Contact Number:
                  </label>
                  <input
                    type="text"
                    className="text-sm text-black custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder="Enter Contact Number of Member 2"
                    {...register("member2_ContactNum")}
                  />
                  {errors.member2_ContactNum && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.member2_ContactNum.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Repeat for Member 3 */}
              <div>
                <label
                  htmlFor="member3_Name"
                  className="block text-gray-700 text-md font-bold mb-2"
                >
                  Member 3 Name:
                </label>
                <input
                  type="text"
                  className="text-sm text-black custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                  placeholder="Enter Name"
                  {...register("member3_Name")}
                />
                {errors.member3_Name && <p>{errors.member3_Name.message}</p>}
              </div>

              <div className="flex flex-col md:flex-row md:space-x-4">
                {/* Member 3 College Name */}
                <div className="flex-1 mb-4 md:mb-0">
                  {" "}
                  {/* Added bottom margin for mobile spacing */}
                  <label
                    htmlFor="member3_CollegeName"
                    className="block text-gray-700 text-md font-bold mb-2"
                  >
                    Member 3 College Name:
                  </label>
                  <input
                    type="text"
                    className="text-sm text-black custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder="Enter College Name of Member 3"
                    {...register("member3_CollegeName")}
                  />
                  {errors.member3_CollegeName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.member3_CollegeName.message}
                    </p>
                  )}
                </div>

                {/* Member 3 Contact Number */}
                <div className="flex-1 mb-4 md:mb-0">
                  {" "}
                  {/* Added bottom margin for mobile spacing */}
                  <label
                    htmlFor="member3_ContactNum"
                    className="block text-gray-700 text-md font-bold mb-2"
                  >
                    Member 3 Contact Number:
                  </label>
                  <input
                    type="text"
                    className="text-sm text-black custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder="Enter Contact Number of Member 3"
                    {...register("member3_ContactNum")}
                  />
                  {errors.member3_ContactNum && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.member3_ContactNum.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Transaction ID and Transaction Photo with QR */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              {/* QR Image */}
              <div className="md:w-1/2 mb-4 md:mb-0 flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/domzgxu5n/image/upload/v1728204500/yz6rfyuvkzxpdvj9n1fo.jpg"
                  alt="QR Code"
                  className="max-w-full h-80"
                />
              </div>

              {/* Transaction Details */}
              <div className="md:w-1/2 flex flex-col justify-center align-middle space-y-4 p-5">
                {/* Transaction ID */}
                <div>
                  <label
                    htmlFor="transactionId"
                    className="block text-gray-700 text-md font-bold mb-2"
                  >
                    Transaction ID:
                  </label>
                  <input
                    id="transactionId"
                    className="text-sm text-black custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    type="text"
                    placeholder="Enter your transaction ID"
                    {...register("transactionId", {
                      required: "Transaction ID is required",
                    })}
                  />
                  {errors.transactionId && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.transactionId.message}
                    </p>
                  )}
                </div>

                {/* Transaction Photo Input */}
                <div>
                  <label
                    htmlFor="transactionPhoto"
                    className="block text-gray-700 text-md font-bold mb-2"
                  >
                    Transaction Photo:
                  </label>
                  <input
                    id="transactionPhoto"
                    type="file"
                    {...register("transactionPhoto", {
                      required: "Transaction photo is required",
                    })}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  {errors.transactionPhoto && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.transactionPhoto.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6 acme-font">
              <button
                type="submit"
                className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
              >
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Submit
                </span>
              </button>
            </div>

            <p className="text-sm text-gray-500 mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
              *If not able to submit through this you can fill the Google form
              by clicking the link below
            </p>
            {/* GfORM Button */}
            <div className="flex justify-center mt-6 acme-font">
              <a
                href="https://forms.gle/3NvLzrTbwH9fFpnd6"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
              >
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  GForm
                </span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PuzzleVault;
