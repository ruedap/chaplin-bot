import { env } from "process";
import { TwitterClient } from 'twitter-api-client';

const stagingOptions = {
  apiKey: String(env.STAGING_TWITTER_CONSUMER_KEY),
  apiSecret: String(env.STAGING_TWITTER_CONSUMER_SECRET),
  accessToken: String(env.STAGING_TWITTER_ACCESS_TOKEN_KEY),
  accessTokenSecret: String(env.STAGING_TWITTER_ACCESS_TOKEN_SECRET),
};

const productionOptions = {
  apiKey: String(env.PRODUCTION_TWITTER_CONSUMER_KEY),
  apiSecret: String(env.PRODUCTION_TWITTER_CONSUMER_SECRET),
  accessToken: String(env.PRODUCTION_TWITTER_ACCESS_TOKEN_KEY),
  accessTokenSecret: String(env.PRODUCTION_TWITTER_ACCESS_TOKEN_SECRET),
};

export const twitter = (isProduction: boolean = false) => {
  const options = isProduction ? productionOptions : stagingOptions;

  return new TwitterClient(options);
}

export const tweet = async (twitter: TwitterClient, text: string) => {
  try {
    await twitter.tweets.statusesUpdate(
      { status: text },
    );
  } catch(error) {
    console.log(error);
    throw error;
  }
}
