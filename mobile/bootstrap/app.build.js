/**
 * App.BuildJS
 * Router Configurator
 * ClubKoncepto Web Development
 *
 * This file sets and describes the Application Routers
 */

({
    appDir: "../",
    baseUrl: "bootstrap",
    dir: "../application-built",

	paths: {
		assets: 	'../application/assets',
		app: 		'../application',
		views: 		'../application/modules/views',
		templates: 	'../application/modules/templates',
		collections:'../application/modules/collections',
		models: 	'../application/modules/models',
		async: 		'../application/library/async',
		google: 	'../application/library/google',
		locate: 	'../application/library/locate',
		text:		'../application/library/text',
		mapstraction:		'../application/library/mapstraction',
		jquery:		'empty:'
	},
	
    modules: [        
        {
            name: "main"
        }
    ]
})
