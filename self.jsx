if (Meteor.isClient) {
  Meteor.startup(function() {
    React.render(<App />, document.body);
  });
}
