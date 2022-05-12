## Precondition

You need installed docker compose and npm for further installation

## Setup visual regression tracker - VRT

Download the installation script
```bash
curl https://raw.githubusercontent.com/Visual-Regression-Tracker/Visual-Regression-Tracker/master/vrt-install.sh -o vrt-install.sh
chmod a+x vrt-install.sh
```

Run docker daemon (or open docker desktop)
Run the installation script

```bash
./vrt-install.sh
```

# Setup test environment

Clone repo

```bash
git clone https://github.com/Pattekkatt/visual-tests
```

Go to visual-tests folder
```bash
cd visual-tests
```

Install dependencies
```bash
npm install
```

Update configuration
Run tests
```bash
npm run test
```

Base url and screen size in `playwright.config.js`

Pages for test in `playwright.config.js`

Config for connecting to VRT `vrt.json`. Details for connect can be found in http://localhost:8080/profile (in Configuration examples block)
