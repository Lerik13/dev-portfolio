import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Valeria helped bring my bakery brand to life — from logo design to a fully functional website. She was professional, creative, and easy to work with. The final result exceeded my expectations.',
    author: 'Alla Tkachenko',
    role: 'Owner of Sweets Alla Bakery',
    avatar: '/clients/alla.jpg',
  },
  {
    quote:
      'As a photographer, showcasing my work properly is everything. Valeria created a logo and a multi-page website with well-organized galleries that make it easy for clients to explore my different types of photo shoots. She was attentive, creative, and delivered exactly what I needed.',
    author: 'Tatiana Alita',
    role: 'Photographer',
    avatar: '/clients/tatiana.jpg',
  },
  {
    quote:
      'Working with Valeria was a great experience. She listened carefully to all my wishes and turned them into a modern, eye-catching website for my entertainment business. All packages and extra services are presented clearly, making it easy for customers to choose what they need. I’ve received great feedback since launching the site.',
    author: 'Maria Gramens',
    role: 'Owner of Marias Magic Bubble Show LLC',
    avatar: '/clients/maria.jpg',
  },
  {
    quote:
      'Valeria created a beautiful and easy-to-use website for my piano teaching business. She carefully listened to my needs and designed a site that clearly presents my lessons, experience, and contact information. The website looks professional, welcoming, and reflects my teaching style perfectly. I’ve received great feedback from students and parents.',
    author: 'Victoria Kalashnikov',
    role: 'Self-employed Piano teacher',
    avatar: '/clients/victoria.jpg',
  },
]

export const Testimonials = () => {
  return (
    <section id='testimonials' className='py-32 relative outline-hidden'>
      <div className='absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2' />

      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
            What People Say
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            Words from{' '}
            <span className='font-serif italic font-normal text-white'>
              wonderful clients.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className='max-w-4xl mx-auto'>
          <div className='relative'>
            {/* Main Testimonial */}
            <div className='glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animate-delay-200'>
              <div className='absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center'>
                <Quote className='w-6 h-6 text-primary-foreground' />
              </div>

              <blockquote className='text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4'>
                "{testimonials[0].quote}"
              </blockquote>

              <div className='flex items-center gap-4'>
                <img
                  src={testimonials[0].avatar}
                  alt={testimonials.author}
                  className='w-14 h-14 rounded-full object-cover ring-2 ring-primary/20'
                />
                <div>
                  <div className='font-semibold'>{testimonials[0].author}</div>
                  <div className='text-sm text-muted-foreground'>
                    {testimonials[0].role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
