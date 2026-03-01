import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kr8ynle",
        "template_av6dpan",
        form.current,
        "BwiGh_gzvR8f2vFW2"
      )
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] relative"
    >
      <ToastContainer />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 border border-primary-500/5 rounded-full animate-spin-slow pointer-events-none hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-28 h-28 border border-indigo-500/5 rounded-full animate-spin-slow pointer-events-none hidden lg:block" style={{ animationDirection: 'reverse' }} />

      {/* Section Title */}
      <div className="text-center mb-12 animate-on-scroll">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white section-title">
          CONTACT
        </h2>
        <p className="text-gray-500 mt-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          I'd love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="animate-on-scroll scale-up w-full max-w-lg glass-card gradient-border rounded-2xl p-8 relative">
        <h3 className="text-xl font-display font-semibold text-white text-center mb-6">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
          <div className="space-y-1">
            <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="your@email.com"
              required
              className="input-glow w-full p-3.5 rounded-xl bg-white/[0.03] text-white border border-white/10 focus:outline-none placeholder-gray-600 text-sm"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              required
              className="input-glow w-full p-3.5 rounded-xl bg-white/[0.03] text-white border border-white/10 focus:outline-none placeholder-gray-600 text-sm"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="What's this about?"
              required
              className="input-glow w-full p-3.5 rounded-xl bg-white/[0.03] text-white border border-white/10 focus:outline-none placeholder-gray-600 text-sm"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">Message</label>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows="4"
              required
              className="input-glow w-full p-3.5 rounded-xl bg-white/[0.03] text-white border border-white/10 focus:outline-none placeholder-gray-600 text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 text-white font-semibold rounded-xl text-sm transition-all duration-500 btn-shimmer hover:shadow-[0_0_30px_rgba(130,69,236,0.3)] hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #8245ec, #a855f7, #6366f1)",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
