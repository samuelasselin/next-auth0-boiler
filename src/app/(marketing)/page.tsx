'use client';

import { Seo } from 'src/components/seo';
import {HomeHero} from "../../sections/home/home-hero";

const Page = () => {

  return (
    <>
      <Seo />
      <main>
        <HomeHero />
      </main>
    </>
  );
};

export default Page;
