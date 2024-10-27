import type { TechType } from '../types';

import IconAndroid from './IconAndroid';
import IconApple from './IconApple';
import IconHTML from './IconHTML';
import IconCSS from './IconCSS';
import IconJavascript from './IconJavascript';
import IconTypescript from './IconTypescript';
import IconVue from './IconVue';
import IconReact from './IconReact';
import IconAngular from './IconAngular';
import IconSvelte from './IconSvelte';
import IconEmber from './IconEmber';
import IconStylus from './IconStylus';
import IconLess from './IconLess';
import IconSass from './IconSass';
import IconWebpack from './IconWebpack';
import IconVite from './IconVite';
import IconGulp from './IconGulp';
import IconJest from './IconJest';
import IconKarma from './IconKarma';
import IconVitest from './IconVitest';
import IconCypress from './IconCypress';
import IconGit from './IconGit';
import IconPython from './IconPython';
import IconLinux from './IconLinux';
import IconMacOS from './IconMacOS';
import IconGithub from './IconGithub';
import IconMozilla from './IconMozilla';
import IconSafari from './IconSafari';
import IconChrome from './IconChrome';
import IconXcode from './IconXcode';
import IconWordpress from './IconWordpress';
import IconWhatsapp from './IconWhatsapp';
import IconVisualCode from './IconVisualCode';
import IconTelegram from './IconTelegram';
import IconSwift from './IconSwift';
import IconRuby from './IconRuby';
import IconNode from './IconNode';
import IconMicrosoft from './IconMicrosoft';
import IconPlaystore from './IconPlaystore';
import IconTumblr from './IconTumblr';
import IconCodepen from './IconCodepen';
import IconYotube from './IconYotube';
import IconJava from './IconJava';
import IconPwa from './IconPwa';
import IconTailwind from './IconTailwind';
import IconNpm from './IconNpm';
import IconEdge from './IconEdge';
import IconCpp from './IconCpp';
import IconCsharp from './IconCsharp';
import IconFirebase from './IconFirebase';
import IconPhp from './IconPhp';
import IconMysql from './IconMysql';
import IconStackOverflow from './IconStackOverflow';
import IconChatGPT from './IconChatGPT';
import IconFacebook from './IconFacebook';
import IconX from './IconX';
import IconGoogle from './IconGoogle';
import IconIBM from './IconIBM';
import IconLinkedin from './IconLinkedin';
import IconCisco from './IconCisco';
import IconTikTok from './IconTikTok';
import IconRedHat from './IconRedHat';
import IconOpera from './IconOpera';
import IconHP from './IconHP';
import IconGitlab from './IconGitlab';
import IconEvernote from './IconEvernote';
import IconDuckDuckGo from './IconDuckDuckGo';
import IconDrupal from './IconDrupal';
import IconDropbox from './IconDropbox';
import IconBaidu from './IconBaidu';
import IconDribbble from './IconDribbble';
import IconDocker from './IconDocker';
import IconDiscord from './IconDiscord';
import IconDigitalOcean from './IconDigitalOcean';
import IconExpo from './IconExpo';
import IconNextJS from './IconNextJS';
import IconNuxt from './IconNuxt';
import IconQwik from './IconQwik';
import IconSpringBoot from './IconSpringBoot';
import IconVercel from './IconVercel';
import IconAstro from './IconAstro';
import IconTurbo from './IconTurbo';
import IconPandas from './IconPandas';
import IconAWS from './IconAWS';
import IconNvidia from './IconNvidia';
import IconTensorFlow from './IconTensorFlow';
import IconGemini from './IconGemini';
import IconShopify from './IconShopify';
import IconSteam from './IconSteam';
import IconGO from './IconGO';
import IconRust from './IconRust';
import IconRedis from './IconRedis';
import IconKubernets from './IconKubernets';
import IconPostgresql from './IconPostgresql';
import IconMongoDB from './IconMongoDB';
import IconMariaDB from './IconMariaDB';
import IconSupabase from './IconSupabase';
import IconAMD from './IconAMD';
import IconSnapdragon from './IconSnapdragon';
import IconUbuntu from './IconUbuntu';
import IconArchLinux from './IconArchLinux';
import IconBackbone from './IconBackbone';
import IconFedora from './IconFedora';
import IconMint from './IconMint';
import IconDeepin from './IconDeepin';
import IconDebian from './IconDebian';
import IconOpenSUSE from './IconOpenSUSE';
import IconCentOS from './IconCentOS';
import IconSlackWare from './IconSlackWare';
import IconOracle from './IconOracle';
import IconElementaryOS from './IconElementaryOS';
import IconCopilot from './IconCopilot';
import IconRaspberry from './IconRaspberry';
import IconKaliLinux from './IconKaliLinux';
import IconSpotify from './IconSpotify';
import IconSoundCloud from './IconSoundCloud';
import IconDeezer from './IconDeezer';
import IconPinterest from './IconPinterest';
import IconInstagram from './IconInstagram';
import IconVK from './IconVK';
import IconYandex from './IconYandex';
import IconFirefox from './IconFirefox';
import IconManjaro from './IconManjaro';
import IconNetflix from './IconNetflix';
import IconPrimeVideo from './IconPrimeVideo';
import IconHBOMax from './IconHBOMax';
import IconApache from './IconApache';
import IconEclipse from './IconEclipse';
import IconTomcat from './IconTomcat';
import IconJetBrains from './IconJetBrains';
import IconIntelliJ from './IconIntelliJ';
import IconKotlin from './IconKotlin';
import IconAndroidStudio from './IconAndroidStudio';
import IconSpaceX from './IconSpaceX';
import IconTorrent from './IconTorrent';
import IconTor from './IconTor';
import IconLua from './IconLua';
import IconFortran from './IconFortran';
import IconCobol from './IconCobol';
import IconAzure from './IconAzure';
import IconGrafana from './IconGrafana';
import IconAnsible from './IconAnsible';
import IconNginx from './IconNginx';
import IconAppStore from './IconAppStore';
import IconGraylog from './IconGraylog';
import IconCircleCi from './IconCircleCi';
import IconD3 from './IconD3';
import IconElo from './IconElo';

const techs: TechType[] = [
  { name: 'Android', icon: IconAndroid, url: 'https://www.android.com' },
  { name: 'Apple', icon: IconApple, url: 'https://www.apple.com' },
  { name: 'Linux', icon: IconLinux, url: 'https://ubuntu.com' },
  {
    name: 'MacOS',
    icon: IconMacOS,
    url: 'https://www.apple.com/br/macos/sonoma',
  },
  {
    name: 'Microsoft',
    icon: IconMicrosoft,
    url: 'https://www.microsoft.com',
  },
  {
    name: 'PlayStore',
    icon: IconPlaystore,
    url: 'https://play.google.com',
  },
  {
    name: 'PWA',
    icon: IconPwa,
    url: 'https://web.dev/progressive-web-apps',
  },
  {
    name: 'HTML',
    icon: IconHTML,
    url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
  },
  {
    name: 'CSS',
    icon: IconCSS,
    url: 'https://developer.mozilla.org/en-US/docs/Glossary/CSS',
  },
  {
    name: 'JavaScript',
    icon: IconJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Glossary/Javascript',
  },
  {
    name: 'Typescript',
    icon: IconTypescript,
    url: 'https://www.typescriptlang.org/docs',
  },
  { name: 'Node', icon: IconNode, url: 'https://nodejs.org/en' },
  { name: 'Java', icon: IconJava, url: 'https://www.java.com' },
  { name: 'Ruby', icon: IconRuby, url: 'https://www.ruby-lang.org/en' },
  { name: 'Python', icon: IconPython, url: 'https://docs.python.org' },
  {
    name: 'Swift',
    icon: IconSwift,
    url: 'https://developer.apple.com/swift',
  },
  { name: 'PHP', icon: IconPhp, url: 'https://www.php.net' },
  {
    name: 'C#',
    icon: IconCsharp,
    url: 'https://learn.microsoft.com/en-us/dotnet/csharp',
  },
  {
    name: 'C++',
    icon: IconCpp,
    url: 'https://learn.microsoft.com/en-us/dotnet/csharp',
  },
  {
    name: 'VisualCode',
    icon: IconVisualCode,
    url: 'https://code.visualstudio.com',
  },
  { name: 'Github', icon: IconGithub, url: 'https://github.com/criar-art' },
  {
    name: 'NPM',
    icon: IconNpm,
    url: 'https://npmjs.com/package/vue-techs-logos',
  },
  { name: 'YouTube', icon: IconYotube, url: 'https://youtube.com' },
  { name: 'Wordpress', icon: IconWordpress, url: 'https://wordpress.com' },
  { name: 'Tumblr', icon: IconTumblr, url: 'https://www.tumblr.com' },
  { name: 'CodePen', icon: IconCodepen, url: 'https://codepen.io' },
  { name: 'Vue', icon: IconVue, url: 'https://vuejs.org' },
  { name: 'React', icon: IconReact, url: 'https://reactjs.org' },
  { name: 'Angular', icon: IconAngular, url: 'https://angular.io' },
  { name: 'Svelte', icon: IconSvelte, url: 'https://svelte.dev' },
  { name: 'Ember', icon: IconEmber, url: 'https://emberjs.com' },
  { name: 'Stylus', icon: IconStylus, url: 'https://stylus-lang.com' },
  { name: 'Tailwind', icon: IconTailwind, url: 'https://tailwindcss.com' },
  { name: 'Less', icon: IconLess, url: 'https://lesscss.org' },
  { name: 'Sass', icon: IconSass, url: 'https://sass-lang.com' },
  { name: 'Webpack', icon: IconWebpack, url: 'https://webpack.js.org' },
  { name: 'Vite', icon: IconVite, url: 'https://vitejs.dev' },
  { name: 'Gulp', icon: IconGulp, url: 'https://gulpjs.com' },
  { name: 'Jest', icon: IconJest, url: 'https://jestjs.io/pt-BR' },
  { name: 'Karma', icon: IconKarma, url: 'https://karma-runner.github.io' },
  { name: 'Vitest', icon: IconVitest, url: 'https://vitest.dev' },
  {
    name: 'Xcode',
    icon: IconXcode,
    url: 'https://developer.apple.com/xcode',
  },
  { name: 'Whatsapp', icon: IconWhatsapp, url: 'https://web.whatsapp.com' },
  { name: 'Telegram', icon: IconTelegram, url: 'https://web.telegram.org' },
  { name: 'Cypress', icon: IconCypress, url: 'https://www.cypress.io' },
  { name: 'Mozilla', icon: IconMozilla, url: 'https://www.mozilla.org' },
  {
    name: 'Safari',
    icon: IconSafari,
    url: 'https://www.apple.com/br/safari',
  },
  {
    name: 'Edge',
    icon: IconEdge,
    url: 'https://www.microsoft.com/pt-br/edge',
  },
  {
    name: 'Chrome',
    icon: IconChrome,
    url: 'https://www.google.com/intl/pt-BR/chrome',
  },
  { name: 'MySQL', icon: IconMysql, url: 'https://www.mysql.com' },
  {
    name: 'Firebase',
    icon: IconFirebase,
    url: 'https://firebase.google.com',
  },
  { name: 'Git', icon: IconGit, url: 'https://git-scm.com' },
  {
    name: 'StackOverflow',
    icon: IconStackOverflow,
    url: 'https://stackoverflow.com',
  },
  { name: 'ChatGPT', icon: IconChatGPT, url: 'https://chat.openai.com' },
  { name: 'Facebook', icon: IconFacebook, url: 'https://facebook.com' },
  { name: 'X', icon: IconX, url: 'https://x.com' },
  { name: 'Google', icon: IconGoogle, url: 'https://google.com' },
  { name: 'IBM', icon: IconIBM, url: 'https://ibm.com' },
  { name: 'Linkedin', icon: IconLinkedin, url: 'https://linkedin.com' },
  { name: 'Cisco', icon: IconCisco, url: 'https://cisco.com' },
  { name: 'TikTok', icon: IconTikTok, url: 'https://tiktok.com' },
  { name: 'RedHat', icon: IconRedHat, url: 'https://redhat.com' },
  { name: 'Opera', icon: IconOpera, url: 'https://opera.com' },
  { name: 'HP', icon: IconHP, url: 'https://hp.com' },
  { name: 'Gitlab', icon: IconGitlab, url: 'https://gitlab.com' },
  { name: 'Evernote', icon: IconEvernote, url: 'https://evernote.com' },
  {
    name: 'DuckDuckGo',
    icon: IconDuckDuckGo,
    url: 'https://duckduckgo.com',
  },
  { name: 'Drupal', icon: IconDrupal, url: 'https://drupal.com' },
  { name: 'Dropbox', icon: IconDropbox, url: 'https://dropbox.com' },
  { name: 'Baidu', icon: IconBaidu, url: 'https://baidu.com' },
  { name: 'Dribbble', icon: IconDribbble, url: 'https://dribbble.com' },
  { name: 'Docker', icon: IconDocker, url: 'https://docker.com' },
  { name: 'Discord', icon: IconDiscord, url: 'https://discord.com' },
  {
    name: 'DigitalOcean',
    icon: IconDigitalOcean,
    url: 'https://digitalocean.com',
  },
  { name: 'Expo', icon: IconExpo, url: 'https://expo.dev' },
  { name: 'Next.js', icon: IconNextJS, url: 'https://nextjs.org' },
  { name: 'Nuxt', icon: IconNuxt, url: 'https://nuxt.com' },
  { name: 'Qwik', icon: IconQwik, url: 'https://qwik.dev' },
  { name: 'Astro', icon: IconAstro, url: 'https://astro.build' },
  { name: 'Turbo', icon: IconTurbo, url: 'https://turbo.build' },
  { name: 'SpringBoot', icon: IconSpringBoot, url: 'https://spring.io' },
  { name: 'Vercel', icon: IconVercel, url: 'https://vercel.com' },
  { name: 'Pandas', icon: IconPandas, url: 'https://pandas.pydata.org' },
  { name: 'AWS', icon: IconAWS, url: 'https://aws.amazon.com' },
  { name: 'Nvidia', icon: IconNvidia, url: 'https://www.nvidia.com' },
  {
    name: 'TensorFlow',
    icon: IconTensorFlow,
    url: 'https://www.tensorflow.org',
  },
  { name: 'Gemini', icon: IconGemini, url: 'https://gemini.google.com' },
  { name: 'Shopify', icon: IconShopify, url: 'https://www.shopify.com' },
  { name: 'Steam', icon: IconSteam, url: 'https://www.steam.com' },
  { name: 'Go', icon: IconGO, url: 'https://go.dev' },
  { name: 'Rust', icon: IconRust, url: 'https://www.rust-lang.org' },
  { name: 'Redis', icon: IconRedis, url: 'https://redis.io' },
  { name: 'Kubernets', icon: IconKubernets, url: 'https://kubernetes.io' },
  {
    name: 'Postgresql',
    icon: IconPostgresql,
    url: 'https://www.postgresql.org',
  },
  { name: 'MongoDB', icon: IconMongoDB, url: 'https://www.mongodb.com' },
  { name: 'MariaDB', icon: IconMariaDB, url: 'https://mariadb.org' },
  { name: 'Supabase', icon: IconSupabase, url: 'https://supabase.com' },
  { name: 'AMD', icon: IconAMD, url: 'https://www.amd.com' },
  {
    name: 'SnapDragon',
    icon: IconSnapdragon,
    url: 'https://www.qualcomm.com/snapdragon/overview',
  },
  { name: 'Ubuntu', icon: IconUbuntu, url: 'https://ubuntu.com' },
  { name: 'ArchLinux', icon: IconArchLinux, url: 'https://archlinux.org' },
  { name: 'Fedora', icon: IconFedora, url: 'https://fedoraproject.org/' },
  { name: 'Backbone', icon: IconBackbone, url: 'https://backbonejs.org' },
  { name: 'Mint', icon: IconMint, url: 'https://linuxmint.com' },
  { name: 'Deepin', icon: IconDeepin, url: 'https://www.deepin.org' },
  { name: 'Debian', icon: IconDebian, url: 'https://www.debian.org' },
  { name: 'openSUSE', icon: IconOpenSUSE, url: 'https://www.opensuse.org' },
  { name: 'CentOS', icon: IconCentOS, url: 'https://www.centos.org' },
  {
    name: 'Slackware',
    icon: IconSlackWare,
    url: 'http://www.slackware.com',
  },
  { name: 'Oracle', icon: IconOracle, url: 'https://www.oracle.com' },
  {
    name: 'ElementaryOS',
    icon: IconElementaryOS,
    url: 'https://elementary.io',
  },
  {
    name: 'Copilot',
    icon: IconCopilot,
    url: 'https://copilot.microsoft.com',
  },
  {
    name: 'Raspberry',
    icon: IconRaspberry,
    url: 'https://www.raspberrypi.com',
  },
  { name: 'KaliLinux', icon: IconKaliLinux, url: 'https://www.kali.org' },
  { name: 'Spotify', icon: IconSpotify, url: 'https://open.spotify.com' },
  {
    name: 'SoundCloud',
    icon: IconSoundCloud,
    url: 'https://soundcloud.com',
  },
  { name: 'Deezer', icon: IconDeezer, url: 'https://www.deezer.com' },
  {
    name: 'Pinterest',
    icon: IconPinterest,
    url: 'https://www.pinterest.com',
  },
  {
    name: 'Instagram',
    icon: IconInstagram,
    url: 'https://www.instagram.com',
  },
  { name: 'VK', icon: IconVK, url: 'https://www.vk.com' },
  { name: 'Yandex', icon: IconYandex, url: 'https://www.yandex.ru' },
  {
    name: 'Firefox',
    icon: IconFirefox,
    url: 'https://www.mozilla.org/pt-BR/firefox/new',
  },
  { name: 'Manjaro', icon: IconManjaro, url: 'https://manjaro.org' },
  { name: 'Netflix', icon: IconNetflix, url: 'https://www.netflix.com' },
  {
    name: 'PrimeVideo',
    icon: IconPrimeVideo,
    url: 'https://primevideo.com',
  },
  { name: 'HBOMax', icon: IconHBOMax, url: 'https://www.max.com' },
  { name: 'Apache', icon: IconApache, url: 'https://www.apache.org' },
  { name: 'Eclipse', icon: IconEclipse, url: 'https://eclipseide.org' },
  { name: 'Tomcat', icon: IconTomcat, url: 'https://tomcat.apache.org' },
  {
    name: 'JetBrains',
    icon: IconJetBrains,
    url: 'https://www.jetbrains.com',
  },
  {
    name: 'IntelliJ',
    icon: IconIntelliJ,
    url: 'https://www.jetbrains.com/idea',
  },
  { name: 'Kotlin', icon: IconKotlin, url: 'https://kotlinlang.org' },
  {
    name: 'AndroidStudio',
    icon: IconAndroidStudio,
    url: 'https://developer.android.com/studio',
  },
  { name: 'SpaceX', icon: IconSpaceX, url: 'https://www.spacex.com' },
  { name: 'uTorrent', icon: IconTorrent, url: 'https://www.utorrent.com' },
  { name: 'Tor', icon: IconTor, url: 'https://www.torproject.org' },
  { name: 'Lua', icon: IconLua, url: 'https://www.lua.org' },
  { name: 'Fortran', icon: IconFortran, url: 'https://fortran-lang.org' },
  {
    name: 'Cobol',
    icon: IconCobol,
    url: 'https://en.wikipedia.org/wiki/COBOL',
  },
  { name: 'Azure', icon: IconAzure, url: 'https://azure.microsoft.com' },
  { name: 'Grafana', icon: IconGrafana, url: 'https://grafana.com' },
  { name: 'Ansible', icon: IconAnsible, url: 'https://www.ansible.com' },
  { name: 'Nginx', icon: IconNginx, url: 'https://nginx.org' },
  { name: 'Graylog', icon: IconGraylog, url: 'https://graylog.org' },
  {
    name: 'AppStore',
    icon: IconAppStore,
    url: 'https://www.apple.com/br/app-store',
  },
  { name: 'CircleCI', icon: IconCircleCi, url: 'https://circleci.com' },
  { name: 'D3', icon: IconD3, url: 'https://d3js.org' },
  { name: 'Elo', icon: IconElo, url: 'https://www.elo.com.br' },
];

export default techs;
