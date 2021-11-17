module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'e721439b67f84fde8e9a291fca4d6796',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  //rootNotionSpaceId: '25900039-5d85-4396-968b-a28f366f1763',
    rootNotionSpaceId: null,
  // basic site info (required)
  name: 'temporary record',
  domain: 'https://flat-hovercraft-661.notion.site/e721439b67f84fde8e9a291fca4d6796',
  author: 'Delicious Raccoon',

  // open graph metadata (optional)
  description: '一份购物指南',
  socialImageTitle: 'Delicious Raccoon',
  socialImageSubtitle: 'Hello Shit!',

  // social usernames (optional)
  twitter: 'transitive_bs',
  github: 'transitive-bullshit',
  linkedin: 'fisch2',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
