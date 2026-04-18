const BOT_PATTERN =
  /(seo4ajax|bot|spider|pinterest|crawler|archiver|flipboard|mediapartners|facebookexternalhit|quora|whatsapp|outbrain|yahoo! slurp|embedly|developers\.google\.com\/+\/web\/snippet|vkshare|w3c_validator|tumblr|skypeuripreview|nuzzel|qwantify|bitrix link preview|XING-contenttabreceiver|Chrome-Lighthouse|mail\.ru)/i;

export const isBot = (userAgent: string): boolean =>
  BOT_PATTERN.test(userAgent);
