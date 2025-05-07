lcminigames.Collection = (function() {
    function Collection() {
        Map.apply(this, arguments);
    }

    Collection.prototype = Object.create(Map.prototype);
    Collection.prototype.constructor = Collection;

    return Collection;
})();
