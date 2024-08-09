# tctm-https

Removes common CORS and SSL issues encountered when deploying TCTM Apps with HTTPS

## Install

```bash
npm install @cshbicos/tctm-capacitor-https
npx cap sync
```

## Configuration
In capacitor.config.json, set the following

```
{
    ....
	"server": {
		"hostname": "yourserver.yourcompany.com",
		"androidScheme": "https"
	},
	"plugins": {
        ...
		"TCTMHttps": {
			"ignoreSSLErrors": false,
			"backendPaths": [
				"/api",
				"/api2"
			]
		}
	}
}
```
