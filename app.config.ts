export default defineAppConfig({
  alpine: {
    title: 'Storybook for Vue/Nuxt',
    description: 'The blog for nuxters and vue developers that love Storybook.',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 600,
      height: 400
    },
    header: {
      position: 'left', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'Storybook Vue', // alt of the logo
        height:400,
        width: 500
      },
      
    },
    footer: {
      credits: {
        enabled: true, // possible value are : true | false
        repository: 'https://github.com/chakAs3/snv-blog' // my blog github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'ChakirQatab',
      instagram: 'chakir.qatab',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/chakir-qatab-a8214820/'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
