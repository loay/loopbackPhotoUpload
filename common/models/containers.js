module.exports = function(Container) {
  // listProjects
  Container.listContainers = function(cb) {
    Container.find({
      fields: {
        balance: false
      }
    }, cb);
  };
  Container.remoteMethod('listContainers', {
    returns: {arg: 'containers', type: 'array'},
    http: {path:'/list-containers', verb: 'get'}
  });
};
