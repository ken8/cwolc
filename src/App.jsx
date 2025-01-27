import React from 'react';

const services = [
  {
    title: 'CW News',
    description: 'Get the latest news powered by AI.',
    videoLinks: [
      {
        title: 'Unlocking the Future AI Services for Cityworks',
        url: 'https://www.youtube.com/watch?v=PMoJyRtBfYs',
      },
      {
        title: 'Agentic Asset Management System',
        url: 'https://www.youtube.com/watch?v=zbvXdy9eJNk',
      },
    ],
  },
  {
    title: 'CW Podcast',
    description: 'Listen to AI-generated podcasts.',
     videoLinks: [
      {
        title: 'AI Services Opportunities - Deep Dive',
        url: 'https://www.youtube.com/watch?v=LiXcfwAWPUs',
      },
       {
         title: 'Episode 001 - Outlook Scheduler Deep Dive',
         url: 'https://www.youtube.com/watch?v=NuohP5JXtr8',
       },
       {
         title: 'Episode 002 - Outlook Scheduler Deep Dive',
         url: 'https://www.youtube.com/watch?v=STaYyHFUQ7E',
       },
       {
         title: 'Episode 003 - Outlook Scheduler Deep Dive',
         url: 'https://www.youtube.com/watch?v=jljZmfJZBZw',
       }			 
    ],
  },
  {
    title: 'CW Chatbot',
    description: 'Interact with our AI chatbot for assistance.',
    videoLinks: [
      {
        title: 'CW Assistant Chatbot',
        url: 'https://tinyurl.com/CWAssistant',
      },
    ],
  },
  {
    title: 'AI Assistant',
    description: 'Your personal AI assistant for daily tasks.',
  },
  {
    title: 'AI Automation',
    description: 'Automate your workflows with AI.',
  },
    {
    title: 'AI Interface',
    description: 'User interface design powered by AI.',
  },
  {
    title: 'AI Agent',
    description: 'AI agents for various tasks.',
     videoLinks: [
      {
         title: 'Building Effective Agents',
         url: 'https://www.anthropic.com/research/building-effective-agents',
      },
       {
         title: 'Agents',
         url: 'https://www.kaggle.com/whitepaper-agents',
       },
     ],
  },
  {
    title: 'AI Tasker',
    description: 'AI task management and scheduling.',
  },
  {
    title: 'CW Service Request',
    description: 'AI-powered service request handling.',
     videoLinks: [
      {
        title: 'SR Reporter',
        url: 'https://srreporter.netlify.app/',
      },
    ],
  },
  {
    title: 'AI Trainer',
    description: 'Train your AI models with our tools.',
     videoLinks: [
      {
        title: 'AI Studio',
        url: 'https://aistudio.google.com/live',
      },
    ],
  },
  {
    title: 'AI Game',
    description: 'Play fun AI-powered games.',
  },
  {
    title: 'AI Quiz',
    description: 'Test your knowledge with AI quizzes.',
    videoLinks: [
      {
        title: 'Cityworks Quiz',
        url: 'https://cityworksquiz.netlify.app',
      },
    ],
  },
    {
    title: 'AI Support',
    description: 'Get AI-powered support for your needs.',
  },
  {
    title: 'AI Project Ideas',
    description: 'Discover new AI project ideas.',
  },
  {
    title: 'AI Research',
    description: 'AI tools for research and analysis.',
     videoLinks: [
      {
        title: 'AI Research Aloud',
        url: 'https://aialoud.com',
      },
    ],
  },
    {
    title: 'AMS Best Practices',
    description: 'Best practices for Asset Management System.',
     videoLinks: [
      {
        title: 'Asset Management Competency Framework',
        url: 'https://cnam.ca/wp-content/uploads/2021/11/CNAM_AM-Competency-Framework_2020_WEB.pdf',
      },
    ],
  },
  {
    title: 'CW Landing Page',
    description: 'Request to create a landing page for a CWOLC site.',
     videoLinks: [
      {
        title: 'CWOLC Launch Counter',
        url: 'https://cwolclaunchcounter.netlify.app/',
      },
    ],
  },
   {
    title: 'CW Tools',
    description: 'Various tools for CWOLC.',
     videoLinks: [
      {
        title: 'CWOLC Request',
        url: 'https://cwolcrequest.netlify.app',
      },
       {
        title: 'CWOLC Monitoring',
        url: 'https://websitestatus.netlify.app',
      },
    ],
  },
];

function App() {
  return (
    <div className="app-container">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          {service.videoLinks &&
            service.videoLinks.map((video, videoIndex) => (
              <a
                key={videoIndex}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {video.title}
              </a>
            ))}
        </div>
      ))}
    </div>
  );
}

export default App;
