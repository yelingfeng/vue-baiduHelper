import { Config } from 'bili'

const config: Config = {
    input: 'src/index.js',
    output: {
        moduleName: 'VueBaiduHelper',
        format: ['esm', 'umd', 'cjs'],
        fileName({ format }, defaultFileName) {
            if (format === 'cjs') {
                return 'vue-baiduHelper.cjs.js'
            }
            if (format === 'umd') {
                return 'vue-baiduHelper.js'
            }
            if (format === 'esm') {
                return 'vue-baiduHelper.es.js'
            }
            return defaultFileName
        },
        sourceMapExcludeSources: true
    },
    babel: {
        minimal: true
    },
    extendConfig(config, { format }) {
        if (format === 'umd') {
            config.output.minify = true
            config.env = Object.assign({}, config.env, {
                NODE_ENV: 'production'
            })
        }
        return config
    }
}

export default config
