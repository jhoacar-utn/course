const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = async function extract_students() {
  const { stdout, stderr } = await exec("git branch -r | grep _ | cut -d '/' -f 2");
  if(stderr)
    return [];
    
  const students = stdout.split("\n").filter(name=>name);

  return students;
};

