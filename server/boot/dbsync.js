module.exports = function(app){
    app.datasources['db'].automigrate([
      'application',
      'installation',
      'notification'
      ], function(err) {
        if(err) console.log(err);
        else console.log("Migration Done");
      });
}
