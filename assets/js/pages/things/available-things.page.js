parasails.registerPage('available-things', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    things: [],
    confirmDeleteThingModalOpen: false,
    selectedThing: undefined,

    uploadThingModalOpen: false,
    uploadFormData: {
      label: '',
      photo: undefined
    },

    // syncing / loading state
    syncing: false,

    // Validation errors:
    formErrors: {},

    // server error state
    cloudError: ''
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);

  },
  mounted: async function() {
    //…
  },


  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    /* clickThing : async function(thingId){
      console.log('The clicked thing #'+thingId);
      await Cloud.destroyOneThing.with({ id: thingId });
      _.remove(this.things, { id: thingId });
      this.$forceUpdate();
    }, */

    clickDeleteThing: function(thingId){
      console.log('clicked the "delete" button!');      
      this.selectedThing = _.find(this.things, {id: thingId });

      this.confirmDeleteThingModalOpen = true;
    },

    closeDeleteThingModal: function() {
      this.selectedThing = undefined;
      this.confirmDeleteThingModalOpen = false;
      this.cloudError = '';
    },

    DeleteThingModal: function(){
      this.selectedThing = undefined;
      this.confirmDeleteThingModalOpen = false;
    },

    handleParsingDeleteThingForm: function(){
      return {
        id: this.selectedThing.id
      };
    },

    submittedDeleteThingForm: function(){
      console.log('Ok it worked!');
      _.remove(this.things, { id: this.selectedThing.id });
      this.$forceUpdate();

      this.confirmDeleteThingModalOpen = false;
      this.selectedThing = undefined;
    },

    clickAddButton: function() {
      console.log('Add item');
      this.uploadThingModalOpen = true;
    },

    _clearUploadThingModal : function(){
      // Close modal
      this.uploadThingModalOpen = false;
      // Reset form data
      this.uploadFormData = {
        label: '',
        photo: undefined
      };
      // Clear error states
      this.formErrors = {};
      this.cloudError = '';
    },

    closeUploadThingModal : function(){
      this._clearUploadThingModal();
    },

    handleParsingUploadThingForm : function(){
      // Clear out any pre-existing error messages.
      this.formErrors = {};

      var argins = this.uploadFormData;

      //TODO: Validations go here
      
      // If there were any issues, they've already now been communicated to the user,
      // so simply return undefined. (This signifies that the submission should be 
      // canceled.)
      if (Object.keys(this.formErrors).length > 0) {
        return;
      }

      return argins;
    },

    submittedUploadThingForm: function(result) {
      this.thing.push({
        label: this.uploadFormData.label,
        id: result.id,
        owner: {
          id: this.me.id,
          fullName: this.me.fullName
        }
      });

      // Close the modal.
      this._clearUploadThingModal();
    },

    changeFileInput: function(files) {
      var selectedFile = files[0];
      if(!selectedFile) {
        this.uploadFormData.photo = undefined;
        return;
      }
      this.uploadFormData.photo = selectedFile;
    }

  }
});
