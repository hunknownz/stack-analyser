## [1.1.5](https://github.com/specfy/stack-analyser/compare/v1.1.4...v1.1.5) (2023-06-26)


### Bug Fixes

* **flatten:** allow to not merge ([412140d](https://github.com/specfy/stack-analyser/commit/412140d023642d3bb159b956b457daf13f0d6a53))

## [1.1.4](https://github.com/specfy/stack-analyser/compare/v1.1.3...v1.1.4) (2023-06-23)


### Bug Fixes

* **types:** missing export for AnalyserJson ([6e21d7f](https://github.com/specfy/stack-analyser/commit/6e21d7f463235c0a17624181566d18b26d844e29))

## [1.1.3](https://github.com/specfy/stack-analyser/compare/v1.1.2...v1.1.3) (2023-05-10)


### Bug Fixes

* clean up, add missing export, add documentation ([84b2080](https://github.com/specfy/stack-analyser/commit/84b20808ae66af6576e9967020568fc8b5bfd205))

## [1.1.2](https://github.com/specfy/stack-analyser/compare/v1.1.1...v1.1.2) (2023-05-10)


### Bug Fixes

* **action:** try to test it ([66994cb](https://github.com/specfy/stack-analyser/commit/66994cbcbd39a7df12816c4cd73dfbe62f8fc6d7))
* **docker:** do not remove terraform folder ([77be684](https://github.com/specfy/stack-analyser/commit/77be68499bf39114478d911d37532950d483ebd8))

## [1.1.1](https://github.com/specfy/stack-analyser/compare/v1.1.0...v1.1.1) (2023-05-09)


### Bug Fixes

* **cli:** set as executable ([0718ea4](https://github.com/specfy/stack-analyser/commit/0718ea45a075c2195b76abf0a644c98e2954c409))

# [1.1.0](https://github.com/specfy/stack-analyser/compare/v1.0.1...v1.1.0) (2023-05-09)


### Bug Fixes

* **release:** rename to .cjs ([c9d572f](https://github.com/specfy/stack-analyser/commit/c9d572fa80b96f086ea6c8bf44f1ef07f7916a2d))


### Features

* **cli:** working basic command + tests ([93355b3](https://github.com/specfy/stack-analyser/commit/93355b33af0dbc758c846518e17113b8e912b5cb))
* export to esm ([0601722](https://github.com/specfy/stack-analyser/commit/0601722ea4c47edbaed5e6c174b6d788db1af968))

## [1.0.1](https://github.com/specfy/stack-analyser/compare/v1.0.0...v1.0.1) (2023-05-05)


### Bug Fixes

* **release:** specfy public release ([e31dd4d](https://github.com/specfy/stack-analyser/commit/e31dd4dcb4cba5d4807c05c2715319da75e2a290))

# 1.0.0 (2023-05-05)


### Bug Fixes

* **ci:** also build in CI to catch typescript errors ([6fbfed7](https://github.com/specfy/stack-analyser/commit/6fbfed7de1035903f5150335e375da707c2e3f1d))
* **deps:** support more docker images ([1c87f7f](https://github.com/specfy/stack-analyser/commit/1c87f7fa943b90f7e71f7438bfdb01c1afad6ca4))
* **docker:** export every component anyway ([cf73701](https://github.com/specfy/stack-analyser/commit/cf737016fdb908da94f8161f50d2639bc80c2a87))
* flatten seems to work ([9d4f100](https://github.com/specfy/stack-analyser/commit/9d4f1000f3f9a453627b8e92c3d0e66b14169e45))
* **nodejs:** add more dependencies ([74ef1fe](https://github.com/specfy/stack-analyser/commit/74ef1fe8ae7597c250481c146790a82049d7562e))
* **payload:** move helpers directly into payload, sort components for easier snapshot, (tmp: broke edges) ([59c7529](https://github.com/specfy/stack-analyser/commit/59c75296c74b0bb68c4397c1583a40a0a42ecff2))
* store ref instead of id ([18781a0](https://github.com/specfy/stack-analyser/commit/18781a0d1ad2530720ea946c4552d566e9159c82))
* wrong path for coverage ([04b77f4](https://github.com/specfy/stack-analyser/commit/04b77f40f46b786856540aae622d3991637a19a8))


### Features

* add support for Terraform, rename tests ([1e83450](https://github.com/specfy/stack-analyser/commit/1e83450428587535b0dbd3545d29c4b20bb9faa3))
* **analyser:** find hosting and edges after analysis ([7b5398f](https://github.com/specfy/stack-analyser/commit/7b5398f56650f558513b324dc2abe5f3b905af0b))
* detect languages, payload is now mergeable ([a615b3a](https://github.com/specfy/stack-analyser/commit/a615b3a2c8c03d6866b5dde2d6bb6858f5c50a3f))
* parse docker ([af75f89](https://github.com/specfy/stack-analyser/commit/af75f894180fb578c90bf1a478dc6c577fe8db6e))
* **payload:** now is self-recursive and mergeable ([63f0daf](https://github.com/specfy/stack-analyser/commit/63f0dafab56c71222d2b9c4881e0140fa361b3a1))
* **payload:** output all dependencies found ([afc05b5](https://github.com/specfy/stack-analyser/commit/afc05b50ff4c6514c44d41e52e7cb8991f63e24b))
* **payload:** proper flatten ([375422d](https://github.com/specfy/stack-analyser/commit/375422d7287d4da881ca9975403ea99188944bb3))
* **payload:** use class to merge and output ([7dc8952](https://github.com/specfy/stack-analyser/commit/7dc8952d8e8eb7f044e0f87f02c82b71cc475985))
* **provider:** Github API provider ([1e3d47b](https://github.com/specfy/stack-analyser/commit/1e3d47b60986045988738590ae8f0797951dce72))
* **rules:** reuse code to match files ([cbe0413](https://github.com/specfy/stack-analyser/commit/cbe0413b2cc6a88eaff1a43df21d6727b8fbdc09))
* **rule:** support full path match, add github actions, cypress, kibana, github ([fd62a30](https://github.com/specfy/stack-analyser/commit/fd62a309afc22c0da140e1b6f9959a1568cdcad3))
* strongly type supported tech, simplify return to use uniq key, load package.json and detect some deps ([718011c](https://github.com/specfy/stack-analyser/commit/718011cd81e5a7ef9a8fa553721e50bafa74f2b8))

# 1.0.0 (2023-05-05)


### Bug Fixes

* **ci:** also build in CI to catch typescript errors ([6fbfed7](https://github.com/specfy/stack-analyser/commit/6fbfed7de1035903f5150335e375da707c2e3f1d))
* **deps:** support more docker images ([1c87f7f](https://github.com/specfy/stack-analyser/commit/1c87f7fa943b90f7e71f7438bfdb01c1afad6ca4))
* **docker:** export every component anyway ([cf73701](https://github.com/specfy/stack-analyser/commit/cf737016fdb908da94f8161f50d2639bc80c2a87))
* flatten seems to work ([9d4f100](https://github.com/specfy/stack-analyser/commit/9d4f1000f3f9a453627b8e92c3d0e66b14169e45))
* **nodejs:** add more dependencies ([74ef1fe](https://github.com/specfy/stack-analyser/commit/74ef1fe8ae7597c250481c146790a82049d7562e))
* **payload:** move helpers directly into payload, sort components for easier snapshot, (tmp: broke edges) ([59c7529](https://github.com/specfy/stack-analyser/commit/59c75296c74b0bb68c4397c1583a40a0a42ecff2))
* store ref instead of id ([18781a0](https://github.com/specfy/stack-analyser/commit/18781a0d1ad2530720ea946c4552d566e9159c82))
* wrong path for coverage ([04b77f4](https://github.com/specfy/stack-analyser/commit/04b77f40f46b786856540aae622d3991637a19a8))


### Features

* add support for Terraform, rename tests ([1e83450](https://github.com/specfy/stack-analyser/commit/1e83450428587535b0dbd3545d29c4b20bb9faa3))
* **analyser:** find hosting and edges after analysis ([7b5398f](https://github.com/specfy/stack-analyser/commit/7b5398f56650f558513b324dc2abe5f3b905af0b))
* detect languages, payload is now mergeable ([a615b3a](https://github.com/specfy/stack-analyser/commit/a615b3a2c8c03d6866b5dde2d6bb6858f5c50a3f))
* parse docker ([af75f89](https://github.com/specfy/stack-analyser/commit/af75f894180fb578c90bf1a478dc6c577fe8db6e))
* **payload:** now is self-recursive and mergeable ([63f0daf](https://github.com/specfy/stack-analyser/commit/63f0dafab56c71222d2b9c4881e0140fa361b3a1))
* **payload:** output all dependencies found ([afc05b5](https://github.com/specfy/stack-analyser/commit/afc05b50ff4c6514c44d41e52e7cb8991f63e24b))
* **payload:** proper flatten ([375422d](https://github.com/specfy/stack-analyser/commit/375422d7287d4da881ca9975403ea99188944bb3))
* **payload:** use class to merge and output ([7dc8952](https://github.com/specfy/stack-analyser/commit/7dc8952d8e8eb7f044e0f87f02c82b71cc475985))
* **provider:** Github API provider ([1e3d47b](https://github.com/specfy/stack-analyser/commit/1e3d47b60986045988738590ae8f0797951dce72))
* **rules:** reuse code to match files ([cbe0413](https://github.com/specfy/stack-analyser/commit/cbe0413b2cc6a88eaff1a43df21d6727b8fbdc09))
* **rule:** support full path match, add github actions, cypress, kibana, github ([fd62a30](https://github.com/specfy/stack-analyser/commit/fd62a309afc22c0da140e1b6f9959a1568cdcad3))
* strongly type supported tech, simplify return to use uniq key, load package.json and detect some deps ([718011c](https://github.com/specfy/stack-analyser/commit/718011cd81e5a7ef9a8fa553721e50bafa74f2b8))
