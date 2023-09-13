module.exports = {
  name: 'second',
  exposes: {
    './Module': 'apps/second/src/app/remote-entry/entry.module.ts',
  },
};
