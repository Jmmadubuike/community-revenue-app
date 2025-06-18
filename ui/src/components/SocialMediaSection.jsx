import { motion } from 'framer-motion';
import { FaYoutube, FaFacebook, FaTelegram } from 'react-icons/fa';

const SocialMediaSection = () => {
  const socialLinks = [
    {
      icon: <FaYoutube />,
      url: "https://youtube.com/@ogidiuaf?si=m0Pt7k7DTo6sPweL",
      color: "text-red-500",
      hoverColor: "hover:text-red-600",
      label: "YouTube"
    },
    {
      icon: <FaFacebook />,
      url: "https://www.facebook.com/profile.php?id=61575106822817&mibextid=ZbWKwL",
      color: "text-blue-500",
      hoverColor: "hover:text-blue-600",
      label: "Facebook"
    },
    {
      icon: <FaTelegram />,
      url: "https://t.me/+wi8QHygF-29mYzE0",
      color: "text-blue-400",
      hoverColor: "hover:text-blue-500",
      label: "Telegram"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Connect With Our Community</h2>
          <div className="flex justify-center space-x-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center ${social.color} ${social.hoverColor} transition-colors duration-300`}
              >
                <div className="text-4xl mb-2">{social.icon}</div>
                <span className="text-sm font-medium">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMediaSection; 