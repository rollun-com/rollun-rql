define({
	loader: {
		"script": "dojo",
		"options": {
			"async": true,
			"isDebug": true,
			"packages": [
				{
					"name": "dojo",
					"location": "../node_modules/dojo"
				},
				{
					"name": "promised-io",
					"location": "../node_modules/promised-io"
				},
				{
					"name": "rql",
					"location": "../"
				}
			]
		}
	},
	suites: [
		'tests/unit/all'
	],
	excludeInstrumentation: /(node_modules|tests)/
});