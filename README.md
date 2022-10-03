# QFace

Yet another QQ Faces hosting service, automatically built from [koishijs/QFace](https://github.com/koishijs/QFace).

This project would not sync changes automatically however. If needed, you can trigger a CI build by starring this repository.

### Usage

Splice with the hosting root address to get image links.

* `/id/{id}.png`: select by id, static
* `/id/{id}.gif`: select by id, dynamic
* `/name/{name}.png`: select by name, static
* `/name/{name}.gif`: select by name, dynamic
* `/_/animated/name/{name}.png`: with extname '.png' but dynamic, in order to adapt old versions of Valine

### Hosts

|Service|Hosting Root|Example|
|:-:|---|:-:|
|mem.ac|`https://qface.mem.ac/{uri}`|![](https://qface.mem.ac/id/0.gif)|
|jsDelivr|`https://cdn.jsdelivr.net/gh/mem-static/qface/assets/{uri}`|![](https://cdn.jsdelivr.net/gh/mem-static/qface/assets/id/0.gif)|

