// @ts-nocheck

const { extendDefaultPlugins } = require('svgo');

module.exports = {
	plugins: extendDefaultPlugins([
		{
			name: 'cleanupAttrs',
			active: true
		},
		{
			name: 'removeDoctype',
			active: true
		},
		{
			name: 'removeXMLProcInst',
			active: true
		},
		{
			name: 'removeComments',
			active: true
		},
		{
			name: 'removeMetadata',
			active: true
		},
		{
			name: 'removeUselessDefs',
			active: true
		},
		{
			name: 'removeEditorsNSData',
			active: true
		},
		{
			name: 'removeEmptyAttrs',
			active: true
		},
		{
			name: 'removeEmptyText',
			active: true
		},
		{
			name: 'removeEmptyContainers',
			active: true
		},
		{
			name: 'cleanupEnableBackground',
			active: true
		},
		{
			name: 'convertStyleToAttrs',
			active: true
		},
		{
			name: 'removeUselessStrokeAndFill',
			active: true
		},
		{
			name: 'cleanupIDs',
			active: true,
			params: {
				prefix: {
					toString() {
						this.counter = this.counter || 0;

						return `svgo-viewbox-id-${this.counter++}`;
					}
				}
			}
		},
		{
			name: 'removeDimensions',
			active: true
		}
	])
};
