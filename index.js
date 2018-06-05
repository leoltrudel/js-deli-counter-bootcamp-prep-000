var positionInLine = 0

function takeANumber(line) {

  positionInLine++
  line.push(positionInLine)
  return `Welcome, you are number ${positionInLine}.`
}

function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty."
  } else {
    var customersInLine = "The line is currently: "
    for(let customer of line) {
      customersInLine += `${line.indexOf(customer) + 1}. ${customer}, `
    }
    return customersInLine.substring(0, customersInLine.length - 2)
  }
}




