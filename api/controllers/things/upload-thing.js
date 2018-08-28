module.exports = {


  friendlyName: 'Upload thing',


  description: '',

  files: ['photo'],

  inputs: {
    photo: {
      type: 'ref',
      description: 'Uploaded file stream',
      required: true
    },
    label: {
      type: 'string'
    }
  },


  exits: {
    success: {
      outputDescription: 'Information about the newly creator record',
      outputType: {
        id: 'number',
        imageSrc: 'string'
      }
    },
    badRequest: {
      description: 'No image upload was provided.',
      responseType: 'badRequest'
    }
  },

  fn: async function (inputs, exits) {

    var url = require('url');

    var info = await sails.uploadOne(inputs.photo);
    
    if (!info) {
      throw 'badRequest';
    }

    var newThing = await Thing.create({
      imageUploadFd: info.fd,
      imageUploadMime: info.type,
      owner: this.req.me.id,
      label: inputs.label
    }).fetch();

    return exits.success({
      id: newThing.id,
      imageSrc: url.resolve(sails.config.custom.baseUrl, '/api/v1/things/'+ newThing.id)
    });

  }


};
