/**
 * Swaps two elements in an array.
 * @param Arr - The array to modify.
 * @param Caller - The index of the first element to swap.
 * @param Target - The index of the second element to swap.
 * @returns {any[]} - The modified array.
 */
export default (Arr, Caller, Target) => {
    let Instance = Arr.constructor();
    let Stash = Arr;
    let InstanceType = Array.isArray(Instance) ? 'array' : typeof Instance;
    // Check types and throw err if no arr is passed
    if (InstanceType !== 'array')
        throw new Error('[ERR] SwapArray expects an array as the first parameter');
    // Copy the Arr-Content into new Instance - so we don't overwrite the passed array
    Stash.map((s, i) => Instance[i] = s);
    // Update indexes
    Instance[Caller] = Instance.splice(Target, 1, Instance[Caller])[0];
    return Instance;
};
