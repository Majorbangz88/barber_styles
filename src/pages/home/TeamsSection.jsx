import React from 'react';
import Team1 from '../../assets/team1.png';
import Team2 from '../../assets/team2.png';
import Team3 from '../../assets/team3.png';
import TeamBg1 from '../../assets/team_bg.png';
import TeamBg2 from '../../assets/team_bg2.png';

const TeamsSection = () => {
  return (
    <div>
      <div className='flex flex-col bg-white items-center gap-30 py-18 px-6 md:px-6 lg:px-o'>
        <div className='flex flex-col gap-10 items-center'>
          <p className='font-oswald font-semibold text-2xl text-black'>
            PROFESSIONAL TEAMS
          </p>
          <p className='font-bold text-2xl md:text-5xl text-center lg:text-6xl text-black lg:w-[70%]'>
            OUR AWARD WINNING HAIR CUT EXPERTS FOR YOU
          </p>
        </div>

        <div className='flex flex-col gap-8 md:flex-wrap lg:flex-row'>
          <div className='flex flex-col items-center cursor-pointer group overflow-hidden'>
            <img
              src={Team1}
              alt='Award winning stylist'
              className='transition-transform duration-500 ease-in-out group-hover:scale-105'
            />

            <div className='relative w-fit mt-[-8.3vh] '>
              <img
                src={TeamBg1}
                alt=''
                className='absolute top-0 left-0 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0'
              />
              <img
                src={TeamBg2}
                alt=''
                className='transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100'
              />

              <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
                <p className='font-oswald text-lg text-white'>MASTER BARBER</p>
                <p className='font-oswald font-bold text-3xl text-white'>GUY C. PULIDO BKS</p>
              </div>

            </div>
          </div>

          <div className='flex flex-col items-center cursor-pointer group overflow-hidden'>
            <img
              src={Team2}
              alt='Award winning stylist'
              className='transition-transform duration-500 ease-in-out group-hover:scale-105'
            />

            <div className='relative w-fit mt-[-8.3vh]'>
              <img
                src={TeamBg1}
                alt=''
                className='absolute top-0 left-0 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0'
              />
              <img
                src={TeamBg2}
                alt=''
                className='transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100'
              />

              <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
                <p className='font-oswald text-lg text-white'>COLOR EXPERT</p>
                <p className='font-oswald font-bold text-3xl text-white'>STEVE L. NOLAN</p>
              </div>

            </div>
          </div>

          <div className='flex flex-col items-center cursor-pointer group overflow-hidden'>
            <img
              src={Team3}
              alt='Award winning stylist'
              className='transition-transform duration-500 ease-in-out group-hover:scale-105'
            />

            <div className='relative w-fit mt-[-8.3vh]'>
              <img
                src={TeamBg1}
                alt=''
                className='absolute top-0 left-0 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0'
              />
              <img
                src={TeamBg2}
                alt=''
                className='transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100'
              />

              <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
                <p className='font-oswald text-lg text-white'>MASTER BARBER</p>
                <p className='font-oswald font-bold text-3xl text-white'>EDGAR P. MATHIS</p>
              </div>

            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default TeamsSection;
