import meta from './meta';

export default {
  name: `profile`,
  type: `document`,
  title: `Profile`,
  fields: [
    meta,
    {
      name: `name`,
      title: `Name`,
      type: `string`,
    },
    {
      name: `title`,
      title: `Title`,
      type: `string`,
    },
    {
      name: `image`,
      title: `Image`,
      type: `image`,
    },
    {
      name: `intro`,
      title: `Intro`,
      type: `string`,
    },
    {
      name: `links`,
      title: `Links`,
      type: `array`,
      of: [
        {
          type: `object`,
          fields: [
            {
              name: `type`,
              title: `Type`,
              type: `string`,
            },
            {
              name: `url`,
              title: `URL`,
              type: `url`,
            },
          ],
        },
      ],
    },
  ],
};
