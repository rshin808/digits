Template.ListStuff.helpers({

  /**
   * @returns {*} All of the Contact documents.
   */
  stuffList: function () {
    return Contact.find();
  }
});