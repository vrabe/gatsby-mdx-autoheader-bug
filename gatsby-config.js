module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: 'gatsby-remark-autolink-headers',
                        options: {
                            enableCustomId: true // Enable custom header IDs with {#id}
                        }
                    }
                ]
            }
        },
    ],
}
