var Promise = require('bluebird');

module.exports = function(NoteModel) {

  // https://github.com/strongloop/loopback/issues/418
  // once a model is attached to the data source
  NoteModel.on('dataSourceAttached', function(obj){
    // wrap the whole model in Promise
    // but we need to avoid 'validate' method
    NoteModel = Promise.promisifyAll(
      NoteModel,
      {
        filter: function(name, func, target){
          return !( name == 'validate');
        }
      }
    );
  });

};
