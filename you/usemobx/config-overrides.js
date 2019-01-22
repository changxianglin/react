const { injectBabelPlugin } = require('react-app-rewired')
const rewireMobx = require('react-app-rewire-mobx')

module.exports = function override(config, env) {
    config = injectBabelPlugin("babel-plugin-styled-components", config)
    config = rewireMobx(config, env)

    return config
}
