module.exports = function(Project) {
  // listProjects
  Project.listProjects = function(cb) {
    Project.find({
      fields: {
        balance: false
      }
    }, cb);
  };
  Project.remoteMethod('listProjects', {
    returns: {arg: 'projects', type: 'array'},
    http: {path:'/list-projects', verb: 'get'}
  });

  // donate
  // withdraw


};
