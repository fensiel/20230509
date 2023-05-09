function solution(num_list){
    for (let i =0; i< num_list.length; i++) {
        if(num_list[i] < 0){
            return i;
        }
    }
    return -1;
}





//어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 
//처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 
//t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.


function soultion(n,t){
    let bacteria = n;
    for (let i =0; i<t; i++){
        bacteria *= 2;
    }
}

//머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다.
//  피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때,
//   n명이 주문한 피자를 남기지 않고 
//   모두 같은 수의 피자 조각을 먹어야 한다면
//    최소 몇 판을 시켜야 하는지를 
//    return 하도록 solution 함수를 완성해보세요.

function solution(n){
    let pizzas = 1;
    while (pizzas *6 < n){
        pizzas++;
    }
    return pizzas;
}






//369 게임중에 참가자 한명이 임의로 숫자를 내는데 박수를 몇번칠까?
function solution(order) {
    let count = 0;
    for (let i =1; i<= order; i++){
        let num = i;
        while (num !==0){
            if(num% 10 ===3 || num %10 ===6 | num % 10 ===9)
                count ++;
        }
        num =Math.floor(num/10);
    }
    return count;
}