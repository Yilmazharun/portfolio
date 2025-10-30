import React from 'react';
import { FaCode, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Full-Stack Cinema Booking Platform',
      company: 'TechPro Education',
      date: '2024',
      techStack: 'React.js, Next.js, JavaScript, Django REST API, CSS Modules, Bootstrap, Docker, AWS',
      github: 'https://github.com/Yilmazharun/cinema-project',
      description: [
        'Architected and developed responsive movie booking platform serving 200+ concurrent users with sub-2-second page load times using Next.js Server-Side Rendering (SSR) and automatic code splitting',
        'Implemented dynamic routing system handling 50+ movie pages with optimized SEO through Next.js getStaticProps and getServerSideProps for improved search engine visibility',
        'Integrated multiple third-party REST APIs (TMDB for movie data, custom Django backend) for real-time information on film listings, trailers, showtimes, and booking processing',
        'Built reusable component library of 15+ components (MovieCard, SearchBar, BookingForm, SeatSelection) following Atomic Design principles, reducing development time by 30%',
        'Optimized frontend performance through React lazy loading, Next.js Image component optimization, and custom hooks for efficient state management',
        'Deployed full-stack application using Docker containers on AWS ECS with CI/CD pipeline via GitHub Actions, achieving 99.5% uptime during production demo period',
        'Implemented comprehensive responsive design using CSS Grid and Flexbox, ensuring seamless user experience across desktop (1920px), tablet (768px), and mobile (375px) devices'
      ],
      metrics: [
        { value: '1.8s', label: 'Avg Load Time' },
        { value: '92', label: 'Lighthouse Score' },
        { value: '200+', label: 'Users Served' },
        { value: '99.5%', label: 'Uptime' }
      ]
    },
    {
      title: 'E-Commerce Product Dashboard',
      company: 'Personal Project',
      date: '2024',
      techStack: 'React.js, JavaScript, Chart.js, REST APIs, Bootstrap, Context API',
      github: 'https://github.com/Yilmazharun/ecommerce-dashboard',
      description: [
        'Developed admin dashboard with real-time data visualization displaying sales trends, inventory levels, and customer analytics using Chart.js library with 5+ interactive charts',
        'Implemented full CRUD operations for product management (Create, Read, Update, Delete) with form validation, error handling, and user feedback mechanisms',
        'Integrated RESTful API for fetching and updating product data with loading states, error boundaries, and optimistic UI updates for improved user experience',
        'Created responsive table components with advanced sorting, filtering, and pagination features efficiently handling 500+ product entries with virtualization',
        'Utilized React hooks (useState, useEffect, useContext, useReducer) for complex state management and side effects, maintaining clean component architecture',
        'Designed mobile-responsive interface with collapsible sidebar navigation, adaptive layouts, and touch-friendly interactions for all device sizes'
      ],
      metrics: [
        { value: '500+', label: 'Products Handled' },
        { value: '5+', label: 'Chart Types' },
        { value: '100%', label: 'Mobile Ready' },
        { value: 'CRUD', label: 'Full Operations' }
      ]
    },
    {
      title: 'Weather Forecast Application',
      company: 'Personal Project',
      date: '2024',
      techStack: 'React.js, JavaScript, OpenWeather API, CSS3, Geolocation API',
      github: 'https://github.com/Yilmazharun/weather-app',
      description: [
        'Built weather forecast application fetching real-time weather data from OpenWeather API with automatic location detection using browser Geolocation API',
        'Implemented geolocation functionality with graceful fallback to manual city search, error handling for denied permissions, and location caching',
        'Created dynamic UI with weather-themed animations, temperature unit toggle (Celsius/Fahrenheit), 5-day forecast display, and responsive weather icons',
        'Handled asynchronous API calls using async/await with comprehensive error handling for network failures, invalid locations, and API rate limiting',
        'Optimized API calls through search input debouncing (300ms delay) to reduce unnecessary requests and improve application performance and user experience',
        'Designed intuitive interface with smooth transitions, loading skeletons, and error states for enhanced user experience across all devices'
      ],
      metrics: [
        { value: '5-Day', label: 'Forecast' },
        { value: '300ms', label: 'Debounce' },
        { value: 'Real-time', label: 'Data' },
        { value: '100%', label: 'Responsive' }
      ]
    }
  ];

  return (
    <section className="section-card">
      <h2 className="section-title">
        <FaCode />
        Featured Projects
      </h2>
      
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <div className="item-header">
            <div>
              <div className="item-title">{project.title}</div>
              <div className="item-company">{project.company}</div>
            </div>
            <div className="item-date">{project.date}</div>
          </div>
          
          <div className="tech-badge mb-3">
            <strong>Tech Stack:</strong> {project.techStack}
          </div>

          {project.github && (
            <div className="project-links">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          )}
          
          <ul className="item-description">
            {project.description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>

          {project.metrics && (
            <div className="metrics-grid">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="metric-item">
                  <span className="metric-value">{metric.value}</span>
                  <span className="metric-label">{metric.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Projects;