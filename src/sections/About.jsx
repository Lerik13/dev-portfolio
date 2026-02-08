import { Code2, Layout, Puzzle, Rocket, Users } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Frontend Craftsmanship',
    description:
      'Building clean, maintainable frontend code with a strong focus on structure and scalability.',
  },
  {
    icon: Layout,
    title: 'Modern UI Development',
    description:
      'Creating responsive, accessible interfaces using React, Next.js, Astro, and Tailwind CSS.',
  },
  {
    icon: Rocket,
    title: 'Performance & SEO',
    description:
      'Optimizing applications for speed, SEO, and real-world user experience.',
  },
  {
    icon: Puzzle,
    title: 'Problem Solving',
    description:
      'Turning complex requirements into intuitive, reliable web solutions.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'Working closely with designers, product teams, and stakeholders to deliver quality results.',
  },
]

export const About = () => {
  return (
    <section id='about' className='py-32 relative outline-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Column */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
                About Me
              </span>
            </div>

            <h2 className='text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground animate-fade-in animation-delay-100'>
              Crafting the web,
              <span className='font-serif italic font-normal text-white'>
                {' '}
                one component at a time
              </span>
            </h2>

            <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
              <p>
                I'm Valeria, a passionate web developer with over five years of
                hands-on experience through focused study and freelance work. I
                enjoy creating visually engaging, well-structured web
                experiences that balance clean code, performance, and usability.
              </p>

              <p>
                Over the past few years, I've worked on a wide range of
                projects, strengthening my skills in modern web development. My
                approach is always centered on understanding user and business
                needs, building intuitive interfaces, and delivering reliable,
                maintainable solutions.
              </p>

              <p>
                Alongside my work in tech, I founded and run an event agency for
                kids — an experience that sharpened my understanding of
                real-world customers, local businesses, and what it takes to
                succeed online. This unique background allows me to blend
                creativity with technical precision and build digital products
                that truly connect with people.
              </p>
            </div>

            <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
              <p className='text-lg font-medium italic text-foreground'>
                "My mission is to turn ideas into thoughtful digital experiences
                that solve real problems and bring value to both users and
                businesses."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
