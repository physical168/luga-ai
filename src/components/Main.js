import React from 'react';
import mainPic from '../assets/mainpic.jpeg';
import '../index.css';

const Main = () => {
  return (
    <main className="main">
      <div className="flex md-flex-row items-center md-col-span-2 mb-8">
        <div className="w-full md-w-1/2">
          <h1 className="text-5xl mb-4">We research multimodal models for Arabic users</h1>
          <p className="text-gray-700 mb-4">“The mission of Luga AI is in bringing the newest technologies in the AI industry to the Middle East, something I believe to be extremely important.”</p>
          <p className="text-gray-500 mb-8">Hamid, CTO</p>
          <button className="border-gray-700 px-4 py-2 rounded-xl">Coming Soon</button>
          <p className="text-sm text-gray-500 mt-2">Contact us at <a href="mailto:info@luga.app" className="text-blue-500">info@luga.app</a></p>
        </div>
        <div className="w-full md-w-1/2 mt-8 md-mt-0">
          <img src={mainPic} alt="People standing in front of large screens displaying data" className="w-full rounded-xl shadow-lg" />
        </div>
      </div>
    </main>
  );
}

export default Main;
