# Install VRT (visual regression tracker)
* Download the installation script
`curl https://raw.githubusercontent.com/Visual-Regression-Tracker/Visual-Regression-Tracker/master/vrt-install.sh -o vrt-install.sh
chmod a+x vrt-install.sh`
* Run docker daemon
* Run the installation script
`./vrt-install.sh`

# Tests setup
* Clone repo `git clone git@bitbucket.org:hostiqdev/hostiq.ua-autotests.git`
* Go to `visual-tests` folder
* Install dependencies `npm install`
* Update configuration
* Run tests `npm run test`

`BaseUrl, pages and screen size` can be modified in `testData.js`

Config for VRT in vrt.json. Data for config can be found in http://localhost:8080/profile (in Configuration examples block)
