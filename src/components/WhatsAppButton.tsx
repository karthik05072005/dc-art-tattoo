import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "917406008294"; // Format: country code + number without + or spaces
  const message = "Hi! I'd like to book an appointment at DC Art & Tattoo Studio.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 animate-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;