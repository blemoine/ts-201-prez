function divide(num:number, denom: number): number | Error {
  if ( denom === 0 ) {
    return Error('Cannot divide by 0');
  }
  return num / denom;
}

const result = divide(1,0)
result + 1;
