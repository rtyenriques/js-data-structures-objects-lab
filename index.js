// Write your solution in this file!
 
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    const newObj = {...driver};
    newObj[key] = value;
    return newObj

}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver
}

function deleteFromDriverByKey(driver, key) {
    let {[key]: omit, ...res} = driver
    return res

}

const doSomething = (obj, prop) => {
    let {[prop]: omit, ...res} = obj
    return res
  }


function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}