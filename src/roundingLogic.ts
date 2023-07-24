//This function rounds an input to closest 2.5

export function r2p5( float: number ) {
  return (Math.floor( ( float + 1.25 ) * 0.4 ) / 0.4)
}


// should i do it like this?
//
// Number.prototype.toTwoPointFive = function( this: number ) {
// return ( Math.floor ( ( this + 1.25 ) * 0.4 ) / 0.4 )
// }
//
// and then call values like this ?
//
// 11.38.toTwoPointFive()
//
// is this even legal ?
