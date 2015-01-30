// DEBUG=boot:create-model-instances slc run
var debug = require('debug')('boot:create-model-instances');

module.exports = function(app) {

  var NoteModel = app.models.NoteModel;

  NoteModel.create(
    [{title:'one'},{title:'two'}],
    function(err, noteModels) {
      if (err) {
        return debug('%j', err);
      }
      debug('created ' + noteModels.length + ' noteModels');

      return NoteModel.updateAsync(
        {objectId:1}, // where
        {title:'blah'}// data
      )
        .then(function(noteModel) {
          console.log('finished with NoteModel update');
        });
    }
  );

};
