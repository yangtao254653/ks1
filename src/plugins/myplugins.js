let myplugin = function(Vue){
    Vue.prototype.nodoufn = function(fn,time){
        let timer = null;
        return function(){
            clearTimeout(timer);
            timer = setTimeout(function(){
                fn();
            },time);
        }
    }
}
export default myplugin;