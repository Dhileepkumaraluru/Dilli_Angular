list1=["hello","heyy","how","india"]
list2=list1.map(function(element){
    return element.length
})
function sumoflist(prevvalue,currentvalue){
    return prevvalue+currentvalue
}
let result=list2.reduce(sumoflist)
console.log(result)