const { join } = require('path');

const {
	lstatSync,
	mkdirSync,
	symlinkSync,
	readdirSync,
	readlinkSync,
	createReadStream,
	createWriteStream
} = require('fs');

const mkdir = dir => {
	try {
		mkdirSync(dir, 0755);
	} catch (e) {
		if (e.code !== 'EEXIST') {
			throw e;
		}
	}
};

const copy = (src, dest) => {
	const from = createReadStream(src);
	const to = createWriteStream(dest);

	from.pipe(to);
};

const copyDir = (src, dest, filter) => {
	mkdir(dest);

	const files = readdirSync(src);

	for (const file of files) {
		const from = join(src, file);
		const to = join(dest, file);
		const current = lstatSync(from);

		if (typeof filter === 'function' && filter(file)) {
			continue;
		}

		if (current.isDirectory()) {
			copyDir(from, to);
		} else if (current.isSymbolicLink()) {
			const symlink = readlinkSync(from);

			symlinkSync(symlink, to);
		} else {
			copy(from, to);
		}
	}
};

module.exports = { mkdir, copy, copyDir };
