const tree_guides = {
  children: [
    {
      name: "Nanocl overview",
      url: "/guides",
    },
    {
      name: "Get started",
      url: "/guides/get-started",
      children: [
        {
          name: "Part 1: Installation",
          url: "/guides/get-started/installation",
        }
      ]
    }
  ]
}

const tree_references = {
  children: [
    {
      name: "Reference documentation",
      url: "/references",
    },
    {
      name: "API Reference",
      url: "/references/api",
      children: [
        {
          name: "Daemon",
          url: "/references/api/daemon",
          children: [
            {
              name: "Latest",
              url: "/references/api/daemon/latest"
            }
          ]
        },
      ]
    },
    {
      name: "CLI Reference",
      url: "/references/cli",
      children: [
        {
          name: "Nanocl CLI (nanocl)",
          url: "/references/cli/nanocl",
          children: [
            {
              name: "Base",
              url: "/references/cli/nanocl/base"
            }
          ]
        },
      ]
    }
  ]
}

module.exports = {
  header_links: [
    {
      title: "Guides",
      url: "/guides",
    },
    {
      title: "References",
      url: "/references"
    }
  ],
  routes: {
    // Guides
    "/guides": {
      title: "Get nanocl",
      match: "/guides/README.md",
      tree: tree_guides,
    },
    "/guides/get-started": {
      title: "Get started",
      match: "/guides/get-started/README.md",
      tree: tree_guides,
    },
    "/guides/get-started/installation": {
      title: "Installation",
      match: "/guides/get-started/INSTALLATION.md",
      tree: tree_guides,
    },
    // References
    "/references": {
      title: "References",
      match: "/references/README.md",
      tree: tree_references,
    },
    "/references/api": {
      title: "API Reference",
      match: "/references/api/README.md",
      tree: tree_references,
    },
    "/references/api/daemon": {
      title: "API Reference",
      match: "/references/api/daemon/README.md",
      tree: tree_references,
    },
    "/references/api/daemon/latest": {
      title: "API Reference",
      match: "/references/api/daemon/OPENAPI.md",
      tree: tree_references,
    },
    "/references/cli": {
      title: "CLI Reference",
      match: "/references/cli/README.md",
      tree: tree_references,
    },
    "/references/cli/nanocl": {
      title: "Nanocl CLI (nanocl)",
      match: "/references/cli/nanocl/README.md",
      tree: tree_references,
    },
    "/references/cli/nanocl/base": {
      title: "Nanocl CLI (nanocl) base",
      match: "/references/cli/nanocl/nanocl.1.md",
      tree: tree_references,
    },
  },
  home_page_blocks: [
    {
      title: "Get Started",
      description: "Learn nanocl and the benefit of intranet",
      icon: "https://docs.docker.com/images/rocket.svg",
      url: "/guides/get-started",
    },
    {
      title: "Guides",
      description: "Learn how to install nanocl environement and start deploying services",
      icon: "https://docs.docker.com/images/guides.svg",
      url: "/guides",
    },
    {
      title: "Manuals",
      description: "Browse through the manuals and learn how to use nanocl",
      icon: "https://docs.docker.com/images/manuals.svg",
      url: "/manuals",
    },
    {
      title: "Reference",
      icon: "https://docs.docker.com/images/reference.svg",
      description: "Browse throught the CLI and API reference documentation",
    }
  ]
}
