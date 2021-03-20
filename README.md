# Gatsby mdx test project to reproduce a bug in TOC creation

This demo uses `gatsby-remark-autolink-headers` with `enableCustomId: true` to
create headers with custom link targets:

    # Header {#header}
    ## SubHeader {#subheader}

The result is that the html code is produced as it should be: `{#header}` is removed,
the `id` is applied to the `<h1>`:

    <h1 id="header" style="position: relative;">
        <a href="#header" aria-label="header permalink" class="anchor before"></a>
        Header
    </h1>

BUT: The TOC is not using new IDs and headers:

```graphql
query MyQuery {
  allMdx {
    nodes {
      tableOfContents
    }
  }
}
```


```json
{
  "data": {
    "allMdx": {
      "nodes": [
        {
          "tableOfContents": {
            "items": [
              {
                "url": "#header-header",
                "title": "Header {#header}",
                "items": [
                  {
                    "url": "#subheader-subheader",
                    "title": "SubHeader {#subheader}"
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  },
  "extensions": {}
}
```
