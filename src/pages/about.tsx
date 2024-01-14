import AboutScene from 'scenes/about';

import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../../sanity/env';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

const builder = imageUrlBuilder(client);

const About = AboutScene;

export const getStaticProps = async () => {
  const profileData = await client.fetch(`*[_type == "profile"]`);

  const data = profileData?.[0] || {
    meta: {
      title: `Oleksii Kachan | Software Developer`,
      description: `My name is Oleksii Kachan and I'm a software developer`,
      image: `https://res.cloudinary.com/oleksiikachan/image/upload/v1546142703/portfolio/images/logo/logo_portrait_dark.svg`,
      url: `https://oleksiikachan.com/about`,
    },
    name: `Oleksii Kachan Dude`,
    title: `Full Stack Software Engineer`,
    image: `https://res.cloudinary.com/oleksiikachan/image/upload/v1674426534/portfolio/images/main-photo.jpg`,
    intro: `Hello there! Welcome to my space...\n\nMy name is **Oleksii Kachan** and I'm a software developer with experience in both **B2C** and **B2B** technologies. My expertise lies in **Javascript**, **SQL**, and a little bit of **Python**. I'm deeply involved in both the product and engineering sides of web development; all the ways that users interact with your company, your product and your brand is my speciality.\n\nAdditionally, I **teach** Javascript at **Humber College** in Toronto, ON, where I have been helping the next generation of developers hone their skills.\n\nWith an eye on the future, I am constantly learning and striving to bring fresh, new approaches to all my projects.`,
    links: [
      {
        type: `linkedin`,
        href: `https://www.linkedin.com/in/oleksiikachan/`,
      },
      { type: `github`, href: `https://github.com/OleksiiKachan` },
      {
        type: `instagram`,
        href: `https://www.instagram.com/oleksii.kachan/`,
      },
    ],
  };

  data.intro = data.intro.replaceAll(`<br/>`, `\n\n`);
  data.meta.image =
    typeof data.meta.image !== `string`
      ? builder.image(data.meta.image).url()
      : data.meta.image;

  data.image =
    typeof data.image !== `string`
      ? builder.image(data.image).url()
      : data.image;

  return {
    props: {
      data,
    },
  };
};

export default About;
