import { useForm } from "react-hook-form";
import logo from "../../images/acses.png";

function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://techumen.onrender.com/api/v1/contactUs/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        let errorMessage;
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const result = await response.json();
          errorMessage = result.error || "Failed to send the message.";
        } else {
          errorMessage = await response.text();
        }
        alert(`Failed to send the message: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again.");
    }
  };

  return (
    <div className="footer-main-div z-10 text-gray-100 rounded-lg pt-8 relative mx-auto ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6 my-20 ">
        {/* Footer Info */}
        <div className="footer-info md:w-1/2">
          <img src={logo} alt="" height={40} width={160} />
          <h3 className="tajawal-font text-lg mb-3">
            &lt;&gt;Logically Shifting the World&lt;/&gt;
          </h3>
          <p className="text-gray-200 text-md mb-4 nunito-font">
            Walchand College of Engineering, Sangli
          </p>
        </div>

<<<<<<< HEAD
        {/* Quick Link */}
        <div className="quick-links mx-4 nunito-font">
          <h2 className="text-white text-2xl mb-4">Quick Links</h2>
          <ul className="list-none">
            <li className="mb-2">
              <a
                href="#home"
                className="text-white-300 hover:translate-x-1 hover:text-blue-400 transition-transform duration-200"
              >
                Home
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-white-300 hover:translate-x-1 hover:text-blue-400 transition-transform duration-200"
              >
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#event-grid"
                className="text-white-300 hover:translate-x-1 hover:text-blue-400 transition-transform duration-200"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white-300 hover:translate-x-1 hover:text-blue-400 transition-transform duration-200"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
=======
        <section className="flex justify-center items-center space-x-4 mr-20">
        {/* LinkedIn Button */}
       <div className="flex flex-col items-center">
       <a
      href="https://www.linkedin.com/company/wceacses/"  // Replace with the actual LinkedIn URL
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer"
    >
    <button
      className="p-2 rounded-md drop-shadow-xl bg-[#0077b5] text-white font-semibold"
    >
      <img
        src="https://res.cloudinary.com/dc6kbccnm/image/upload/v1728286645/sf6vo3bxmrtk9oz0zdld.png"
        alt="LinkedIn Logo"
        className="w-6 h-6"
      />
    </button>
    </a>
    <span className="text-sm mt-2">LinkedIn</span>
  </div>

  {/* Discord Button */}
  <div className="flex flex-col items-center">
  <a
      href="https://discord.gg/Y6ebQAHsNk"  // Replace with the actual Discord URL
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer"
    >
    <button
      className="p-2 rounded-md drop-shadow-xl bg-[#7289da] text-white font-semibold"
    >
      <img
        src="https://res.cloudinary.com/dc6kbccnm/image/upload/v1728286645/n7tso94slouvypfjh2ux.png"
        alt="Discord Logo"
        className="w-6 h-6"
      />
    </button>
    </a>
    <span className="text-sm mt-2">Discord</span>
  </div>

  {/* Instagram Button */}
  <div className="flex flex-col items-center">
  <a
      href="https://instagram.com/wceacses"  // Replace with the actual Instagram URL
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer"
    >
    <button
      className="p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold"
    >
      <img
        src="https://res.cloudinary.com/dc6kbccnm/image/upload/v1728286645/sxeaclzqfanpsizdyccc.png"
        alt="Instagram Logo"
        className="w-6 h-6"
      />
    </button>
    </a>
    <span className="text-sm mt-2">Instagram</span>
  </div>
  <div className="flex flex-col items-center">
  <a
      href="https://chat.whatsapp.com/LD68rJ91c6l9OcMM6VNgw2"  // Replace with the actual Discord URL
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer"
      >
    <button
      className="p-2 rounded-md drop-shadow-xl bg-[#25D366] text-white font-semibold"
      >
      <img
        src="https://res.cloudinary.com/dc6kbccnm/image/upload/v1728316823/eo2rnthwrvondgsmgej9.png"
        alt="Discord Logo"
        className="w-6 h-6"
        />
    </button>
    </a>
    <span className="text-sm mt-2">Whatsapp</span>
  </div>
  </section>

>>>>>>> 7e21df9a96781aff444759a0f4f03e271db03a7a

        {/* Contact Form */}
        <div className="contact-form md:w-1/2">
          <label className="text-white font-bold text-4xl">Contact Us</label>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              className={`border ${errors.name ? 'border-red-500' : 'border-gray-300'} text-black p-2 mb-4 w-full`}
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}

            <input
              type="email"
              placeholder="Your Email"
              {...register("email", { required: "Email is required" })}
              className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-black p-2 mb-4 w-full`}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <textarea
              placeholder="Your Message"
              {...register("message", { required: "Message is required" })}
              className={`border ${errors.message ? 'border-red-500' : 'border-gray-300'} text-black p-2 mb-4 w-full`}
            />
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}

            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <p className="text-center text-white text-lg left-[43%] absolute bottom-2 z-50 mt-6 fredoka-font">
        © ACSES 2024. All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
