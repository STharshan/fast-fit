import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Will",
      role: "Customer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      title: "Outstanding service!",
      text: "I've used Fast-Fit several times over the years, and they've always been excellent. The team is quick, professional, and really helpful every time I've been in. Highly recommend!",
      rating: 5,
      bgImage:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop",
    },
    {
      name: "Martin Hales",
      role: "Customer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      title: "Amazing Service",
      text: "Superb service by Darren and the FastFit team. Friendly and helpful. Double puncture on both front Continentals !!. Two new tyres sourced and fitted excellently . This is the second or third time I've used FastFit and couldn't recommend them more highly.",
      rating: 5,
      bgImage:
        "https://images.unsplash.com/photo-1603481546579-96b9cb4e1e7a?w=800&h=600&fit=crop",
    },
    {
      name: "Jayne Holland",
      role: "Customer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      title: "Highly professional team",
      text: "Thankyou so much to the team at Fast Fit who were brilliant today 12/9 sorting out my rather damaged tyre. Really friendly and explained everything before going ahead with the work. Especially the man on reception. Brilliant service thankyou",
      rating: 5,
      bgImage:
        "https://images.unsplash.com/photo-1619642767438-6c62bfc6a9cf?w=800&h=600&fit=crop",
    },
        {
      name: "Sophie Ball",
      role: "Customer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      title: "Highly professional team",
      text: "    Discovered I had a flat tyre and damaged wheel at lunch time on Sunday and by 10am on Monday it was all sorted, thanks to Fast-Fit, even more impressive given that they were closed Sunday afternoon! An excellent and prompt service, they couldn’t have been more helpful and accommodating, I would highly recommend!",
      rating: 5,
      bgImage:
        "https://images.unsplash.com/photo-1619642767438-6c62bfc6a9cf?w=800&h=600&fit=crop",
    },
            {
      name: "Samantha Loveday-Hope",
      role: "Customer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      title: "Amazing Service",
      text: "Amazing Service. Needed two new tyres and realignment. The work was carried out quickly at good price and the staff team were super friendly. I would highly recommend them!",
      rating: 5,
      bgImage:
        "https://images.unsplash.com/photo-1619642767438-6c62bfc6a9cf?w=800&h=600&fit=crop",
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const testimonial = testimonials[current];

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-red-500 uppercase font-semibold text-sm tracking-widest mb-2">
          Testimonials
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          What <span className="text-red-500">Customers</span> Say
        </h2>
      </div>

      {/* Testimonial Layout */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 transition-all duration-500 ease-in-out">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop"
            alt={testimonial.name}
            className="w-full h-80 sm:h-96 lg:h-[500px] object-cover grayscale"
          />
        </div>

        {/* Right Side - Testimonial Card */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative bg-white text-gray-900 rounded-2xl shadow-2xl p-6 sm:p-10">
            {/* Quote mark inside card */}
            <div className="absolute top-4 right-4 text-red-500/30 text-6xl font-serif select-none">
              &rdquo;
            </div>

            {/* Stars */}
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">
              {testimonial.title}
            </h3>

            {/* Text */}
            <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.text}</p>

            {/* Profile */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="p-3  rounded-full ring-2 ring-red-500/30">
              <img
                src="/tab.png"
                alt={testimonial.name}
                className="w-10 h-10  object-cover  "
              />
                </div>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>

          {/* Bottom Controls (Arrows + Dots) */}
          <div className="mt-10 flex flex-col items-center">
            {/* Arrows */}
            <div className="flex justify-center items-center gap-4 mb-5">
              <button
                onClick={handlePrev}
                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={handleNext}
                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? "bg-red-500 w-8"
                      : "bg-zinc-700 w-2 hover:bg-zinc-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
