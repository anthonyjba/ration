module.exports = {


  friendlyName: 'View available things',


  description: 'Display "Available things" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/things/available-things'
    }

  },


  fn: async function (inputs, exits) {

    var url = require('url');

    var me = await User.findOne({
      id: this.req.me.id
    })
    .populate('friends');

    var friendIds = _.pluck(me.friends, 'id');

    // Get the list of things this user can see.
    var things = await Thing.find({
      or: [
        // Friend things:
        { owner: { 'in': friendIds } },
        // My things:
        { owner: this.req.me.id }
        
      ]
    })
    .populate('owner');

    _.each(things, (thing)=>{
      thing.imageSrc = url.resolve(sails.config.custom.baseUrl, '/api/v1/things/'+ thing.id);
      delete thing.imageUploadFd;
      delete thing.imageUploadMime;
    });

    // Respond with view.
    return exits.success({
      things: things,
      currentSection: 'things'
    });

  }


};
