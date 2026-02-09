const experiences = [
  {
    period: 'Jan 2022 — Present',
    role: 'Freelance Web Developer & UI/UX Designer',
    company: 'Self-Employed',
    description:
      'Designing and developing custom, performance-focused web applications and e-commerce websites for small businesses. Delivered mobile-first, accessible solutions with a strong focus on UX/UI, branding consistency, and measurable business results.',
    highlights: [
      'Increased online sales by up to 30% through UX/UI improvements and performance optimization',
      'Built fast, mobile-first websites with sub-2s load times and cross-browser compatibility',
      'Developed and deployed modern web applications from concept to production',
      'Collaborated closely with clients to translate business goals into engaging digital experiences',
    ],
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Astro',
      'Node.js',
      'Express',
      'MongoDB',
      'Firebase',
      'Supabase',
      'Tailwind CSS',
      'Bootstrap',
      'WordPress',
      'GitHub',
      'Figma',
    ],
    current: true,
  },
  {
    period: 'Jul 2016 — Jan 2022',
    role: 'Web Developer / Event Planner / Performer',
    company: 'Magic Art Studio',
    description:
      'Developed and maintained websites and digital tools for an entertainment and events business while managing branding, marketing, and client engagement. Combined technical development with creative and customer-focused problem solving.',
    highlights: [
      'Built and maintained event service websites with a focus on UX/UI and client conversion',
      'Improved online presence and client engagement through design and content optimization',
      'Managed end-to-end project workflows while balancing technical and creative responsibilities',
    ],
    technologies: [
      'JavaScript',
      'HTML',
      'CSS',
      'WordPress',
      'Figma',
      'Photoshop',
    ],
    current: true,
  },
  {
    period: 'Jul 2009 — Jul 2016',
    role: 'Independent Project Manager & Freelance Web Developer',
    company: 'Freelance',
    description:
      'Delivered freelance web development projects while managing project planning, budgeting, and client communication. Built a strong foundation in problem-solving, time management, and independent project ownership.',
    highlights: [
      'Developed and maintained multiple WordPress-based websites for small businesses',
      'Managed full project lifecycles, including requirements gathering and delivery',
      'Strengthened organizational and client-communication skills through long-term freelance work',
    ],
    technologies: ['PHP', 'WordPress', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    current: false,
  },
  {
    period: 'Feb 2008 — Jul 2009',
    role: 'Front End Software Engineer',
    company: 'Alloe Netech Agava',
    description:
      'Worked on frontend development and UI optimization for production websites, focusing on usability, SEO, and cross-device compatibility.',
    highlights: [
      'Developed responsive UI components that improved overall website usability',
      'Implemented SEO optimization strategies, increasing page rankings by up to 75%',
      'Improved cross-device performance, contributing to higher customer retention',
    ],
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Template Toolkit',
      'Adobe Photoshop',
      'Subversion',
    ],
    current: false,
  },
  {
    period: 'Aug 2006 — Jan 2008',
    role: 'Web Developer',
    company: 'Works-for-Web',
    description:
      'Developed and maintained custom CMS solutions for real estate and automotive clients. Focused on performance optimization, feature enhancements, and long-term maintainability.',
    highlights: [
      'Built custom CMS platforms tailored to client business needs',
      'Refactored and optimized codebase, reducing source size by 35%',
      'Resolved bugs and implemented new features to improve stability and usability',
    ],
    technologies: [
      'PHP',
      'HTML',
      'CSS',
      'JavaScript',
      'XML',
      'MySQL',
      'Selenium',
      'JMeter',
    ],
    current: false,
  },
]
export const Experience = () => {
  return (
    <section id='experience' className='py-32 relative outline-hidden'>
      {/* Bg glows */}
      <div className='absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2' />

      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
            Career Journey
          </span>
          <h2 className='text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground animate-fade-in animation-delay-100'>
            Experience built{' '}
            <span className='font-serif italic font-normal text-white'>
              through real projects and steady learning.
            </span>
          </h2>
          <p className='mt-6 space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
            A journey of continuous learning, from first steps in development to
            delivering production-ready solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className='relative'>
          <div className='timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]' />

          {/* Experience Items */}
          <div className='space-y-12'>
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className='relative grid md:grid-cols-2 gap-8 animate-fade-in'
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className='absolute'></div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover: border-primary/50 transition-all duration-500`}
                  >
                    <span className='text-sm text-primary font-medium'>
                      {exp.period}
                    </span>
                    <h3 className='text-xl font-semibold mt-2'>{exp.role}</h3>
                    <p className='text-muted-foreground'>{exp.company}</p>
                    <p className='text-sm text-muted-foreground mt-4'>
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className='px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
