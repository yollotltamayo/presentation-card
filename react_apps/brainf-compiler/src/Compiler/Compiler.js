
function Check(Code){
    var cta = 0;
    for(var y = 0; y < Code.length;y++){
        if ( Code[y] === '['){
            //if( y + 1 < Code.Length){
                if(Code[y + 1] ===']'){
                    return 2;
                }
            //}
            cta+=1;
        }
        if( Code[y] === ']' ) {
            if( cta <= 0){
                return 1;
            }
            cta -=1;
        }
    }
    if( cta > 0)
        return 1;
    return 3;
}


export function Compiler(Code){
    let status = Check(Code);
    let stat = {
    Value : "",
    Errors: []
}

    if(status === 1){
    stat.Errors.push("UNBALANCED BRACKETS")
        return stat;
    }
    if(status === 2){
        stat.Errors.push("ENCLOSED BRACKETS")
        return stat;
    }
    var    loop       =  false;
    var    inloop     =  0;
    const  MAXN       =  10000;
    let    safeloop   =  0;
    let    tape       =  Array(1000).fill(0);
    let    ptr        =  0;
    let    loopStack  =  [];

  for( let i = 0; i < Code.length; i++ ) {
   safeloop++;
        if( safeloop > MAXN){
            console.log(stat)
            stat.Errors.push("RANGE ERROR");
            return stat;
        }

  const char = Code[i];

    if(loop) {
      if(char === "[") inloop++;
        if(char === "]") {
          if(inloop === 0) loop = false;
          else inloop--;
        }
      continue;
    }
    
    switch(char){
      case '+':
        tape[ptr]++;
        break;
      case '-':
        tape[ptr]--;
        break;
      case ',':
        tape[ptr] = prompt("Input")[0].charCodeAt()
        break;
      case '.':
        console.log(String.fromCharCode(tape[ptr]));
            if(tape[ptr] >= 33 && tape[ptr] <= 126)
                stat.Value += String.fromCharCode(tape[ptr]);
            else
                stat.Value += String(tape[ptr]);
        break;
        case '>':
        ptr++;
        tape[ptr] = tape[ptr] || 0;
        break;
      case '<':
        ptr--;
        tape[ptr] = tape[ptr] || 0;
        break;
      case '[':
        tape[ptr] === 0 ? loop = true: loopStack.push(i);
        break;
      case ']':
        tape[ptr] !== 0 ? i = loopStack[loopStack.length-1]: loopStack.pop();
        break;
      default:
        break;
      }
    }
    console.log(stat);
    return stat;
}
export default Compiler;



