# QFace

Yet another QQ Faces hosting service, automatically built from [koishijs/QFace](https://github.com/koishijs/QFace).

This project would not sync changes automatically however. If needed, you can trigger a CI build by starring this repository.

### Usage

Splicing with the hosting root address to get image links.

* `/id/{id}.png`, the static QQ Face with internal id `{id}`
* `/id/{id}.gif`, the dynamic QQ Face with internal id `{id}`
* `/name/{name}.png`, the static QQ Face named as `{name}`
* `/name/{name}.gif`, the dynamic QQ Face named as `{name}`

### Hosts

* jsDelivr (recommended): `https://cdn.jsdelivr.net/gh/mem-static/qface/assets` (Example: ![](https://cdn.jsdelivr.net/gh/mem-static/qface/assets/id/0.gif))
* ~~mem.ac (not yet available): https://qface.mem.ac~~
