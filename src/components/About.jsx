import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi I am Anurag a self learned Full stack developer , I have completed my B.Teceh in computer science  from Jc Bose University Of Science And Technology 
          i have experiance in web development and i have developed a social media application backend using Node js,Expres js and Mongo db it consists user login and sing up functionality authorization for security purpose.
          ,i have worked as a security Analyst also and use to do Bug hunting 
        </p>
      </div>
    </div>
  );
};

export default About;
