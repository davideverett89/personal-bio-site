const printToDOM = (divId, stringToPrint) => {
  $(`#${divId}`).html(stringToPrint);
};

export default { printToDOM };
