// Case 1 - Default Export
// export default function square(x) {
//     return x * x;
// }

// Case 2 - Named Export
// export function square(x) { 
//     return x * x;
// }

// Case 3 - Multi Export
// Only one default export allowed per module.
export default function square(x) { 
    return x * x;
}

export function check(x) { 
    return `Checked: ${x}`;
}