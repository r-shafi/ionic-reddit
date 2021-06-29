const mediaDomains = [
  'i.imgur.com',
  'gfycat.com',
  'redgifs.com',
  'i.redd.it',
  'v.redd.it',
  'streamable.com',
];

const imageDomains = ['i.imgur.com', 'i.redd.it'];

const videoDomains = [
  'clips.twitch.tv',
  'gfycat.com',
  'redgifs.com',
  'v.redd.it',
  'streamable.com',
];

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function isMedia(post: any): boolean {
  if (!post.post_hint || !post.domain || !mediaDomains.includes(post.domain)) {
    return false;
  }
  return true;
}
