const fs = require('fs')
const path = require('path')

build(path.join(__dirname, 'QFace'), path.join(__dirname, 'assets'))
// build(path.join(__dirname, 'QFace'), path.join(__dirname, 'docs'))
console.log('finished!')

function copyFile(src, dst) {
	const buffer = fs.readFileSync(src)
	for (const dir of [dst].flat()) {
		fs.mkdirSync(path.dirname(dir), { recursive: true })
		fs.writeFileSync(dir, buffer)
	}
}

function build(sourceRoot, targetRoot) {
	const data = JSON.parse(fs.readFileSync(path.join(sourceRoot, 'lib/data.json')).toString())
	
	for (const qface of data) {
		const id = +qface.QSid
		const name = qface.QDes.slice(1)
		console.log('processing', id, name)

		const staticSource = path.join(sourceRoot, `static/s${id}.png`)
		const animatedSource = path.join(sourceRoot, `gif/s${id}.gif`)

		const staticTargets = [
			path.join(targetRoot, `id/${id}.png`),
			path.join(targetRoot, `name/${name}.png`),
		]
		const animatedTargets = [
			path.join(targetRoot, `id/${id}.gif`),
			path.join(targetRoot, `name/${name}.gif`),
			path.join(targetRoot, `_/animated/id/${id}.gif`),
			path.join(targetRoot, `_/animated/name/${name}.gif`),
		]

		copyFile(staticSource, staticTargets)
		if (fs.existsSync(animatedSource)) {
			copyFile(animatedSource, animatedTargets)
		} else {
			copyFile(staticSource, animatedTargets)
		}
	}
}