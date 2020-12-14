/**
    In software engineering, a mediator is a behavioral design pattern that allows us to
    expose a unified interface through which the different parts of a system may communicate.
    If it appears a system may have too many direct relationships between modules
    (colleagues), it may be time to have a central point of control that modules communicate
    through instead. The Mediator promotes loose coupling by ensuring that instead
    of modules referring to each other explicitly, their interaction is handled through this
    central point.
 */
var mediator = (function(){
// Storage for our topics/events
    var channels = {};
    // Subscribe to an event, supply a callback to be executed
    // when that event is broadcast
    var subscribe = function(channel, fn){
        if (!channels[channel]) channels[channel] = [];
        channels[channel].push({ context: this, callback: fn });
        return this;
    };
    // Publish/broadcast an event to the rest of the application
    var publish = function(channel){
        if (!channels[channel]) return false;
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0, l = channels[channel].length; i < l; i++) {
            var subscription = channels[channel][i];
            subscription.callback.apply(subscription.context, args);
        }
        return this;
    };

    return {
        publish: publish,
        subscribe: subscribe,
        installTo: function(obj){
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    };
}());

(function( m ){
// Set a default value for 'person'
    var person = "Luke";
    // Subscribe to a topic/event called 'nameChange' with
    // a callback function which will log the original
    // person's name and (if everything works) the incoming
    // name
    m.subscribe('nameChange', function( arg ){
    console.log( person ); // Luke
    person = arg;
    console.log( person ); // David
    });
    // Publish the 'nameChange' topic/event with the new data
    m.publish( 'nameChange', 'David' );
})(mediator);
