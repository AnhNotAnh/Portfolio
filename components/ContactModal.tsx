import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
        await emailjs.send(
            process.env.YOUR_SERVICE_ID!,
            process.env.YOUR_TEMPLATE_ID!,
            {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            },
            process.env.YOUR_PUBLIC_KEY
        );
        onClose();
        setFormData({ name: '', email: '', message: '' });
        } catch (error) {
        console.error('Email send failed:', error);
        } finally {
        setIsSubmitting(false);
        }
    };

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#04071d] p-8 rounded-3xl border border-white/[0.1] w-[90%] max-w-md"
        overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-sm"
        >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white mb-4">Let's Connect</h2>
            <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="p-3 rounded-lg bg-[#10132E] text-white border border-white/[0.1] focus:outline-none focus:border-purple"
            required
            />
            <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="p-3 rounded-lg bg-[#10132E] text-white border border-white/[0.1] focus:outline-none focus:border-purple"
            required
            />
            <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="p-3 rounded-lg bg-[#10132E] text-white border border-white/[0.1] focus:outline-none focus:border-purple min-h-[120px]"
            required
            />
            <div className="flex gap-4 justify-end mt-4">
            <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-[#10132E] text-white hover:bg-[#161a31]"
            >
                Cancel
            </button>
            <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 rounded-lg bg-purple text-white hover:bg-purple/80 disabled:opacity-50"
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            </div>
        </form>
        </Modal>
    );
};

export default ContactModal;