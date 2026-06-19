export const formatMAD=(v:number)=>`${v.toFixed(2)} MAD`;
export const orderNumber=()=>`PZ-${new Date().getFullYear()}-${Math.floor(100000+Math.random()*900000)}`;
