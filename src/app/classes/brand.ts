export interface Brand {
      name?: string,
      avatarUri?: string,
      bio?: string,
      socials: {
        websiteUri?: string,
        discordUri?: string,
        githubUri?: string,
        twitterUri?: string,
        facebookUri?: string,
        telegramUri?: string,
      },
      reputation?: number,
}
