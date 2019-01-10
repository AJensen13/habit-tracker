module.exports = {
  presets: [
		'@vue/app',
		["@babel/env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }]
  ]
}
