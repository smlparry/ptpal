Session.setDefault('counter', 0);

Template.hello.helpers({
    counter: function() {
        return Session.get('counter');
    }
});
