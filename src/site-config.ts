export const SiteConfig = {
  title: "Portfolio andy ramaroson",
  description: "Creation de site web et Seo",
  prodUrl: "https://project-ar-03.vercel.app/",
  appId: "Lemurian",
  domain: "demo.nowts.app",
  appIcon: "/images/icon.png",
  company: {
    name: "Lemurian",
    address: "60 rue François 1er, 75000 Paris", // Remove if not needed
  },
  brand: {
    primary: "#f54900", // You can adjust this to your brand color
  },
  team: {
    image: "https://melvynx.com/images/me/twitter-en.jpg",
    website: "https://melvynx.com",
    twitter: "https://twitter.com/melvyn_me",
    name: "Andy Ramaroson",
  },
  features: {
    /**
     * If enable, you need to specify the logic of upload here : src/features/images/uploadImageAction.tsx
     * You can use Vercel Blob Storage : https://vercel.com/docs/storage/vercel-blob
     * Or you can use Cloudflare R2 : https://mlv.sh/cloudflare-r2-tutorial
     * Or you can use AWS S3 : https://mlv.sh/aws-s3-tutorial
     */
    enableImageUpload: false as boolean,
    /**
     * If enable, the user will be redirected to `/orgs` when he visits the landing page at `/`
     * The logic is located in middleware.ts
     */
    enableLandingRedirection: true as boolean,
  },
};
