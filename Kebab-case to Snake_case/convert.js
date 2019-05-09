function convert(str) {
    var index=str.indexOf("-");
    if (index!==-1){
        return str.slice(0,index-1)+"_"+str.slice(index+1);
    }
    return "Enter a valid kebab-case string which contains - ";
}