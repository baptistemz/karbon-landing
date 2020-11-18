import React from 'react';
import Helmet from 'react-helmet';

const getDefault = () => ({
  title: "Karbon - empreinte carbone de vos produits alimentaires",
  description: "Découvrez l'empreinte environnementale de tous vos produits alimentaires grâce à l'application mobile Karbon, disponible sur iPhone et Android. Scannez tout ce qui se mange.",
  url: "https://www.karbon.earth",
  image: "https://www.karbon.earth/meta_image.png"
});

export const getPageMetadata = metaData => {
  const { title, description, path, image } = metaData;
  const defaultData = getDefault();
  return {
    title: title || (defaultData.title || ''),
    description: description || (defaultData.description || ''),
    url: (path && `${defaultData.url}${path}`) || (defaultData.url || ''),
    image: image || (defaultData.image || ''),
  };
};

const MetaTags = ({ metaData }) => {
  const meta = getPageMetadata(metaData);
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta property="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:image:secure_url" content={meta.image} />
    </Helmet>
  );
};

export { MetaTags };
