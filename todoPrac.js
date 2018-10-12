var todoList = (function(){

    var arr = [];

    //callback 받음
    function add(obj, callback){
        arr.push(obj);
        callback();
    }


    return {
        add: add
    }
})();