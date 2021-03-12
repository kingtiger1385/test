function fun1(){
    var search= prompt('جستجو کنید');
    if(search === null){
        var search="نتیجه"
    }
    if(search === ''){
        var search="نتیجه"
    }
    alert( search+ " " +"یافت نشد"  );
}
