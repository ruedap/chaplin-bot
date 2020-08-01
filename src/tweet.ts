import Twitter from "twitter";

const twitter = () => {
  return new Twitter({
    consumer_key: String(process.env.TWITTER_CONSUMER_KEY),
    consumer_secret: String(process.env.TWITTER_CONSUMER_SECRET),
    access_token_key: String(process.env.TWITTER_ACCESS_TOKEN_KEY),
    access_token_secret: String(process.env.TWITTER_ACCESS_TOKEN_SECRET),
  });
};

export const tweet = (text: string) => {
  const t = twitter();
  return t.post(
    "statuses/update",
    { status: text },
    function (error, tweet, response) {
      if (!error) {
        console.log("[tweet success]:", tweet);
      } else {
        console.log("[tweet failure]:", error);
      }
    },
  );
};
