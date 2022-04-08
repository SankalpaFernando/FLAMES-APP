import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import styles from '../styles/Home.module.css'
import { KeyboardEventHandler, useEffect, useState } from 'react';
import { getFLAMES } from '../util/FLAMES';
import { useForm, ValidationError } from '@formspree/react';


const Home: NextPage = () => {

  const [names, setNames] = useState({firstName:"",secondName:""});
  const [message, setMessage] = useState("");
    const [state, handleSubmit] = useForm('mgedkqww');

  const onSubmit = () => {
    const { firstName, secondName } = names;
    handleSubmit(names);
    setMessage(getFLAMES(firstName,secondName));
  }

  return (
    <>
      <Head>
        <title>FLAMES</title>
        <meta
          name="description"
          content="Online Tool to Play FLAMES a game that uses to find out the relationship between two people by their names"
        />
        <meta property="og:title" content="FLAMES" />
        <meta
          property="og:description"
          content="Online Tool to Play FLAMES a game that uses to find out the relationship between two people by their names"
        />
        <meta
          property="og:url"
          content="https://flames.sankalpafernando.com/"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/SankalpaFernando/fileHosting/main/Screenshot%20from%202022-04-09%2001-51-49.png"
        />
        <meta property="og:type" content="website" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💕</text></svg>"
        />
      </Head>
    <div className={styles.container}>
      <div
        className="w-full flex justify-center"
        style={{ display: 'inline-block' }}
      >
        <div className="p-10 pt-5 pb-15 md:w-3/4 md:mx-auto lg:w-1/2 xl:w-1/3 w-full bg-white rounded-xl flex  flex-col justify-center shadow mb-4">
          <h1 className={styles.header} style={{ fontSize: '3.5rem' }}>
            FLAMES
          </h1>
          <input
            name=""
            className="mb-5 mt-10 font-fancy w-full justify-center mx-auto p-3 focus:border-red-50 rounded border-2 outline-none"
            autoComplete="off"
            placeholder="What is Your Name"
            onChange={(e) => {
              names.firstName = e.target.value;
              setNames({ ...names });
            }}
            required
          />
          <input
            name=""
            className="mb-5 p-3 font-fancy w-full mx-auto focus:border-red-50 rounded border-2 outline-none"
            autoComplete="off"
            placeholder="What is Your Partner's Name"
            onChange={(e) => {
              names.secondName = e.target.value;
              setNames({ ...names });
            }}
            required
          />
          <button
            onClick={onSubmit}
            className="bg-red-50 mx-auto mt-10 hover:bg-red-60 text-white font-bold p-4 rounded w-50"
          >
            <span>Say About My Relationship</span>
          </button>
          <div className="my-10">
            <p
              className="font-fancy text-xl text-center"
              style={{ fontSize: '1.3rem' }}
              dangerouslySetInnerHTML={{ __html: message }}
            ></p>
          </div>
        </div>
      </div>
      <footer>
        <div></div>
        <p className="text-center mt-4 font-semibold font-fancy">
          Made with ❤️ By Sankalpa Fernando
        </p>
      </footer>
      </div>
      </>
  );
}

export default Home
