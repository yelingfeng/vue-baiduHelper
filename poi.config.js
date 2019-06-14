module.exports = {
    entry: './example/index.js',
    output: {
        dir: 'example/dist',
        html: {
            template: './example/public/index.html'
        }
    },
    babel: {
        jsx: 'vue'
    }
}
