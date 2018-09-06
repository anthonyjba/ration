/**
 * Thing.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    label: {
      type: 'string',
      example: 'Mr. Waffle Maker',
      description: 'A User-submited label describing this thing.'
    },

    imageUploadFd: {
      type: 'string',
      description: 'The Skipper file descriptor uniquely identifies the uploaded image associated with "This".',
      required: true
    },

    imageUploadMime: {
      type: 'string',
      description: 'The MIME type for the uploaded image.',
      required: true
    },

    expectedReturnAt: {
      type: 'number',
      description: 'A Js timestamp representing them moment of this item\'s expected return',
      example: 1506568911
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    borrowed: {
      model: 'User',
      description: 'The id of the user who is currently borrowing this item, or null if it\'s not currently being borrowed.'
    },

    owner: {
      model: 'User',
      description: 'The user who uploaded this item.',
      required: true
    }

  },

};

