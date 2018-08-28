module.exports = {


  friendlyName: 'Download photo',


  description: '',


  inputs: {
    id: {
      description: 'The id of the thing whose photo we\'re downloading.',
      type: 'number',
      require: true
    }
  },


  exits: {
    success: {
      outputDescription: 'The streaming bytes of the specified thing\'s photo.',
      outputType: 'ref'
    },
    notFound: {
      responseType: 'notFound'      
    },
    forbidden: {
      responseType: 'forbidden'
    }
  },


  fn: async function (inputs, exits) {

    var thing = await Thing.findOne({id: inputs.id});

    if(!thing){
      throw 'notFound';
    }

    var friends = User.findOne({ id: this.req.me.id }).populate('friends');
    if(this.re.me.id !== thing.owner && !_.any(friends, { id: thing.owner })){
      throw 'forbidden';
    }

    // Set the mime type for the response
    this.res.type(thing.imageUploadMime);

    var downloading = await sails.startDownload(thing.imageUploadFd);

    return exits.success(downloading);

  }


};
