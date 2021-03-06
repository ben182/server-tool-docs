module.exports = {
  title: 'stool',
  description: 'A fully featured LAMP+ installer and management tool optimized for DigitalOcean & Laravel',
  base: '/docs/',
  ga: 'UA-125405523-1',

  themeConfig: {
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'ben182/server-tool-docs',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',

    docsDir: 'docs',

    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help me improve this page!',

    sidebar: [
      '/installation',
      {
        title: 'Commands',
        collapsable: false,
        children: [
          '/commands/addvhost',
          '/commands/deletevhost',
          '/commands/apachepermissions',
          '/commands/applicationinstall',
          '/commands/mysqlbackup',
          '/commands/mysqlcreate',
          '/commands/redisbackup',
        ]
      },
      {
        title: 'Git Auto Deploy',
        collapsable: false,
        children: [
          '/gad/gettingstarted',
          '/gad/addgad',
        ]
      },
    ]
  }
}
