if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Testing select dropdown in handlebars/meteor!";
  };
  
  Template.select.val = function () {
    return "File not found";
  };

  Handlebars.registerHelper('selected', function(val, option) {
    return val == option ? ' selected' : '';
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {

  });
}
