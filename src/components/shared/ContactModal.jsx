import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useModal } from '../../contexts/ContactContext';
import { Button } from './Button';

export const ContactModal = () => {
    const { isModalOpen, closeModal } = useModal();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isModalOpen) return null;

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    emailjs.sendForm('service_sr7wnut', 'template_m7itar8', e.target, '4TqZ43W4pUojn91xJ')
      .then(() => {
        setSent(true);
        setLoading(false);
        e.target.reset();
      })
      .catch((err) => {
        setLoading(false);
        console.error('Error sending message:', err);
      });
  };

  return (
    <>
      {/* <button
        onClick={toggleModal}
        className="px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600"
      >
        Let's Talk
      </button> */}

        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg relative shadow-lg">
            <button onClick={closeModal} className="absolute top-3 right-4 text-xl">×</button>
            <h2 className="text-2xl font-bold mb-4">Let's Talk</h2>

            {sent ? (
                <>
                    <p className="text-primary font-medium">Message sent! We’ll get back to you soon.</p>
                    <Button className="mt-4" variant="outline" onClick={closeModal}>
                        Close
                    </Button>
                    {/* <button
                        type='submit'
                        className="px-6 py-3 bg-white border border-primary rounded-xl hover:bg-primary-600"
                    >
                        Close
                    </button> */}
                </>

            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 border rounded-lg"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full p-3 border rounded-lg"
                ></textarea>
                <Button type="submit" disabled={loading} className="w-full" variant="default">
                    Send Message
                </Button>
                
              </form>
            )}
          </div>
        </div>
    
    </>
  );
}
