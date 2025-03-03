// IIFE (Immediately Invoked Function Expression) to allow await
const nextConfig = (() => {
	let userConfig = undefined;
	try {
		// Use require instead of await import
		userConfig = require("./v0-user-next.config");
	} catch (e) {
		// ignore error
	}

	/** @type {import('next').NextConfig} */
	const config = {
		eslint: {
			ignoreDuringBuilds: true,
		},
		typescript: {
			ignoreBuildErrors: true,
		},
		images: {
			unoptimized: true,
		},
		experimental: {
			webpackBuildWorker: true,
			parallelServerBuildTraces: true,
			parallelServerCompiles: true,
			optimizeCss: false
		},
		optimizeFonts: false,
		swcMinify: true,
	};

	mergeConfig(config, userConfig);
	return config;
})();

function mergeConfig(nextConfig, userConfig) {
	if (!userConfig) {
		return;
	}

	for (const key in userConfig) {
		if (
			typeof nextConfig[key] === "object" &&
			!Array.isArray(nextConfig[key])
		) {
			nextConfig[key] = {
				...nextConfig[key],
				...userConfig[key],
			};
		} else {
			nextConfig[key] = userConfig[key];
		}
	}
}

module.exports = nextConfig;