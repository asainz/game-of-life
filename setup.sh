function install_npm_module_globally(){
    npm install -g $1
}

install_npm_module_globally yo
install_npm_module_globally bower
install_npm_module_globally foreman
install_npm_module_globally phantomjs
install_npm_module_globally istanbul #code coverage
install_npm_module_globally karma

#install node dependencies
npm install

#instal bower components
bower install