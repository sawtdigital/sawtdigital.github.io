import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    toast.success("Message sent successfully! We'll get back to you soon.");
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Let's work together</h2>
            <p className="text-xl text-gray-600 mb-12">
              Have a project in mind? We'd love to hear about it. Send us a message and we'll start a conversation.
            </p>

            <div className="space-y-8">
              <a
                href="mailto:hello@sawt.com.au"
                className="flex items-center gap-4 p-2 rounded-lg transition-colors  bg-gray-50 hover:bg-gray-100"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <Mail className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <p className="text-black text-xl">hello@sawt.com.au</p>
                </div>
              </a>

              {/* <a
                href="tel:+61403121209"
                className="flex items-center gap-4 p-2 rounded-lg transition-colors hover:bg-sawt-secondary/40"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <Phone className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <p className="text-black text-xl">+61 403 121 209</p>
                </div>
              </a> */}
            </div>
          </div>

          {/* Form */}
          {/* <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Send a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:border-black focus:ring-0 outline-none transition-colors bg-gray-50`}
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:border-black focus:ring-0 outline-none transition-colors bg-gray-50`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:border-black focus:ring-0 outline-none transition-colors bg-gray-50 resize-none`}
                  {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="w-5 h-5" />}
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
}
