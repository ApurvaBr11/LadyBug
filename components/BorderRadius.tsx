// components/ImageWithSVG.js
import Image from 'next/image';

const ImageWithSVG = () => {
  return (
    <div className='h-screen container'>
      {/* <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 590 307" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M243 0C231.954 0 223 8.9543 223 20V87C223 98.0457 214.046 107 203 107H20C8.95431 107 0 115.954 0 127V287C0 298.046 8.9543 307 20 307H295C306.046 307 315 298.046 315 287V227C315 215.954 323.954 207 335 207H570C581.046 207 590 198.046 590 187V20C590 8.9543 581.046 0 570 0H243Z"
          fill="#D9D9D9"
        />
      </svg> */}
      <div className='imagec h-60'>
        <img
          src="https://images.unsplash.com/photo-1682685797365-41f45b562c0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Your Image Alt Text"
          className='image border '
        />
      </div>
    </div>
  );
};

export default ImageWithSVG;
