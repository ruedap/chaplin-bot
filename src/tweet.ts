import { env } from "process";
import Twitter from "twitter";

const stagingOptions: Twitter.AccessTokenOptions = {
  consumer_key: String(env.STAGING_TWITTER_CONSUMER_KEY),
  consumer_secret: String(env.STAGING_TWITTER_CONSUMER_SECRET),
  access_token_key: String(env.STAGING_TWITTER_ACCESS_TOKEN_KEY),
  access_token_secret: String(env.STAGING_TWITTER_ACCESS_TOKEN_SECRET),
};

const productionOptions: Twitter.AccessTokenOptions = {
  consumer_key: String(env.PRODUCTION_TWITTER_CONSUMER_KEY),
  consumer_secret: String(env.PRODUCTION_TWITTER_CONSUMER_SECRET),
  access_token_key: String(env.PRODUCTION_TWITTER_ACCESS_TOKEN_KEY),
  access_token_secret: String(env.PRODUCTION_TWITTER_ACCESS_TOKEN_SECRET),
};

export const options = (isProduction: boolean = false) =>
  isProduction ? productionOptions : stagingOptions;

export const twitter = (options: Twitter.AccessTokenOptions) =>
  new Twitter(options);

export const tweet = (twitter: Twitter, text: string) =>
  twitter.post(
    "statuses/update",
    { status: text },
    function (error, tweet, response) {
      if (!error) {
        console.log("[tweet success]:", tweet);
        console.log("[tweet text]:", text);
      } else {
        console.log("[tweet failure]:", error);
        console.log("[tweet text]:", text);
      }
    },
  );
