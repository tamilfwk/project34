import path from "path";
import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "eweqq7h9oPPXmhNg71Z2fg",
        token: "pui7q8nWs8DyYoyDc0TIB3DslfSNsNDWjt5KCIwu3kLbKn6lS6DF9QbPO4OAg4ZQ6BhcIlGWBJe1pKUNLqhA",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: path.resolve("./src/templates/defaultPlasmicPage.tsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}

export default config
