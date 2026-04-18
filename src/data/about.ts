export type SocialLinkType = `linkedin` | `github` | `instagram`;

export type SocialLink = {
  type: SocialLinkType;
  href: string;
};

export type Certification = {
  name: string;
  issuer: string;
  year: number;
  category: `tech` | `other`;
};

export type Role = {
  title: string;
  org: string;
};

export type AboutData = {
  name: string;
  title: string;
  company: string;
  location: string;
  image: string;
  intro: string;
  skills: ReadonlyArray<string>;
  certifications: ReadonlyArray<Certification>;
  roles: ReadonlyArray<Role>;
  links: ReadonlyArray<SocialLink>;
};

export const about: AboutData = {
  name: `Oleksii Kachan`,
  title: `Full Stack Software Engineer`,
  company: `Flowspace`,
  location: `Toronto, Canada`,
  image: `https://res.cloudinary.com/oleksiikachan/image/upload/v1674426534/portfolio/images/main-photo.jpg`,
  intro: `Hi, I'm **Oleksii Kachan** — a full stack software engineer based in Toronto.\n\nI currently work at **Flowspace**, building scalable tools for logistics and warehouse management. My expertise spans **TypeScript**, **React**, **SQL**, and **Node.js**, with experience across both B2C and enterprise products.\n\nBeyond engineering, I teach **JavaScript** at **Humber College** — helping the next generation of developers sharpen their skills. Outside work, I'm VP of Technical at **WushuCanada** and VP of Competition at **WushuOntario**, where I bring the same systems-thinking approach to sports administration.`,
  skills: [
    `TypeScript`,
    `JavaScript`,
    `React`,
    `Next.js`,
    `Node.js`,
    `SQL`,
    `Python`,
    `GraphQL`,
  ],
  certifications: [
    { name: `Apollo Graph Developer – Associate`, issuer: `Apollo GraphQL`, year: 2025, category: `tech` },
    { name: `Google Advanced Data Analytics Certificate`, issuer: `Google`, year: 2025, category: `tech` },
    { name: `Meta Front-End Developer Certificate`, issuer: `Meta`, year: 2024, category: `tech` },
    { name: `Finance & Quantitative Modeling`, issuer: `University of Pennsylvania`, year: 2023, category: `tech` },
    { name: `Google Data Analytics Certificate`, issuer: `Google`, year: 2023, category: `tech` },
    { name: `PADI Open Water Diver`, issuer: `PADI`, year: 2022, category: `other` },
    { name: `WADA Coaching Certificate`, issuer: `WADA`, year: 2022, category: `other` },
  ],
  roles: [
    { title: `Part-time Faculty`, org: `Humber College` },
    { title: `VP of Technical`, org: `WushuCanada` },
    { title: `VP of Competition`, org: `WushuOntario` },
  ],
  links: [
    { type: `linkedin`, href: `https://www.linkedin.com/in/oleksiikachan/` },
    { type: `github`, href: `https://github.com/OleksiiKachan` },
    { type: `instagram`, href: `https://www.instagram.com/oleksii.kachan/` },
  ],
};
