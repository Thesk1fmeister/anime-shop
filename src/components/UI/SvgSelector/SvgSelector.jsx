import React from 'react'
const SvgSelector = ({ id }) => {
  switch (id) {
    case 'delete':
      return (
        <svg width='18px' height='18px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M10 11V17' stroke='#fff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14 11V17' stroke='#fff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4 7H20' stroke='#fff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path
            d='M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z'
            stroke='#fff'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z'
            stroke='#fff'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    case 'shopping':
      return (
        <svg width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2ZM18 13H7.78078L6.28078 7H20.1211C20.6742 7 21.0063 7.40675 20.9794 7.81078C20.9034 8.9522 20.6906 10.3318 20.1836 11.3949C19.6922 12.4251 19.0201 13 18 13ZM18 20.9938C17.4511 20.9938 17.0062 20.5489 17.0062 20C17.0062 19.4511 17.4511 19.0062 18 19.0062C18.5489 19.0062 18.9938 19.4511 18.9938 20C18.9938 20.5489 18.5489 20.9938 18 20.9938ZM7.00617 20C7.00617 20.5489 7.45112 20.9938 8 20.9938C8.54888 20.9938 8.99383 20.5489 8.99383 20C8.99383 19.4511 8.54888 19.0062 8 19.0062C7.45112 19.0062 7.00617 19.4511 7.00617 20Z'
            fill='#fff'
          />
        </svg>
      )
    case 'arrow':
      return (
        <svg width='800px' height='800px' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg'>
          <path d='M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z' fill='#000000' />
        </svg>
      )
    case 'star':
      return (
        <svg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z'
            stroke='#000000'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    case 'loader':
      return (
        <svg fill='#fff' width='800px' height='800px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='12' cy='20' r='2' />
          <circle cx='12' cy='4' r='2' />
          <circle cx='6.343' cy='17.657' r='2' />
          <circle cx='17.657' cy='6.343' r='2' />
          <circle cx='4' cy='12' r='2.001' />
          <circle cx='20' cy='12' r='2' />
          <circle cx='6.343' cy='6.344' r='2' />
          <circle cx='17.657' cy='17.658' r='2' />
        </svg>
      )

    default:
      return <div></div>
  }
}
export default SvgSelector
