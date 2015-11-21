'use-strict';

var config;

if (process.env.HOT) {
	config = {
		// Based on https://github.com/webpack/webpack-dev-server/issues/68#issuecomment-75323551
		// Configure the console output
		quiet: false,
		progress: true,
		// It suppress everything except error, so it has to be set to false as well
		// to see success build.
		noInfo: false,
		stats: {
		  	// Config for minimal console.log mess.
			assets: false,
			colors: true,
			version: false,
			hash: false,
			timings: false,
			chunks: true,
			reasons : true,
			chunkModules: false
		}
	};
} else if (process.env.NODE_ENV === 'development') {
	config = {
		noInfo: false,
		progress: true,
		stats: {
		  // Config for minimal console.log mess.
		  assets: false,
		  colors: true,
		  version: false,
		  hash: false,
		  timings: true,
		  chunks: true,
		  reasons : true,
		  chunkModules: false
		},
		devtool: 'source-map',
		bail: true,
		debug: true
	}
} else {
	// PRODUCTION
	config = {
		node: {
		    console: true,
		    fs: 'empty',
		    net: 'empty',
		    tls: 'empty'
		},
		noInfo: false,
		progress: true,
		stats: {
			// Config for minimal console.log mess.
			assets: false,
			colors: true,
			version: false,
			hash: false,
			timings: true,
			chunks: true,
			reasons : true,
			chunkModules: false
		}
	}
}

module.exports = config;