(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{39:function(e){e.exports=JSON.parse('{"docusaurus-plugin-content-docs":{"intro":{"loadedVersions":[{"versionName":"current","versionLabel":"Next","versionPath":"/","isLast":true,"routePriority":-1,"sidebarFilePath":"/home/runner/work/docs/docs/sidebars.js","docsDirPath":"/home/runner/work/docs/docs/docs","mainDocId":"intro","sidebars":{"docs":[{"type":"doc","id":"intro"},{"type":"doc","id":"requirements"},{"type":"doc","id":"download"},{"collapsed":true,"type":"category","label":"Concepts","items":[{"type":"doc","id":"concepts/basics"},{"type":"doc","id":"concepts/finances"}]},{"collapsed":true,"type":"category","label":"Installation","items":[{"type":"doc","id":"installation/uploading"},{"type":"doc","id":"installation/vhost"},{"type":"doc","id":"installation/installation"},{"type":"doc","id":"installation/cron"},{"type":"doc","id":"installation/importing"},{"type":"doc","id":"installation/upgrading"}]},{"collapsed":true,"type":"category","label":"Configuration","items":[{"type":"doc","id":"config/files"},{"type":"doc","id":"config/optimizing"}]},{"collapsed":true,"type":"category","label":"Themes and Layouts","items":[{"type":"doc","id":"customize/layouts"},{"type":"doc","id":"customize/theming"}]},{"collapsed":true,"type":"category","label":"Developers","items":[{"type":"doc","id":"developers/environment"},{"type":"doc","id":"developers/building-assets"},{"type":"doc","id":"developers/addons"},{"type":"doc","id":"developers/awards"}]},{"collapsed":true,"type":"category","label":"API","items":[{"type":"doc","id":"api/overview"},{"type":"doc","id":"api/auth"},{"type":"doc","id":"api/apis"}]},{"collapsed":true,"type":"category","label":"ACARS","items":[{"type":"doc","id":"acars/overview"},{"type":"doc","id":"acars/install-server"},{"type":"doc","id":"acars/install-client"},{"type":"doc","id":"acars/flight"}]},{"type":"doc","id":"help/getting-help"}]},"permalinkToSidebar":{"/acars/flight":"docs","/acars/install-client":"docs","/acars/install-server":"docs","/acars/overview":"docs","/api/apis":"docs","/api/auth":"docs","/api/overview":"docs","/concepts/basics":"docs","/concepts/finances":"docs","/config/files":"docs","/config/optimizing":"docs","/customize/layouts":"docs","/customize/theming":"docs","/developers/addons":"docs","/developers/awards":"docs","/developers/building-assets":"docs","/developers/environment":"docs","/download":"docs","/help/getting-help":"docs","/installation/cron":"docs","/installation/importing":"docs","/installation/installation":"docs","/installation/upgrading":"docs","/installation/uploading":"docs","/installation/vhost":"docs","/":"docs","/requirements":"docs"},"docs":[{"unversionedId":"acars/flight","id":"acars/flight","isDocsHomePage":false,"title":"Flight Details","description":"Setting up your flight","source":"@site/docs/acars/flight.md","slug":"/acars/flight","permalink":"/acars/flight","editUrl":"https://github.com/phpvms/docs/tree/master/docs/acars/flight.md","version":"current","sidebar":"docs","previous":{"title":"Installation (Client)","permalink":"/acars/install-client"},"next":{"title":"Getting Help","permalink":"/help/getting-help"}},{"unversionedId":"acars/install-client","id":"acars/install-client","isDocsHomePage":false,"title":"Installation (Client)","description":"1. Client Config","source":"@site/docs/acars/install-client.md","slug":"/acars/install-client","permalink":"/acars/install-client","editUrl":"https://github.com/phpvms/docs/tree/master/docs/acars/install-client.md","version":"current","sidebar":"docs","previous":{"title":"Installation (Server)","permalink":"/acars/install-server"},"next":{"title":"Flight Details","permalink":"/acars/flight"}},{"unversionedId":"acars/install-server","id":"acars/install-server","isDocsHomePage":false,"title":"Installation (Server)","description":"1. Module Installation","source":"@site/docs/acars/install-server.md","slug":"/acars/install-server","permalink":"/acars/install-server","editUrl":"https://github.com/phpvms/docs/tree/master/docs/acars/install-server.md","version":"current","sidebar":"docs","previous":{"title":"Overview","permalink":"/acars/overview"},"next":{"title":"Installation (Client)","permalink":"/acars/install-client"}},{"unversionedId":"acars/overview","id":"acars/overview","isDocsHomePage":false,"title":"Overview","description":"The ACARS application is designed to run with phpVMS 7 to automatically report your pilot reports from the new Microsoft Flight Simulator, Prepar3d, FSX and X-Plane.","source":"@site/docs/acars/overview.md","slug":"/acars/overview","permalink":"/acars/overview","editUrl":"https://github.com/phpvms/docs/tree/master/docs/acars/overview.md","version":"current","sidebar":"docs","previous":{"title":"APIs","permalink":"/api/apis"},"next":{"title":"Installation (Server)","permalink":"/acars/install-server"}},{"unversionedId":"api/apis","id":"api/apis","isDocsHomePage":false,"title":"APIs","description":"All of these calls require a valid API key","source":"@site/docs/api/apis.md","slug":"/api/apis","permalink":"/api/apis","editUrl":"https://github.com/phpvms/docs/tree/master/docs/api/apis.md","version":"current","sidebar":"docs","previous":{"title":"Authentication","permalink":"/api/auth"},"next":{"title":"Overview","permalink":"/acars/overview"}},{"unversionedId":"api/auth","id":"api/auth","isDocsHomePage":false,"title":"Authentication","description":"Each user is given an API key (and can regenerate it) when they register. Requests to a phpVMS API will require an X-API-Key header, with this key. Addons can take advantage of this by adding the api.auth middleware to their route group.","source":"@site/docs/api/auth.md","slug":"/api/auth","permalink":"/api/auth","editUrl":"https://github.com/phpvms/docs/tree/master/docs/api/auth.md","version":"current","sidebar":"docs","previous":{"title":"Overview","permalink":"/api/overview"},"next":{"title":"APIs","permalink":"/api/apis"}},{"unversionedId":"api/overview","id":"api/overview","isDocsHomePage":false,"title":"Overview","description":"phpVMS includes a REST API that can be used for retrieving or saving information.","source":"@site/docs/api/overview.md","slug":"/api/overview","permalink":"/api/overview","editUrl":"https://github.com/phpvms/docs/tree/master/docs/api/overview.md","version":"current","sidebar":"docs","previous":{"title":"Awards","permalink":"/developers/awards"},"next":{"title":"Authentication","permalink":"/api/auth"}},{"unversionedId":"concepts/basics","id":"concepts/basics","isDocsHomePage":false,"title":"Basics","description":"phpVMS 7 has a few fundamental differences from the old version, on how schedules and flights are handled.","source":"@site/docs/concepts/basics.md","slug":"/concepts/basics","permalink":"/concepts/basics","editUrl":"https://github.com/phpvms/docs/tree/master/docs/concepts/basics.md","version":"current","sidebar":"docs","previous":{"title":"Download","permalink":"/download"},"next":{"title":"Finances","permalink":"/concepts/finances"}},{"unversionedId":"concepts/finances","id":"concepts/finances","isDocsHomePage":false,"title":"Finances","description":"Journals","source":"@site/docs/concepts/finances.md","slug":"/concepts/finances","permalink":"/concepts/finances","editUrl":"https://github.com/phpvms/docs/tree/master/docs/concepts/finances.md","version":"current","sidebar":"docs","previous":{"title":"Basics","permalink":"/concepts/basics"},"next":{"title":"Uploading Files","permalink":"/installation/uploading"}},{"unversionedId":"config/files","id":"config/files","isDocsHomePage":false,"title":"Config Files","description":"Admin Panel Settings","source":"@site/docs/config/files.md","slug":"/config/files","permalink":"/config/files","editUrl":"https://github.com/phpvms/docs/tree/master/docs/config/files.md","version":"current","sidebar":"docs","previous":{"title":"Upgrading","permalink":"/installation/upgrading"},"next":{"title":"Optimizing","permalink":"/config/optimizing"}},{"unversionedId":"config/optimizing","id":"config/optimizing","isDocsHomePage":false,"title":"Optimizing","description":"These are just some basic optimizing. For additional optimization information, refer to the Laravel docs","source":"@site/docs/config/optimizing.md","slug":"/config/optimizing","permalink":"/config/optimizing","editUrl":"https://github.com/phpvms/docs/tree/master/docs/config/optimizing.md","version":"current","sidebar":"docs","previous":{"title":"Config Files","permalink":"/config/files"},"next":{"title":"Layouts and Template Basics","permalink":"/customize/layouts"}},{"unversionedId":"customize/layouts","id":"customize/layouts","isDocsHomePage":false,"title":"Layouts and Template Basics","description":"phpVMS can customized to fit your VA\'s look and feel. The templating is powered by Laravel Blade. To understand skinning and changing templates, study the Laravel Blade documents, and then the below will make more sense.","source":"@site/docs/customize/layouts.md","slug":"/customize/layouts","permalink":"/customize/layouts","editUrl":"https://github.com/phpvms/docs/tree/master/docs/customize/layouts.md","version":"current","sidebar":"docs","previous":{"title":"Optimizing","permalink":"/config/optimizing"},"next":{"title":"Theming","permalink":"/customize/theming"}},{"unversionedId":"customize/theming","id":"customize/theming","isDocsHomePage":false,"title":"Theming","description":"The custom theme system is using laravel-theme, which allows for great flexibility for creating themes, and extending existing ones, or only modifying the templates that you want to change.","source":"@site/docs/customize/theming.md","slug":"/customize/theming","permalink":"/customize/theming","editUrl":"https://github.com/phpvms/docs/tree/master/docs/customize/theming.md","version":"current","sidebar":"docs","previous":{"title":"Layouts and Template Basics","permalink":"/customize/layouts"},"next":{"title":"Environment Configuration","permalink":"/developers/environment"}},{"unversionedId":"developers/addons","id":"developers/addons","isDocsHomePage":false,"title":"Addons","description":"If you\'re looking to create a full add-on, that has it\'s own URL, this is the page you want. If you want to create a component that someone can include into their own views/templates, you want a widget.","source":"@site/docs/developers/addons.md","slug":"/developers/addons","permalink":"/developers/addons","editUrl":"https://github.com/phpvms/docs/tree/master/docs/developers/addons.md","version":"current","sidebar":"docs","previous":{"title":"Building Assets","permalink":"/developers/building-assets"},"next":{"title":"Awards","permalink":"/developers/awards"}},{"unversionedId":"developers/awards","id":"developers/awards","isDocsHomePage":false,"title":"Awards","description":"Awards have been improved from the previous version. Awards are created in the admin panel, but are associated with an Award plugin. This class allows you to check any conditions to see if the award should be given. These award classes can also be passed a parameter (a number, string or JSON string), so you can use the same Award class for multiple awards.","source":"@site/docs/developers/awards.md","slug":"/developers/awards","permalink":"/developers/awards","editUrl":"https://github.com/phpvms/docs/tree/master/docs/developers/awards.md","version":"current","sidebar":"docs","previous":{"title":"Addons","permalink":"/developers/addons"},"next":{"title":"Overview","permalink":"/api/overview"}},{"unversionedId":"developers/building-assets","id":"developers/building-assets","isDocsHomePage":false,"title":"Building Assets","description":"The default CSS/Javascript is built and packaged using webpack. The main Javascript files used are compiled together into a single JS file, which is then minimized. While most settings are exposed, you might still want to customize them.","source":"@site/docs/developers/building-assets.md","slug":"/developers/building-assets","permalink":"/developers/building-assets","editUrl":"https://github.com/phpvms/docs/tree/master/docs/developers/building-assets.md","version":"current","sidebar":"docs","previous":{"title":"Environment Configuration","permalink":"/developers/environment"},"next":{"title":"Addons","permalink":"/developers/addons"}},{"unversionedId":"developers/environment","id":"developers/environment","isDocsHomePage":false,"title":"Environment Configuration","description":"Docker Compose","source":"@site/docs/developers/environment.md","slug":"/developers/environment","permalink":"/developers/environment","editUrl":"https://github.com/phpvms/docs/tree/master/docs/developers/environment.md","version":"current","sidebar":"docs","previous":{"title":"Theming","permalink":"/customize/theming"},"next":{"title":"Building Assets","permalink":"/developers/building-assets"}},{"unversionedId":"download","id":"download","isDocsHomePage":false,"title":"Download","description":"There are a few ways you can obtain phpVMS and its dependencies. The full package method already includes the vendor directory and you don\'t need to do anything but upload it.","source":"@site/docs/download.md","slug":"/download","permalink":"/download","editUrl":"https://github.com/phpvms/docs/tree/master/docs/download.md","version":"current","sidebar":"docs","previous":{"title":"Requirements","permalink":"/requirements"},"next":{"title":"Basics","permalink":"/concepts/basics"}},{"unversionedId":"help/getting-help","id":"help/getting-help","isDocsHomePage":false,"title":"Getting Help","description":"Help is provided through community support at the forums.","source":"@site/docs/help/getting-help.md","slug":"/help/getting-help","permalink":"/help/getting-help","editUrl":"https://github.com/phpvms/docs/tree/master/docs/help/getting-help.md","version":"current","sidebar":"docs","previous":{"title":"Flight Details","permalink":"/acars/flight"}},{"unversionedId":"installation/cron","id":"installation/cron","isDocsHomePage":false,"title":"Cron/Scheduled Tasks","description":"In order for some phpVMS features to work, a cronjob is required to be setup. Some of the features that rely on cronjobs include:","source":"@site/docs/installation/cron.md","slug":"/installation/cron","permalink":"/installation/cron","editUrl":"https://github.com/phpvms/docs/tree/master/docs/installation/cron.md","version":"current","sidebar":"docs","previous":{"title":"Installation","permalink":"/installation/installation"},"next":{"title":"Importing","permalink":"/installation/importing"}},{"unversionedId":"installation/importing","id":"installation/importing","isDocsHomePage":false,"title":"Importing","description":"You can import through either the installer or the command line after install.","source":"@site/docs/installation/importing.md","slug":"/installation/importing","permalink":"/installation/importing","editUrl":"https://github.com/phpvms/docs/tree/master/docs/installation/importing.md","version":"current","sidebar":"docs","previous":{"title":"Cron/Scheduled Tasks","permalink":"/installation/cron"},"next":{"title":"Upgrading","permalink":"/installation/upgrading"}},{"unversionedId":"installation/installation","id":"installation/installation","isDocsHomePage":false,"title":"Installation","description":"The installation requires a few steps:","source":"@site/docs/installation/installation.md","slug":"/installation/installation","permalink":"/installation/installation","editUrl":"https://github.com/phpvms/docs/tree/master/docs/installation/installation.md","version":"current","sidebar_label":"Installation","sidebar":"docs","previous":{"title":"VHost Configuration","permalink":"/installation/vhost"},"next":{"title":"Cron/Scheduled Tasks","permalink":"/installation/cron"}},{"unversionedId":"installation/upgrading","id":"installation/upgrading","isDocsHomePage":false,"title":"Upgrading","description":"To upgrade, you can overwrite the files of your install. I recommend removing the vendor directory and re-uploading that, in case there were major version updates which could interfere in things. Then, visit the /update URL of your site (e,g http://myva.com/update) to complete any migrations","source":"@site/docs/installation/upgrading.md","slug":"/installation/upgrading","permalink":"/installation/upgrading","editUrl":"https://github.com/phpvms/docs/tree/master/docs/installation/upgrading.md","version":"current","sidebar":"docs","previous":{"title":"Importing","permalink":"/installation/importing"},"next":{"title":"Config Files","permalink":"/config/files"}},{"unversionedId":"installation/uploading","id":"installation/uploading","isDocsHomePage":false,"title":"Uploading Files","description":"When uploading the files, you have several options on how to. These mainly apply to shared hosts. For your own server or if you have control over the vhost files, upload/extract the files to your desired location and point the vhost to the /public folder.","source":"@site/docs/installation/uploading.md","slug":"/installation/uploading","permalink":"/installation/uploading","editUrl":"https://github.com/phpvms/docs/tree/master/docs/installation/uploading.md","version":"current","sidebar":"docs","previous":{"title":"Finances","permalink":"/concepts/finances"},"next":{"title":"VHost Configuration","permalink":"/installation/vhost"}},{"unversionedId":"installation/vhost","id":"installation/vhost","isDocsHomePage":false,"title":"VHost Configuration","description":"If you\'re configuring your own VPS/webserver, the vhosts should point to the public directory.","source":"@site/docs/installation/vhost.md","slug":"/installation/vhost","permalink":"/installation/vhost","editUrl":"https://github.com/phpvms/docs/tree/master/docs/installation/vhost.md","version":"current","sidebar":"docs","previous":{"title":"Uploading Files","permalink":"/installation/uploading"},"next":{"title":"Installation","permalink":"/installation/installation"}},{"unversionedId":"intro","id":"intro","isDocsHomePage":false,"title":"Introduction","description":"Welcome to the phpVMS Docs site! phpVMS is a PHP based application to run and simulate and airline. It allowed users to register, view flight schedules that you create, and file flight reports.","source":"@site/docs/intro.md","slug":"/","permalink":"/","editUrl":"https://github.com/phpvms/docs/tree/master/docs/intro.md","version":"current","sidebar":"docs","next":{"title":"Requirements","permalink":"/requirements"}},{"unversionedId":"requirements","id":"requirements","isDocsHomePage":false,"title":"Requirements","description":"Server Requirements","source":"@site/docs/requirements.md","slug":"/requirements","permalink":"/requirements","editUrl":"https://github.com/phpvms/docs/tree/master/docs/requirements.md","version":"current","sidebar":"docs","previous":{"title":"Introduction","permalink":"/"},"next":{"title":"Download","permalink":"/download"}}]}]}},"docusaurus-plugin-content-blog":{"default":null},"docusaurus-plugin-content-pages":{"default":[]},"docusaurus-plugin-debug":{"default":null},"docusaurus-plugin-google-gtag":{"default":null},"docusaurus-plugin-sitemap":{"default":null},"docusaurus-theme-classic":{"default":null},"docusaurus-theme-search-algolia":{"default":null}}')}}]);