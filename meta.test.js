const child_process = require('child_process');

// Copyright 2004-present Facebook. All Rights Reserved.

test('does not print stuff to stdout', done => {
  child_process.exec(
    'node_modules/.bin/jest --useStderr --json --outputFile="./foo.json" sum.test.js',
    (error, stdout, stderr) => {
      expect(stderr).not.toBe('');
      expect(error).toBeFalsy();
      expect(stdout).toBe('');
      done();
    },
  );
});
  