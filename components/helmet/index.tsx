import Head from 'next/head';

export interface MetaData {
  title: string;
  description: string;
  image: string;
  url: string;
}

const Helmet = ({
  data: { title, description, image, url },
  children,
}: {
  data: MetaData;
  children?: React.ReactNode;
}) => (
  <Head>
    <meta charSet="utf-8" />
    <meta property="og:type" content="website" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Nobul" />
    <meta name="twitter:site" content="@nobul" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:locale" content="en_US" />
    <link rel="canonical" href={url} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta property="og:image:secure_url" content={image} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    {children}
  </Head>
);

export default Helmet;
