import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { API_URL } from '@/lib/utils';
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});
type ContactFormData = z.infer<typeof contactSchema>;
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });
  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch(`${API_URL}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        throw new Error(payload?.error || 'Failed to send message');
      }

      toast.success("Message sent successfully! I'll get back to you soon.");
      reset();
    } catch (err: any) {
      toast.error(err?.message || 'Something went wrong. Please try again later.');
    }
  };
  return <section id="contact" className="py-20 relative scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's create something amazing together
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="space-y-6">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold">parvezahamed700@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary/10 rounded-xl">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold">+91 8248518232</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold">Salem, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <p className="text-muted-foreground mb-4">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Available for freelance
                </span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                  Open to opportunities
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-6 rounded-2xl space-y-4">
              <div>
                <Input placeholder="Your Name" {...register('name')} className="h-12" />
                {errors.name && <p className="text-destructive text-sm mt-1">
                    {errors.name.message}
                  </p>}
              </div>

              <div>
                <Input type="email" placeholder="Your Email" {...register('email')} className="h-12" />
                {errors.email && <p className="text-destructive text-sm mt-1">
                    {errors.email.message}
                  </p>}
              </div>

              <div>
                <Textarea placeholder="Your Message" {...register('message')} className="min-h-[150px] resize-none" />
                {errors.message && <p className="text-destructive text-sm mt-1">
                    {errors.message.message}
                  </p>}
              </div>

              <Button type="submit" className="w-full gradient-bg hover:opacity-90 text-white font-semibold h-12">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
}