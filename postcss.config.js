if(process.env.NODE_ENV === 'development') {
    module.exports = {
        plugins: [
            require('autoprefixer'),
        ]
    }
}

if(process.env.NODE_ENV === 'production') {
    module.exports = {
        plugins: [
            require('autoprefixer'),
            require('cssnano')
        ]
    }
}
