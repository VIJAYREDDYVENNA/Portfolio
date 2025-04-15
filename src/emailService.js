// emailService.js
import emailjs from 'emailjs-com';

// Initialize EmailJS with your user ID (get this from your EmailJS dashboard)
emailjs.init("YOUR_USER_ID");

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      'YOUR_SERVICE_ID',  // Create a service in EmailJS dashboard
      'YOUR_TEMPLATE_ID', // Create a template in EmailJS dashboard
      {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'vbreddyvenna@gmail.com', // This will be used in your template
      }
    );
    
    return { success: true, response };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};