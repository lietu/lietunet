# Homepage

Some basic homepage blog thing for [lietu.net](https://lietu.net)

Based on [Hugo](https://gohugo.io) static site generator + [uBlogger theme](https://ublogger.netlify.app).

Uses GitHub Pages for hosting.

Feel free to use this as an example for how to deploy a Hugo based website to GitHub Pages automatically via GitHub workflows.

## Local usage

1. [Install Hugo (extended)](https://gohugo.io/getting-started/installing/)
2. Clone this repository and open a terminal in the checkout
3. `hugo serve` while developing
4. `hugo --minify` to test builds

## Deployments

When ready to release you commit and push, the `.github/workflows/build-and-deploy.yml` will take care of the rest.

If you use this as a base you will need to at least change the `FQDN` in that file to choose the domain you will use for your website.

## License

The [LICENSE](./LICENSE) -file explains it - mostly BSD 3-clause.
