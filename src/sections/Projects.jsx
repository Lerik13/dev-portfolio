import { AnimatedBorderButton } from '@/components/AnimatedBorderButton'
import { ArrowUpRight, Github } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    title: 'Catalog of Bakery Products',
    image: '/projects/sweets-alla.jpg',
    link_demo: 'https://sweets-by-alla.netlify.app/',
    link_code: 'https://github.com/Lerik13/sweets-alla',
    tags: ['Astro', 'Supabase', 'JavaScript', 'Tailwind CSS', 'Figma'],
    description:
      'A multi-page web application with a mobile-first responsive design for showcasing delicious homemade treats. The website is statically generated (SSG) for optimal performance and delivers a seamless browsing experience.',
  },
  {
    title: 'Portfolio Photographer - Photo Gallery',
    image: '/projects/photograph-tanya.jpg',
    link_demo: 'https://ta-photograph.netlify.app',
    link_code: 'https://github.com/Lerik13/photograph-portfolio-tanya',
    tags: ['Astro', 'HTML5', 'JavaScript', 'Tailwind CSS', 'JSON', 'Figma'],
    description:
      'Multi-page website with responsive web design (mobile-first approach) for presenting the work of photographer. Request from the client was to show all useful information on the main page with the opportunity to observe different photo session options on additional pages.',
  },
  {
    title: 'Magic Art Studio - Event Agency',
    image: '/projects/magic-artstudio.jpg',
    tags: [
      'HTML5',
      'CSS3',
      'SASS',
      'Gulp',
      'JavaScript',
      'jQuery',
      'Slick.js',
      'Photoshop',
      'Figma',
    ],
    link_demo: 'https://magic-artstudio.com',
    link_code: 'https://github.com/Lerik13/magic-artstudio',
    description:
      'Multi-page website for Event Agency. The main idea was to create vivid and attractive web-product, to give clients the possibility to skim through all of the significant information, from the main page and to make an order.',
  },
  {
    title: 'Piano Teacher Website',
    image: '/projects/victoria-piano.jpg',
    tags: ['Vite', 'JavaScript', 'HTML5', 'CSS3', 'JSON', 'Figma'],
    link_demo: 'https://victoria-piano.netlify.app',
    link_code: 'https://github.com/Lerik13/piano-teacher/tree/victoria',
    description:
      'A responsive website for a piano teacher, featuring her teaching methods, an "About" section, lesson options for students, and a user-friendly Contact Form. The site also includes a light/dark mode feature and a multilingual option for a more personalized and accessible experience.',
  },
  {
    title: 'Mountain Villa - Small Hotel',
    image: '/projects/mountain-villa.jpg',
    tags: [
      'React',
      'Supabase',
      'Styled Components',
      'Vite',
      'React Query',
      'Recharts',
      'React Hook Form',
    ],
    link_demo: 'https://mountain-villa.netlify.app',
    link_code: 'https://github.com/Lerik13/react-hotel-app',
    description:
      'Mountain Villa is a full-stack application that simplifies hotel operations by offering tools for managing reservations, guest information, and user authorization. With an intuitive interface, it streamlines booking, guest record maintenance, and staff access management.',
  },
  {
    title: 'Online Shopping application - Gift Shop',
    image: '/projects/gift-shop.jpg',
    tags: [
      'MongoDB',
      'React.js',
      'JavaScript',
      'Node.js',
      'Express.js',
      'Bootstrap',
    ],
    link_demo: 'https://gift-shop-mern.onrender.com',
    link_code: 'https://github.com/Lerik13/myshop-mern',
    description:
      'Client-Server app for selling products online by Paypal. Authorized customer can buy a product (add the product to the Shopping Cart) if the product is not out of stock and also leave one review with star-rating.',
  },
  {
    title: 'Maria Bubble Show - Entertainment Service',
    image: '/projects/maria-bubble_show.jpg',
    tags: ['Astro', 'HTML5', 'JavaScript', 'Tailwind CSS', 'JSON', 'Figma'],
    link_demo: 'https://maria-bubble-show.netlify.app',
    link_code: 'https://github.com/Lerik13/masha-bubble-show',
    description:
      'Maria`s Bubble Show is a responsive multi-page website that highlights the fun and captivating bubble entertainment service. It features sections like Client Reviews, FAQ, booking options, a photo gallery, and a contact form, making it easy for users to explore the service and book their own bubble show.',
  },
]

export const Projects = () => {
  // By default, show only 4 projects
  const [showAll, setShowAll] = useState(false)

  const displayedProjects = showAll ? projects : projects.slice(0, 4)

  return (
    <section id='projects' className='py-32 relative outline-hidden'>
      {/* Bg glows */}
      <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
      <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl' />
      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='text-center mx-auto mb-16 max-w-3xl'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
            My Projects
          </span>
          <h2 className='text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground animate-fade-in animation-delay-100'>
            Work that
            <span className='font-serif italic font-normal text-white'>
              {' '}
              reflects my experience in modern web development.
            </span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            A collection of projects built with modern tools, thoughtful design,
            and attention to detail.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {displayedProjects.map((project, idx) => (
            <div
              key={idx}
              className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className='relative overflow-hidden aspect-video'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60' />
                {/* Overlay Links */}
                <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <a
                    href={project.link_demo}
                    className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'
                  >
                    <ArrowUpRight className='w-5 h-5' />
                  </a>
                  <a
                    href={project.link_code}
                    className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'
                  >
                    <Github className='w-5 h-5' />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className='p-6 space-y-4'>
                <div className='flex items-start justify-between'>
                  <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className='w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all'
                  />
                </div>
                <p className='text-muted-foreground text-sm'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className='px-4 py-1.5 rounded-full bg-surface text-xs border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className='text-center mt-12 animate-fade-in animation-delay-500'>
          <AnimatedBorderButton onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Show All'}
            <ArrowUpRight className='w-5 h-5' />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  )
}
