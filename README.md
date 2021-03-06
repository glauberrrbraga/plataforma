# Plataforma Nortan [<img src="https://i.imgur.com/oMcxwZ0.png" alt="Eva Design System" height="20px" />](https://eva.design) [![Dependency Status](https://david-dm.org/nortan-projetos/plataforma/status.svg)](https://david-dm.org/nortan-projetos/plataforma) [![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/nortan-projetos/nortan-projetos.github.io/master/LICENSE)

## Development: [![Build Status](https://travis-ci.org/nortan-projetos/plataforma.svg?branch=master)](https://travis-ci.org/nortan-projetos/plataforma) Stage: [![Build Status](https://travis-ci.org/nortan-projetos/plataforma.svg?branch=demo)](https://travis-ci.org/nortan-projetos/plataforma) Production: [![Build Status](https://travis-ci.org/nortan-projetos/plataforma.svg?branch=production)](https://travis-ci.org/nortan-projetos/plataforma)

## How to Serve Locally

To run this website locally, you need to install the dependencies following the instructions below:

1. Install Node 12 or greater

2. Install mongo server

3. Go to project folder and install project dependencies

```
npm i
```

4. After install dependencies just start mongo server locally

```
mongod
```

5. Then start backend

```
npm run start:dev
```

5. Then start frontend

```
npm run ng serve -- --proxy-config proxy-config.json
```

6. Finally, Open a browser with this url: `localhost:4200`

## Akveo Template Demo

<a target="_blank" href="http://akveo.com/ngx-admin/">Temaplate Live Demo</a>

## BrowserStack

This project runs its tests on multiple desktop and mobile browsers using [BrowserStack](http://www.browserstack.com).

<img src="https://cloud.githubusercontent.com/assets/131406/22254249/534d889e-e254-11e6-8427-a759fb23b7bd.png" height="40" />

## Credits

### Template creator

**Akveo**

- [ngx-admin](https://github.com/akveo/ngx-admin) - The best Angular admin template
- [Eva Icons](https://github.com/akveo/eva-icons) - 480+ beautiful Open Source icons
- [Nebular](https://github.com/akveo/nebular) - Angular Components, Auth and Security
